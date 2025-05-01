import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    image: {
        type: String,
        required: [true, 'Please provide an image URL']
    },
    tags: {
        type: [String],
        required: [true, 'Please provide at least one tag']
    },
    demoUrl: {
        type: String
    },
    githubUrl: {
        type: String,
        required: [true, 'Please provide a GitHub URL']
    }
}, {
    timestamps: true
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);