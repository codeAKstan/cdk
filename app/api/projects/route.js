import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
    try {
        await connectDB();
        const projects = await Project.find({}).sort({ createdAt: -1 });
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const data = await request.formData();
        const image = data.get('image');

        if (!image) {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const imagePath = join(process.cwd(), 'public', 'uploads', image.name);
        await writeFile(imagePath, buffer);

        const projectData = {};
        data.forEach((value, key) => {
            if (key !== 'image') {
                projectData[key] = value;
            }
        });

        projectData.image = `/uploads/${image.name}`;
        projectData.tags = projectData.tags.split(',').map(tag => tag.trim());

        const project = await Project.create(projectData);

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}