# MongoDB Integration Setup Guide

This guide will help you set up the complete MongoDB backend for the InovX events management system.

## 🚀 Features

- ✅ **MongoDB Database**: Persistent data storage
- ✅ **Express.js API**: RESTful backend server
- ✅ **Cloudinary Integration**: Server-side image upload
- ✅ **File Upload**: Multer middleware for handling files
- ✅ **CORS Support**: Cross-origin resource sharing
- ✅ **Error Handling**: Comprehensive error management
- ✅ **Validation**: Server-side data validation
- ✅ **Search Functionality**: Text search capabilities

## 📋 Prerequisites

1. **Node.js** (v16 or higher)
2. **MongoDB** (local or MongoDB Atlas)
3. **Cloudinary Account**
4. **Git** (for version control)

## 🛠️ Setup Instructions

### 1. MongoDB Setup

#### Option A: Local MongoDB
1. **Install MongoDB Community Edition**
   - Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Follow installation instructions for your OS
   - Start MongoDB service

2. **Create Database**
   ```bash
   mongosh
   use inovx_events
   ```

#### Option B: MongoDB Atlas (Recommended)
1. **Create Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for free account
   - Create a new cluster

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

### 2. Backend Setup

1. **Navigate to Server Directory**
   ```bash
   cd server
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   # Copy environment template
   cp env.example .env
   ```

4. **Update Environment Variables**
   ```env
   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/inovx_events
   # Or for Atlas: mongodb+srv://username:password@cluster.mongodb.net/inovx_events

   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   CLOUDINARY_UPLOAD_PRESET=inovx_events

   # CORS Configuration
   CORS_ORIGIN=http://localhost:5173
   ```

### 3. Cloudinary Setup

1. **Create Cloudinary Account**
   - Go to [Cloudinary](https://cloudinary.com)
   - Sign up for free account
   - Get your credentials from dashboard

2. **Configure Upload Preset**
   - Go to Settings > Upload > Upload presets
   - Create new preset: `inovx_events`
   - Set signing mode to: `Unsigned`
   - Save preset

3. **Update Environment Variables**
   - Replace Cloudinary credentials in `.env`

### 4. Frontend Configuration

1. **Add API URL to Frontend**
   ```bash
   # In your frontend root directory
   echo "VITE_API_URL=http://localhost:5000/api" > .env
   ```

2. **Update Vite Config** (if needed)
   ```javascript
   // vite.config.ts
   export default defineConfig({
     // ... other config
     server: {
       proxy: {
         '/api': {
           target: 'http://localhost:5000',
           changeOrigin: true
         }
       }
     }
   });
   ```

## 🚀 Running the Application

### 1. Start Backend Server
```bash
cd server
npm run dev
```

### 2. Start Frontend
```bash
# In another terminal
npm run dev
```

### 3. Access Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Admin Dashboard: http://localhost:5173/admin

## 📁 Project Structure

```
project/
├── server/                 # Backend API
│   ├── config/            # Configuration files
│   │   ├── database.js    # MongoDB connection
│   │   └── cloudinary.js  # Cloudinary config
│   ├── controllers/       # API controllers
│   │   └── eventController.js
│   ├── middleware/        # Custom middleware
│   │   └── upload.js      # File upload handling
│   ├── models/           # MongoDB models
│   │   └── Event.js      # Event schema
│   ├── routes/           # API routes
│   │   └── events.js     # Event endpoints
│   ├── server.js         # Main server file
│   ├── package.json      # Backend dependencies
│   └── .env              # Environment variables
├── src/                  # Frontend React app
│   ├── services/         # API services
│   │   └── eventService.ts
│   ├── pages/           # React components
│   │   ├── Admin.tsx    # Admin dashboard
│   │   └── Events.tsx   # Events page
│   └── ...
└── package.json         # Frontend dependencies
```

## 🔧 API Endpoints

### Events API
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event
- `GET /api/events/search` - Search events

### Health Check
- `GET /api/health` - API health status

## 🗄️ Database Schema

### Event Model
```javascript
{
  title: String (required, min: 3),
  date: String (required),
  venue: String (required, min: 2),
  description: String (required, min: 10),
  type: String (enum: ['upcoming', 'live', 'past']),
  image: String (required),
  link: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Security Considerations

### For Production
1. **Environment Variables**
   - Never commit `.env` files
   - Use secure environment management

2. **Authentication**
   - Add JWT authentication
   - Implement role-based access

3. **Input Validation**
   - Server-side validation
   - Sanitize user inputs

4. **File Upload Security**
   - Validate file types
   - Limit file sizes
   - Scan for malware

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   ```bash
   # Check MongoDB service
   sudo systemctl status mongod
   
   # Check connection string
   # Verify network access for Atlas
   ```

2. **CORS Errors**
   ```bash
   # Check CORS_ORIGIN in .env
   # Ensure frontend URL is correct
   ```

3. **File Upload Issues**
   ```bash
   # Check Cloudinary credentials
   # Verify upload preset exists
   # Check file size limits
   ```

4. **API Not Responding**
   ```bash
   # Check server logs
   # Verify port availability
   # Check firewall settings
   ```

### Debug Commands
```bash
# Check MongoDB connection
mongosh "your-connection-string"

# Test API endpoints
curl http://localhost:5000/api/health

# Check environment variables
node -e "console.log(process.env.MONGODB_URI)"
```

## 📊 Monitoring

### Health Checks
- API health endpoint: `/api/health`
- Database connection status
- Cloudinary connectivity

### Logs
- Server logs in console
- MongoDB query logs
- Error tracking

## 🔄 Deployment

### Backend Deployment
1. **Environment Setup**
   - Set production environment variables
   - Configure MongoDB Atlas
   - Set up Cloudinary

2. **Deploy Options**
   - Heroku
   - Vercel
   - Railway
   - DigitalOcean

### Frontend Deployment
1. **Build Application**
   ```bash
   npm run build
   ```

2. **Deploy Options**
   - Vercel
   - Netlify
   - GitHub Pages

## 📈 Performance Optimization

1. **Database Indexing**
   - Text search indexes
   - Compound indexes for queries

2. **Image Optimization**
   - Cloudinary transformations
   - Lazy loading

3. **Caching**
   - Redis for session storage
   - CDN for static assets

## 🆘 Support

If you encounter issues:

1. Check the console logs
2. Verify environment variables
3. Test API endpoints manually
4. Check MongoDB connection
5. Verify Cloudinary setup

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Event categories/tags
- [ ] Advanced search filters
- [ ] Event analytics
- [ ] Email notifications
- [ ] Real-time updates
- [ ] Image optimization
- [ ] API rate limiting

