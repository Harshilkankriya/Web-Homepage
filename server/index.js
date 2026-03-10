import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import applicationRoutes from './routes/applications.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => {
    res.send('Karo Pitch API is running');
});

// Remove strict query deprecation warning
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/karopitch')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
