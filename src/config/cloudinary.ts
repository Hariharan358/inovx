// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: "your-cloud-name", // Replace with your actual cloud name
  uploadPreset: "inovx_events", // Replace with your upload preset
  apiUrl: "https://api.cloudinary.com/v1_1",
};

// Get the full upload URL
export const getUploadUrl = () => {
  return `${CLOUDINARY_CONFIG.apiUrl}/${CLOUDINARY_CONFIG.cloudName}/image/upload`;
};

// Upload image to Cloudinary
export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);

  try {
    const response = await fetch(getUploadUrl(), {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

// Setup instructions for Cloudinary
export const CLOUDINARY_SETUP_INSTRUCTIONS = [
  "1. Create a Cloudinary account at https://cloudinary.com",
  "2. Get your cloud name from the dashboard",
  "3. Go to Settings > Upload > Upload presets",
  "4. Create a new upload preset named 'inovx_events'",
  "5. Set the preset to 'Unsigned' for client-side uploads",
  "6. Replace 'your-cloud-name' in src/config/cloudinary.ts with your actual cloud name",
  "7. Optionally, set up folder organization and image transformations",
];

