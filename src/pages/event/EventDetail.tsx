import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import banner from "../../components/Members/banner.jpg"
import crack from "../event/images/WhatsApp Image 2025-08-13 at 18.11.54_f40cb6f3.jpg"
const eventData = {
  "crack-the-case": {
    title: "Crack the Case",
    image: banner,
    date: "5th & 6th August 2025",
    venue: "Main Seminar Hall, B Block",
    about: `Crack the Case is a national-level, business strategy case competition where student teams take on a real-world fintech challenge inspired by India's digital financial transformation. Analyze, strategize, and pitch your way through a high-stakes scenario built around innovation, inclusion, and disruption.`,
    chiefGuest: {
      name: "Ms. Rajalakshmi Srinivasan",
      title: "Director – Product Management, Zoho Corporation",
      bio: "Ms. Rajalakshmi is a leading voice in product innovation, women in tech, and youth mentorship. Her session will provide deep insights into building a long-term, impactful career in the tech-business intersection."
    }
  },
};

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return <div className="text-center py-20">Event not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto py-12 px-4 relative z-10">
        <button className="mb-6 text-blue-600 hover:underline" onClick={() => navigate(-1)}>&larr; Back</button>
        
        {/* Event Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">{event.date} | {event.venue}</div>
          <p className="text-lg text-gray-700 dark:text-gray-200">{event.about}</p>
        </div>

        {/* Event Image */}
        <div className="mb-8">
          <img 
            src={crack} 
            alt="Crack the Case Event - Students attending the presentation in seminar hall" 
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Chief Guest Section */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
          <img 
            src="/woman-portrait.png" 
            alt="Chief Guest portrait" 
            className="w-32 h-32 md:w-40 mr-3 p-1 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-md mb-4 md:mb-0" 
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-300">Chief Guest</h2>
            <div className="text-xl font-semibold mb-1">{event.chiefGuest.name}</div>
            <div className="text-gray-700 dark:text-gray-200 mb-2">{event.chiefGuest.title}</div>
            <div className="text-gray-700 dark:text-gray-200">{event.chiefGuest.bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
