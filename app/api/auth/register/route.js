import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

// This route should be protected or used only once for setup
export async function POST(request) {
    try {
        await connectDB();
        const { email, password } = await request.json();

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const user = await User.create({ email, password });
        return NextResponse.json({ message: "User created successfully", userId: user._id }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
