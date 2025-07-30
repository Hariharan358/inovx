import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "../NotFound"; // make sure the path is correct
import banner from "../../components/Members/banner.jpg"
import webinar from "../../components/eventimg/webinar_bargay.png"
import seminar from "../../components/eventimg/buvi.jpg"
import workato from "../../components/eventimg/workato.jpg"
import placement from "../../components/eventimg/placemnt.jpg"
import inguration from "../../components/eventimg/image.png"

const inauguration = {
  inauguration: [
    {
      id: "inovx",
      title: "Inauguration of InovX REC",
      image: inguration,
      date: "April 3, 2025",
      venue: "REC Campus",
      description: `Join us for the grand inauguration of InovX at REC, a platform dedicated to fostering innovation, technology, and collaboration among students and industry professionals.`,
      chiefGuests: [
        { name: "Dhana Prabu Sekar", description: "Alumni and entrepreneur." },
        { name: "A2D Nandhakumar", description: "Tech influencer." }
      ],
      significance: `A celebration of vision, collaboration, and innovation marking the beginning of an exciting journey for REC students and faculty.`
    },
    {
      id: "student-networking",
      title: "Student Networking Session",
      image: seminar,
      date: "July 25, 2025",
      venue: "A105, Admin Block",
      description: `Connect with fellow students, alumni, and industry professionals. Build meaningful relationships and expand your professional network in an interactive environment designed for career growth.`,
      chiefGuests: [
        { name: "Bhuvaneshwaran", description: "Assistant Professor, Department of CSE" },
        { name: "Vignesh", description: "President, InovX" },
        { name: "Hariharan K", description: "Technical Head, InovX" }
      ],
      significance: `An opportunity to engage with experienced mentors and peers to foster collaboration and open doors for future opportunities.`
    },
    {
      id: "workato-hackathon",
      title: "Workato AI Hackathon",
      image: workato,
      date: "July 9-10, 2025",
      venue: "Indoor Auditorium, REC",
      description: `A competitive hackathon focused on AI and automation solutions. Collaborate with teams to build innovative projects and showcase your skills to experts from Workato.`,
      chiefGuests: [
        { name: "Ananya Raj", description: "AI Researcher at OpenAI." },
        { name: "Vikram Iyer", description: "Product Head at Google India." }
      ],
      significance: `Challenge your problem-solving skills and gain exposure to cutting-edge AI technologies and industry leaders.`
    },
    {
      id: "research-webinar",
      title: "Higher Studies and Career in AI",
      image: webinar,
      date: "May 10, 2025",
      venue: "Online Session",
      description: `Artificial Intelligence (AI) is a rapidly growing field combining computer science, mathematics, and domain knowledge to create intelligent systems. This webinar covers advanced coursework and research areas such as machine learning, NLP, computer vision, robotics, and data science to guide your higher studies and career path in AI.`,
      chiefGuests: [
        { name: "Ujjain", description: "President, IEEE TEMS" },
        { name: "Bhargav", description: "Final Year, CSBS, REC" }
      ],
      significance: `Gain insights into the evolving AI landscape and explore academic and career opportunities in this dynamic domain.`
    },
    {
      id: "event-placement",
      title: "Internships and Job Switching Strategies",
      image: placement,
      date: "May 3, 2025",
      venue: "A105, Admin Block",
      description: `This seminar by Mohammed Faheed offers valuable insights into securing impactful internships and navigating job switching effectively. Learn resume building, interview preparation, and career planning to maximize your professional growth and transition smoothly between roles.`,
      chiefGuests: [
        { name: "Mohammed Faheed", description: "Industry Expert and Career Coach" }
      ],
      significance: `Equip yourself with essential skills and knowledge to excel in internships and make smart career decisions.`
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
