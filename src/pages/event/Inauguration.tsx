import React from "react";
import { useNavigate } from "react-router-dom";

const inaugurationData = {
  title: "Inauguration of InovX REC",
  image: "/slider/image2.jpg",
  date: "April 3, 2025",
  venue: "REC Campus",
  description: `Join us for the grand inauguration of our club InovX REC. This milestone event marks the beginning of our journey to foster innovation, creativity, and technological excellence within our community.`,
  chiefGuests: [
    {
      name: "Dhana Prabu Sekar",
      description: "Esteemed alumni and successful entrepreneur."
    },
    {
      name: "A2D Nandhakumar",
      description: "Renowned tech influencer."
    }
  ],
  significance: `The inauguration of InovX REC is not just a ceremony—it's a celebration of vision, collaboration, and the drive to make a difference in the tech world. Be part of the beginning!`
};

const Inauguration = () => {
  const navigate = useNavigate();
  const event = inaugurationData;

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <button className="mb-6 text-blue-600 hover:underline" onClick={() => navigate(-1)}>&larr; Back</button>
        <img src={event.image} alt={event.title} className="w-full max-h-96 object-cover rounded-xl mb-8 shadow-lg" />
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">{event.date} | {event.venue}</div>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">{event.description}</p>
        <h2 className="text-2xl font-semibold mb-2">Chief Guests</h2>
        <ul className="mb-8 list-disc list-inside space-y-2">
          {event.chiefGuests.map((guest, idx) => (
            <li key={idx}>
              <strong>{guest.name}:</strong> {guest.description}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Significance</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-200">{event.significance}</p>
      </div>
    </div>
  );
};

export default Inauguration;