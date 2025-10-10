import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long']
  },
  date: {
    type: String,
    required: [true, 'Event date is required']
  },
  venue: {
    type: String,
    required: [true, 'Event venue is required'],
    trim: true,
    minlength: [2, 'Venue must be at least 2 characters long']
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long']
  },
  type: {
    type: String,
    enum: ['upcoming', 'live', 'past'],
    default: 'upcoming',
    required: true
  },
  image: {
    type: String,
    required: [true, 'Event image is required']
  },
  link: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for better query performance
eventSchema.index({ type: 1, createdAt: -1 });
eventSchema.index({ title: 'text', description: 'text' });

// Virtual for formatted date
eventSchema.virtual('formattedDate').get(function() {
  return new Date(this.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Pre-save middleware to update updatedAt
eventSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Event = mongoose.model('Event', eventSchema);

export default Event;

