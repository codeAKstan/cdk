import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    headline: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    skills: [{
        name: String,
        level: Number // 0-100
    }],
    resumeUrl: {
        type: String,
        default: ''
    },
    resumeName: {
        type: String,
        default: ''
    },
    resumeSize: {
        type: String,
        default: ''
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// We'll use a singleton pattern where we always fetch/update the first document
export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
