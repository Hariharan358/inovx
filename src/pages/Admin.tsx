import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Upload, Calendar, MapPin, Users, FileText, Plus, Save, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { addEvent } from "@/services/eventService";
import { uploadToCloudinary, CLOUDINARY_SETUP_INSTRUCTIONS } from "@/config/cloudinary";

// Form validation schema
const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  date: z.string().min(1, "Date is required"),
  venue: z.string().min(2, "Venue must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  type: z.enum(["upcoming", "live", "past"]),
  image: z.string().min(1, "Image is required"),
  link: z.string().optional(),
});

type EventFormData = z.infer<typeof eventFormSchema>;

const Admin = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      type: "upcoming",
    },
  });

  const watchedType = watch("type");

  // Cloudinary upload function (now imported from config)

  // Handle image upload
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    setIsUploading(true);
    try {
      const imageUrl = await uploadToCloudinary(file);
      setValue("image", imageUrl);
      toast({
        title: "Image uploaded successfully!",
        description: "Your image has been uploaded to Cloudinary.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Handle form submission
  const onSubmit = async (data: EventFormData) => {
    setIsSubmitting(true);
    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('date', data.date);
      formData.append('venue', data.venue);
      formData.append('description', data.description);
      formData.append('type', data.type);
      if (data.link) {
        formData.append('link', data.link);
      }

      // Add the image file if it exists
      const imageInput = document.getElementById('image') as HTMLInputElement;
      if (imageInput?.files?.[0]) {
        formData.append('image', imageInput.files[0]);
      }

      // Add event using the service
      const newEvent = await addEvent(formData);
      
      console.log("Event added:", newEvent);
      
      toast({
        title: "Event added successfully!",
        description: `${data.title} has been added to the events timeline.`,
      });
      
      // Reset form
      reset();
      setImagePreview("");
    } catch (error) {
      console.error("Error adding event:", error);
      toast({
        title: "Failed to add event",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Admin Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Add new events to the timeline
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Add New Event
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill in the details below to add a new event to the timeline
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Event Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Event Title *
                    </Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="title"
                        {...register("title")}
                        placeholder="Enter event title"
                        className="pl-10 border-gray-300 dark:border-gray-600 focus:border-club-purple dark:focus:border-club-purple"
                      />
                    </div>
                    {errors.title && (
                      <p className="text-sm text-red-600 dark:text-red-400">{errors.title.message}</p>
                    )}
                  </div>

                  {/* Date and Venue Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Event Date *
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="date"
                          type="date"
                          {...register("date")}
                          className="pl-10 border-gray-300 dark:border-gray-600 focus:border-club-purple dark:focus:border-club-purple"
                        />
                      </div>
                      {errors.date && (
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.date.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="venue" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Venue *
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="venue"
                          {...register("venue")}
                          placeholder="Enter venue"
                          className="pl-10 border-gray-300 dark:border-gray-600 focus:border-club-purple dark:focus:border-club-purple"
                        />
                      </div>
                      {errors.venue && (
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.venue.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Event Type */}
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Event Status *
                    </Label>
                    <Select onValueChange={(value) => setValue("type", value as "upcoming" | "live" | "past")}>
                      <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:border-club-purple dark:focus:border-club-purple">
                        <SelectValue placeholder="Select event status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upcoming">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            Upcoming
                          </div>
                        </SelectItem>
                        <SelectItem value="live">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            Live
                          </div>
                        </SelectItem>
                        <SelectItem value="past">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                            Past
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.type && (
                      <p className="text-sm text-red-600 dark:text-red-400">{errors.type.message}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      {...register("description")}
                      placeholder="Enter event description"
                      rows={4}
                      className="border-gray-300 dark:border-gray-600 focus:border-club-purple dark:focus:border-club-purple resize-none"
                    />
                    {errors.description && (
                      <p className="text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
                    )}
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="image" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Event Image *
                    </Label>
                    <div className="space-y-4">
                      <div className="relative">
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="border-gray-300 dark:border-gray-600 focus:border-club-purple dark:focus:border-club-purple"
                        />
                        {isUploading && (
                          <div className="absolute right-3 top-3">
                            <Loader2 className="h-4 w-4 animate-spin text-club-purple" />
                          </div>
                        )}
                      </div>
                      
                      {/* Image Preview */}
                      {imagePreview && (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-48 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                          />
                        </div>
                      )}
                    </div>
                    {errors.image && (
                      <p className="text-sm text-red-600 dark:text-red-400">{errors.image.message}</p>
                    )}
                  </div>

                  {/* Event Link (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="link" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Event Link (Optional)
                    </Label>
                    <Input
                      id="link"
                      {...register("link")}
                      placeholder="Enter event link (e.g., /event/event-name)"
                      className="border-gray-300 dark:border-gray-600 focus:border-club-purple dark:focus:border-club-purple"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        reset();
                        setImagePreview("");
                      }}
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Reset Form
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-club-purple to-purple-600 hover:from-club-purple/90 hover:to-purple-700 text-white px-8 py-2 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Adding Event...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Add Event
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-blue-100 flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  Setup Instructions
                </CardTitle>
              </CardHeader>
                             <CardContent className="text-blue-800 dark:text-blue-200">
                 <div className="space-y-2 text-sm">
                   {CLOUDINARY_SETUP_INSTRUCTIONS.map((instruction, index) => (
                     <p key={index}>• {instruction}</p>
                   ))}
                   <p>• The event will be automatically added to the events timeline</p>
                 </div>
               </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Admin;
