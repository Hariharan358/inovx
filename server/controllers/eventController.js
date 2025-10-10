import Event from '../models/Event.js';
import cloudinary from '../config/cloudinary.js';

// @desc    Get all events
// @route   GET /api/events
// @access  Public
export const getEvents = async (req, res) => {
  try {
    const { type, limit = 50, page = 1 } = req.query;
    
    let query = {};
    if (type && ['upcoming', 'live', 'past'].includes(type)) {
      query.type = type;
    }

    const events = await Event.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Event.countDocuments(query);

    res.json({
      success: true,
      data: events,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching events',
      error: error.message
    });
  }
};

// @desc    Get single event
// @route   GET /api/events/:id
// @access  Public
export const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching event',
      error: error.message
    });
  }
};

// @desc    Create new event
// @route   POST /api/events
// @access  Private (Admin)
export const createEvent = async (req, res) => {
  try {
    const { title, date, venue, description, type, link } = req.body;
    const imageFile = req.file;

    // Validate required fields
    if (!title || !date || !venue || !description || !type) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Upload image to Cloudinary if provided
    let imageUrl = '';
    if (imageFile) {
      const result = await cloudinary.uploader.upload(
        `data:${imageFile.mimetype};base64,${imageFile.buffer.toString('base64')}`,
        {
          folder: 'inovx_events',
          resource_type: 'image',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto' }
          ]
        }
      );
      imageUrl = result.secure_url;
    }

    // Create event
    const event = new Event({
      title,
      date,
      venue,
      description,
      type,
      image: imageUrl,
      link: link || ''
    });

    const savedEvent = await event.save();

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: savedEvent
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating event',
      error: error.message
    });
  }
};

// @desc    Update event
// @route   PUT /api/events/:id
// @access  Private (Admin)
export const updateEvent = async (req, res) => {
  try {
    const { title, date, venue, description, type, link } = req.body;
    const imageFile = req.file;

    let updateData = {
      title,
      date,
      venue,
      description,
      type,
      link
    };

    // Upload new image to Cloudinary if provided
    if (imageFile) {
      const result = await cloudinary.uploader.upload(
        `data:${imageFile.mimetype};base64,${imageFile.buffer.toString('base64')}`,
        {
          folder: 'inovx_events',
          resource_type: 'image',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto' }
          ]
        }
      );
      updateData.image = result.secure_url;
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      message: 'Event updated successfully',
      data: event
    });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating event',
      error: error.message
    });
  }
};

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private (Admin)
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    // Delete image from Cloudinary if it exists
    if (event.image && event.image.includes('cloudinary')) {
      const publicId = event.image.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(publicId);
    }

    await Event.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Event deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting event',
      error: error.message
    });
  }
};

// @desc    Search events
// @route   GET /api/events/search
// @access  Public
export const searchEvents = async (req, res) => {
  try {
    const { q, type } = req.query;

    let query = {};

    // Text search
    if (q) {
      query.$text = { $search: q };
    }

    // Type filter
    if (type && ['upcoming', 'live', 'past'].includes(type)) {
      query.type = type;
    }

    const events = await Event.find(query)
      .sort({ createdAt: -1 })
      .limit(20);

    res.json({
      success: true,
      data: events
    });
  } catch (error) {
    console.error('Error searching events:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while searching events',
      error: error.message
    });
  }
};

