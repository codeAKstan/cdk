import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Profile from '@/models/Profile';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { put, del } from '@vercel/blob';

export async function GET() {
    try {
        await connectDB();
        // Always get the first profile, create one if it doesn't exist
        let profile = await Profile.findOne();
        if (!profile) {
            profile = await Profile.create({});
        }
        return NextResponse.json(profile);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await connectDB();
        const data = await request.formData();
        
        let profile = await Profile.findOne();
        if (!profile) {
            profile = await Profile.create({});
        }

        // Update text fields
        if (data.has('name')) profile.name = data.get('name');
        if (data.has('headline')) profile.headline = data.get('headline');
        if (data.has('bio')) profile.bio = data.get('bio');
        if (data.has('skills')) {
            try {
                profile.skills = JSON.parse(data.get('skills'));
            } catch (e) {
                // Ignore invalid JSON
            }
        }

        // Handle Resume Upload
        const resumeFile = data.get('resume');
        if (resumeFile && typeof resumeFile !== 'string') {
            // Delete old resume if exists
            if (profile.resumeUrl) {
                // Try to delete old blob, but don't fail if it doesn't exist
                try {
                     // Extract path from URL if needed, or just pass URL if supported
                     // Assuming we store full URL
                     await del(profile.resumeUrl);
                } catch (e) {
                    console.error("Failed to delete old resume", e);
                }
            }

            const fileName = `${Date.now()}-${resumeFile.name}`;
            const blob = await put(`resumes/${fileName}`, resumeFile, {
                access: 'public',
                token: process.env.BLOB_READ_WRITE_TOKEN,
                contentType: 'application/pdf', // Enforce PDF or detect
            });

            profile.resumeUrl = blob.url;
            profile.resumeName = resumeFile.name;
            profile.resumeSize = (resumeFile.size / 1024 / 1024).toFixed(2) + ' MB';
        }

        profile.lastUpdated = Date.now();
        await profile.save();

        return NextResponse.json(profile);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
