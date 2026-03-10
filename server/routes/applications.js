import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

// Mock endpoint to submit a pitch application
router.post('/', async (req, res) => {
    try {
        // In a real app, you would handle file uploads (e.g. via multer + AWS S3)
        // Here we just save the incoming JSON data
        // const newApp = new Application(req.body);
        // await newApp.save();

        // Simulate successful save for now
        res.status(201).json({ message: 'Application submitted successfully', data: req.body });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting application', error: error.message });
    }
});

// Mock endpoint to get applications
router.get('/', async (req, res) => {
    try {
        // const applications = await Application.find();
        res.status(200).json({ message: 'List of applications', count: 0 });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

export default router;
