import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    founderName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startupName: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    pitchDeckUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'shortlisted', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);
