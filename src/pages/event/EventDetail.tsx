import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import banner from "../../components/Members/banner.jpg"

const eventData = {
  "crack-the-case": {
    title: "Crack the Case",
    image: banner,
    date: "5th & 6th August 2025",
    venue: "Main Seminar Hall",
    about: `Crack the Case is a national-level, business strategy case competition where student teams take on a real-world fintech challenge inspired by India's digital financial transformation. Analyze, strategize, and pitch your way through a high-stakes scenario built around innovation, inclusion, and disruption.`,
    timeline: [
      { label: "Registration Opens", date: "July 10, 2025" },
      { label: "Online Screening Submission Deadline", date: "July 30, 2025" },
      { label: "Shortlist Announcement", date: "August 2, 2025" },
      { label: "Offline Prelims", date: "August 5, 2025" },
      { label: "Finale & Guest Session", date: "August 6, 2025" },
    ],
    schedule: [
      { phase: "Phase 1: Online Screening", details: "Submit your proposed solution (PDF or slide deck). Our internal panel will evaluate submissions based on originality, feasibility, and clarity. Only shortlisted teams will qualify for the next phase." },
      { phase: "Phase 2: Offline Prelims (5th Aug)", details: "Qualified teams will solve a detailed live case and present structured solutions. Teams qualifying for this phase must complete registration and pay an entry fee to confirm their spot." },
      { phase: "Phase 3: Finale + Guest Session (6th Aug)", details: "A keynote session by our Chief Guest, followed by final presentations from the Top 5 teams to an expert jury panel." }
    ],
    sampleCase: {
      title: "Sample Case: Digital Payments in Rural India",
      description: "Imagine you are a fintech startup aiming to increase digital payment adoption in rural India. What strategies would you use to overcome barriers such as digital literacy, trust, and infrastructure? Present your solution in a structured format.",
      examplePdf: "/docs/crack-the-case-sample-solution.pdf", // Place the sample solution PDF in public/docs/
    },
    questionDoc: "/docs/crack-the-case-question.pdf", // Place the actual question document in public/docs/
    chiefGuest: {
      name: "Ms. Rajalakshmi Srinivasan",
      title: "Director – Product Management, Zoho Corporation",
      expertise: [
        "25+ years at Zoho Corporation",
        "Expert in product innovation and management",
        "Advocate for women in tech and youth mentorship",
        "Renowned speaker on tech-business intersection"
      ],
      bio: "Ms. Rajalakshmi is a leading voice in product innovation, women in tech, and youth mentorship. Her session will provide deep insights into building a long-term, impactful career in the tech-business intersection."
    },
    teamSize: "2–3 students",
    entryFee: "Applicable only for teams advancing to Phase 2",
    prizes: "Certificates and accolades for finalists"
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
      {/* Background Image - Bottom Left Corner */}
      <div className="fixed bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 opacity-10 md:opacity-20 pointer-events-none z-0">
        <img 
          src="/woman-portrait.png" 
          alt="Decorative background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto py-12 px-4 relative z-10">
        <button className="mb-6 text-blue-600 hover:underline" onClick={() => navigate(-1)}>&larr; Back</button>
        <img src={event.image} alt={event.title} className="w-full max-h-96 object-cover rounded-xl mb-8 shadow-lg" />
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">{event.date} | {event.venue}</div>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">{event.about}</p>

        {/* Timeline */}
        <h2 className="text-2xl font-semibold mb-2">Timeline</h2>
        <ul className="mb-8 list-disc list-inside space-y-1">
          {event.timeline.map((item, idx) => (
            <li key={idx}><strong>{item.label}:</strong> {item.date}</li>
          ))}
        </ul>

        {/* Schedule/Phases */}
        <h2 className="text-2xl font-semibold mb-2">Event Schedule & Phases</h2>
        <ol className="mb-8 list-decimal list-inside space-y-2">
          {event.schedule.map((phase, idx) => (
            <li key={idx}>
              <strong>{phase.phase}:</strong> {phase.details}
            </li>
          ))}
        </ol>

        {/* Venue */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Venue</h2>
          <div className="text-gray-700 dark:text-gray-200">{event.venue}</div>
        </div>

        {/* Sample Case */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sample Case</h2>
          <div className="font-bold mb-1">{event.sampleCase.title}</div>
          <div className="text-gray-700 dark:text-gray-200 mb-2">{event.sampleCase.description}</div>
          {event.sampleCase.examplePdf && (
            <div className="mt-2">
              <a href={event.sampleCase.examplePdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Download Sample Solution (PDF)</a>
            </div>
          )}
          {event.sampleCase.example && (
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-4">
              <div className="font-semibold mb-2">Example Solution Outline:</div>
              <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-100">{event.sampleCase.example}</pre>
            </div>
          )}
        </div>

        {/* Actual Question Document */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Actual Case Question</h2>
          <a href={event.questionDoc} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Download the Case Question (PDF)</a>
        </div>

        {/* Chief Guest Section */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-300">Chief Guest</h2>
          <div className="text-xl font-semibold mb-1">{event.chiefGuest.name}</div>
          <div className="text-gray-700 dark:text-gray-200 mb-2">{event.chiefGuest.title}</div>
          <ul className="mb-2 list-disc list-inside space-y-1">
            {event.chiefGuest.expertise.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
          <div className="text-gray-700 dark:text-gray-200">{event.chiefGuest.bio}</div>
        </div>

        {/* Team, Fee, Prizes */}
        <div className="mb-8">
          <strong>Team size:</strong> {event.teamSize}<br />
          <strong>Entry fee:</strong> {event.entryFee}<br />
          <strong>Prizes:</strong> {event.prizes}
        </div>
       <a href="https://forms.gle/EshASRSpyHivzLgN6"> <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition">Register</button></a>
      </div>
    </div>
  );
};

export default EventDetail;