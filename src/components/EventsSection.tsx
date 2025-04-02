
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventsSection = () => {
  const events = [
    {
      title: "Tech Hackathon 2023",
      date: "November 15-17, 2023",
      location: "Main Campus, Building A",
      category: "Hackathon",
      description: "A 48-hour coding marathon where teams compete to build innovative solutions to real-world problems.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Startup Pitch Competition",
      date: "December 5, 2023",
      location: "Business School Auditorium",
      category: "Competition",
      description: "Present your startup idea to a panel of judges and investors for a chance to win funding and mentorship.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Web3 Workshop Series",
      date: "January 10-24, 2024",
      location: "Online & Room 302",
      category: "Workshop",
      description: "Learn about blockchain, smart contracts, and building decentralized applications in this 3-part workshop series.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
    },
  ];

  return (
    <section id="events" className="py-20 bg-club-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Join our events to learn new skills, connect with like-minded individuals, and stay updated on the latest tech and business trends.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              View All Events <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="club-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-club-purple/10 text-club-purple border-club-purple/20">
                    {event.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    {event.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.location}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-club-purple p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-club-blue p-8 rounded-lg text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 pattern-overlay opacity-5"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to showcase your ideas?</h3>
              <p className="text-white/80 max-w-lg">
                Join our monthly demo day where you can present your projects, get feedback from peers and mentors, and connect with potential collaborators.
              </p>
            </div>
            <Button size="lg" className="bg-white text-club-blue hover:bg-white/90 self-start">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
