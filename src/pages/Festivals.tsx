import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import festivalCelebration from "@/assets/festival-celebration.jpg";

const Festivals = () => {
  const upcomingFestivals = [
    {
      name: "Ganesh Chaturthi",
      date: "September 7-17, 2025",
      description: "The grand 10-day celebration of Lord Ganesha's birth. Features special decorations, elaborate pujas, cultural programs, and the magnificent visarjan procession.",
      highlights: ["Daily Maha Aarti", "Cultural Performances", "Prasad Distribution", "Procession"],
      featured: true,
    },
    {
      name: "Diwali Celebrations",
      date: "October 20-24, 2025",
      description: "Festival of lights celebrating the victory of good over evil. Temple illuminated with thousands of diyas and special lakshmi puja.",
      highlights: ["1000 Diya Lighting", "Lakshmi Puja", "Fireworks Display", "Annakut"],
      featured: true,
    },
    {
      name: "Sankashti Chaturthi",
      date: "Monthly",
      description: "Auspicious day dedicated to Lord Ganesha, observed on the fourth day of Krishna Paksha every month with moonrise viewing.",
      highlights: ["Moon Viewing", "Special Abhishekam", "Modak Offering"],
      featured: false,
    },
    {
      name: "Maghi Ganesh Jayanti",
      date: "February 5, 2025",
      description: "Birth anniversary of Lord Ganesha celebrated in Magh month with special rituals and community feast.",
      highlights: ["Special Puja", "Maha Prasad", "Bhajan Sandhya"],
      featured: false,
    },
    {
      name: "Navratri",
      date: "March 30 - April 7, 2025",
      description: "Nine nights of divine worship dedicated to Goddess Durga with garba nights and special pujas.",
      highlights: ["Garba Nights", "Durga Puja", "Kanya Puja"],
      featured: false,
    },
    {
      name: "Maha Shivaratri",
      date: "February 26, 2025",
      description: "The great night of Lord Shiva with overnight worship, abhishekam, and devotional singing.",
      highlights: ["Night Vigil", "Shiva Abhishekam", "Bhajan Session"],
      featured: false,
    },
  ];

  const regularEvents = [
    {
      name: "Satsang & Bhajan",
      schedule: "Every Saturday, 5:00 PM",
      description: "Weekly devotional singing and spiritual discourse",
    },
    {
      name: "Meditation Session",
      schedule: "Every Sunday, 7:00 AM",
      description: "Guided meditation for inner peace and clarity",
    },
    {
      name: "Sanskrit Classes",
      schedule: "Wednesdays & Fridays, 6:00 PM",
      description: "Learn sacred scriptures and mantras",
    },
    {
      name: "Children's Sunday School",
      schedule: "Every Sunday, 10:00 AM",
      description: "Religious education and cultural activities for kids",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={festivalCelebration}
            alt="Festival celebration at temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-secondary/90" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <p className="text-accent font-display text-sm tracking-widest mb-4">
            CELEBRATE WITH US
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Festivals & Events
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join us in celebrating divine festivals and community gatherings throughout the year
          </p>
        </div>
      </section>

      {/* Featured Festivals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              MAJOR CELEBRATIONS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Upcoming Grand Festivals
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {upcomingFestivals.filter(f => f.featured).map((festival, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="gradient-divine p-6">
                  <div className="flex items-center gap-2 text-primary-foreground/90 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-body text-sm">{festival.date}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                    {festival.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {festival.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {festival.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Festivals Calendar */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              ANNUAL CALENDAR
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              All Festivals
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingFestivals.map((festival, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="font-body text-sm font-medium">{festival.date}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {festival.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {festival.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              WEEKLY PROGRAMS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Regular Events
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {regularEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full gradient-divine flex items-center justify-center flex-shrink-0 shadow-divine">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {event.name}
                  </h3>
                  <p className="font-body text-sm text-primary font-medium mb-2">
                    {event.schedule}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Be part of our spiritual family. Volunteer for temple services, participate 
              in cultural programs, or simply come and experience the divine atmosphere.
            </p>
            <Button variant="golden" size="xl" asChild>
              <Link to="/contact">
                Contact Us <MapPin className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Festivals;
