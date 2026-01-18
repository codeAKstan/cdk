import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { put } from '@vercel/blob';

export async function GET() {
    try {
        await connectDB();
        const projects = await Project.find({}).sort({ createdAt: -1 });
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: "ID required" }, { status: 400 });
        }

        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Project deleted" });
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
        const id = data.get('id');
        
        if (!id) {
            return NextResponse.json({ error: "ID required" }, { status: 400 });
        }

        const project = await Project.findById(id);
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        const image = data.get('image');
        if (image && typeof image !== 'string') {
            // Upload new image
            const fileName = `${Date.now()}-${image.name}`;
            const blob = await put(`projects/${fileName}`, image, {
                access: 'public',
                token: process.env.BLOB_READ_WRITE_TOKEN,
                contentType: image.type || 'application/octet-stream',
            });
            project.image = blob.url;
        }

        // Update fields
        if (data.has('title')) project.title = data.get('title');
        if (data.has('description')) project.description = data.get('description');
        if (data.has('demoUrl')) project.demoUrl = data.get('demoUrl');
        if (data.has('githubUrl')) project.githubUrl = data.get('githubUrl');
        if (data.has('tags')) {
            project.tags = (data.get('tags') || '').split(',').map(tag => tag.trim()).filter(Boolean);
        }

        await project.save();

        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    try {
        await connectDB();
        const data = await request.formData();
        const image = data.get('image');

        if (!image || typeof image === 'string') {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        // Upload image to Vercel Blob
        const fileName = `${Date.now()}-${image.name}`;
        const blob = await put(`projects/${fileName}`, image, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN,
            contentType: image.type || 'application/octet-stream',
        });

        const projectData = {};
        data.forEach((value, key) => {
            if (key !== 'image') {
                projectData[key] = value;
            }
        });

        projectData.image = blob.url;
        projectData.tags = (projectData.tags || '').split(',').map(tag => tag.trim()).filter(Boolean);

        const project = await Project.create(projectData);

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
