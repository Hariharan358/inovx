import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  venue: string;
  shortDescription: string;
}

interface EventSliderProps {
  events: Event[];
}

const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
  const [current, setCurrent] = React.useState(0);
  const navigate = useNavigate();

  const goTo = (idx: number) => setCurrent(idx);
  const next = () => setCurrent((prev) => (prev + 1) % events.length);
  const prev = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-2xl min-h-[520px]"> {/* Increased max width, min height, and border radius */}
      <div className="flex transition-all duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
        {events.map((event, idx) => (
          <div key={event.id} className="min-w-full p-12 flex flex-col items-center justify-center"> {/* Increased padding */}
            <img src={event.image} alt={event.title} className="w-full max-h-[340px] object-cover rounded-2xl mb-8 shadow-lg" /> {/* Larger image */}
            <h3 className="text-4xl font-extrabold mb-3 text-center">{event.title}</h3>
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-2 text-center">{event.date} | {event.venue}</div>
            <p className="mb-6 text-xl text-center text-gray-700 dark:text-gray-200">{event.shortDescription}</p>
            <button
              className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
              onClick={() => navigate(`/event/${event.id}`)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      {/* Navigation */}
      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 text-2xl">←</button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 text-2xl">→</button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {events.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSlider;