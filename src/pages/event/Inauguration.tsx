import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "../NotFound"; // make sure the path is correct
import banner from "../../components/Members/banner.jpg"
import webinar from "../../components/eventimg/webinar_bargay.png"

const inauguration = {
  inauguration: [
    {
      id: "inovx",
      title: "Inauguration of InovX REC",
      image: banner,
      date: "April 3, 2025",
      venue: "REC Campus",
      description: `Join us for the grand inauguration...`,
      chiefGuests: [
        { name: "Dhana Prabu Sekar", description: "Alumni and entrepreneur." },
        { name: "A2D Nandhakumar", description: "Tech influencer." }
      ],
      significance: `A celebration of vision, collaboration...`
    },
    {
      id: "student-networking",
      title: "Student Networking Session",
      image: "/slider/image3.jpg",
      date: "25th July, 2025",
      venue: "A105, Admin Block",
      description: `Connect with fellow students, alumni, and industry professionals. Build meaningful relationships and expand your professional network in an interactive networking environment.`,
      chiefGuests: [
        { name: "Bhuvaneshwaran", description: "AI Researcher at OpenAI." },
        { name: "Vignesh", description: "Product Head at Google India." },
        { name: "Hariharan K", description: "Product Head at Google India." }
      ],
      significance: `Join the launch and witness tech evolution.`
    },
    {
      id: "workato-hackathon",
      title: "Launch of TechVerse",
      image: "/slider/image3.jpg",
      date: "9th & 10th July, 2025",
      venue: "Indoor Auditorium, REC",
      description: "A competitive hackathon focused on AI and automation solutions. Work with cutting-edge technologies and showcase your skills to potential employers from Workato.",
      chiefGuests: [
        { name: "Ananya Raj", description: "AI Researcher at OpenAI." },
        { name: "Vikram Iyer", description: "Product Head at Google India." }
      ],
      significance: `Join the launch and witness tech evolution.`
    },
    {
      id: "research-webinar",
      title: "Launch of TechVerse",
      image: webinar,
      date: "May 10, 2025",
      venue: "Online Session",
      description: `Unveiling TechVerse...`,
      chiefGuests: [
        { name: "Ujjain", description: "AI Researcher at OpenAI." },
        { name: "Bhargav", description: "Product Head at Google India." }
      ],
      significance: `Join the launch and witness tech evolution.`
    }
  ]
};

const Inauguration = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = inauguration.inauguration.find(e => e.id === id);

  if (!event) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <button
          className="mb-6 text-blue-600 hover:underline"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>

        <img
          src={event.image}
          alt={event.title}
          className="w-full max-h-96 object-cover rounded-xl mb-8 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          {event.date} | {event.venue}
        </div>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
          {event.description}
        </p>
        <h2 className="text-2xl font-semibold mb-2">Chief Guests</h2>
        <ul className="mb-8 list-disc list-inside space-y-2">
          {event.chiefGuests.map((guest, i) => (
            <li key={i}>
              <strong>{guest.name}:</strong> {guest.description}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Significance</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-200">
          {event.significance}
        </p>
        <hr className="border-gray-400 dark:border-gray-600 my-8" />
      </div>
    </div>
  );
};

export default Inauguration;
