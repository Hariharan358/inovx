import express from 'express';
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  searchEvents
} from '../controllers/eventController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Public routes
router.get('/', getEvents);
router.get('/search', searchEvents);
router.get('/:id', getEvent);

// Admin routes (with image upload)
router.post('/', upload.single('image'), createEvent);
router.put('/:id', upload.single('image'), updateEvent);
router.delete('/:id', deleteEvent);

export default router;

