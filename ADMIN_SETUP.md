# Admin Dashboard Setup Guide

This guide will help you set up the admin dashboard for adding events to the InovX website.

## Features

- ✅ **Event Management**: Add new events with all details
- ✅ **Image Upload**: Cloudinary integration for image hosting
- ✅ **Form Validation**: Comprehensive form validation with Zod
- ✅ **Real-time Preview**: Image preview before upload
- ✅ **Status Management**: Set events as upcoming, live, or past
- ✅ **Automatic Integration**: Events automatically appear in the timeline
- ✅ **Responsive Design**: Works on all devices
- ✅ **Dark Mode Support**: Full dark mode compatibility

## Setup Instructions

### 1. Cloudinary Setup

1. **Create Cloudinary Account**
   - Go to [https://cloudinary.com](https://cloudinary.com)
   - Sign up for a free account
   - Get your cloud name from the dashboard

2. **Configure Upload Preset**
   - Go to Settings > Upload > Upload presets
   - Click "Add upload preset"
   - Set preset name to: `inovx_events`
   - Set signing mode to: `Unsigned`
   - Save the preset

3. **Update Configuration**
   - Open `src/config/cloudinary.ts`
   - Replace `"your-cloud-name"` with your actual cloud name
   - Example: `cloudName: "my-awesome-cloud"`

### 2. Access Admin Dashboard

- Navigate to `/admin` in your browser
- Or click the "Admin" link in the navigation menu

### 3. Adding Events

1. **Fill in Event Details**
   - **Title**: Event name (required)
   - **Date**: Event date (required)
   - **Venue**: Event location (required)
   - **Status**: Upcoming, Live, or Past
   - **Description**: Event description (required)
   - **Image**: Upload event image (required)
   - **Link**: Optional event link

2. **Upload Image**
   - Click "Choose File" to select an image
   - Image will be uploaded to Cloudinary automatically
   - Preview will be shown before submission

3. **Submit Event**
   - Click "Add Event" to save
   - Event will be automatically added to the events timeline
   - Form will reset for the next event

## File Structure

```
src/
├── pages/
│   ├── Admin.tsx              # Admin dashboard component
│   └── Events.tsx             # Events page (updated to use service)
├── services/
│   └── eventService.ts        # Event data management
├── config/
│   └── cloudinary.ts          # Cloudinary configuration
└── components/
    └── Navbar.tsx             # Navigation (updated with admin link)
```

## Data Storage

Currently, events are stored in localStorage for simplicity. To integrate with a backend:

1. Replace the functions in `src/services/eventService.ts`
2. Update API endpoints to your backend
3. Add authentication if needed

## Customization

### Adding New Fields

1. Update the form schema in `Admin.tsx`
2. Add form fields to the component
3. Update the event interface in `eventService.ts`
4. Update the Events page to display new fields

### Styling

The admin dashboard uses:
- Tailwind CSS for styling
- Shadcn/ui components
- Framer Motion for animations
- Club color scheme (purple/teal/blue)

### Validation

Form validation is handled by:
- Zod schema validation
- React Hook Form
- Real-time error display

## Troubleshooting

### Image Upload Issues

1. **Check Cloudinary Configuration**
   - Verify cloud name is correct
   - Ensure upload preset exists and is unsigned
   - Check browser console for errors

2. **File Size Limits**
   - Cloudinary free tier: 10MB per file
   - Consider image optimization

3. **CORS Issues**
   - Ensure Cloudinary preset allows client-side uploads
   - Check browser console for CORS errors

### Form Submission Issues

1. **Validation Errors**
   - Check all required fields are filled
   - Ensure image is uploaded before submission
   - Verify date format is correct

2. **Storage Issues**
   - Check localStorage is available
   - Clear browser data if needed
   - Check console for errors

## Security Considerations

For production use:

1. **Add Authentication**
   - Implement login system
   - Protect admin routes
   - Add role-based access

2. **Backend Integration**
   - Replace localStorage with database
   - Add server-side validation
   - Implement proper error handling

3. **Image Security**
   - Add file type validation
   - Implement size limits
   - Consider image optimization

## Support

If you encounter issues:

1. Check the browser console for errors
2. Verify Cloudinary setup
3. Ensure all dependencies are installed
4. Check file permissions and paths

## Future Enhancements

- [ ] Event editing functionality
- [ ] Event deletion
- [ ] Bulk event import
- [ ] Event categories/tags
- [ ] Advanced image editing
- [ ] Event analytics
- [ ] Email notifications
- [ ] Multi-language support

