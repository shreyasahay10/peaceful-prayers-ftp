import Layout from "@/components/layout/Layout";
import { Clock, Sun, Moon, Star, Bell } from "lucide-react";

const PujaTimings = () => {
  const dailySchedule = [
    { time: "5:00 AM", event: "Temple Opening", icon: Sun },
    { time: "5:30 AM", event: "Suprabhatam & Prabhata Seva", icon: Bell },
    { time: "6:30 AM", event: "Abhishekam & Alankaram", icon: Star },
    { time: "7:30 AM", event: "Morning Aarti", icon: Bell },
    { time: "8:00 AM", event: "Archana & Bhog", icon: Star },
    { time: "12:00 PM", event: "Madhyahna Puja", icon: Sun },
    { time: "12:30 PM", event: "Temple Closes for Afternoon", icon: Clock },
    { time: "4:00 PM", event: "Temple Reopens", icon: Sun },
    { time: "5:00 PM", event: "Evening Alankaram", icon: Star },
    { time: "7:00 PM", event: "Sandhya Aarti", icon: Bell },
    { time: "8:30 PM", event: "Shayana Aarti", icon: Moon },
    { time: "9:00 PM", event: "Temple Closes", icon: Moon },
  ];

  const specialPujas = [
    {
      name: "Ganapati Homam",
      description: "Sacred fire ritual for removing obstacles and new beginnings",
      timing: "Every Sunday at 8:00 AM",
      duration: "2 hours",
    },
    {
      name: "Sahasranama Archana",
      description: "Chanting of 1008 names of Lord Ganesha",
      timing: "Every Wednesday at 6:00 PM",
      duration: "1.5 hours",
    },
    {
      name: "Panchamrit Abhishekam",
      description: "Five-nectar bathing ceremony of the deity",
      timing: "Tuesdays & Saturdays at 7:00 AM",
      duration: "45 minutes",
    },
    {
      name: "Sankashti Chaturthi Puja",
      description: "Special monthly puja on the fourth day after full moon",
      timing: "Monthly as per lunar calendar",
      duration: "3 hours",
    },
    {
      name: "Modak Offering Ceremony",
      description: "Special offering of 21 modaks to Lord Ganesha",
      timing: "Every Friday at 5:30 PM",
      duration: "30 minutes",
    },
  ];

  const aartiTimings = [
    { name: "Mangala Aarti", time: "5:30 AM", description: "Morning awakening ceremony" },
    { name: "Shringar Aarti", time: "7:30 AM", description: "Post-decoration worship" },
    { name: "Raj Bhog Aarti", time: "12:00 PM", description: "Midday offering ceremony" },
    { name: "Sandhya Aarti", time: "7:00 PM", description: "Evening lamp ceremony" },
    { name: "Shayana Aarti", time: "8:30 PM", description: "Night rest ceremony" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 temple-pattern opacity-10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-up">
            <p className="text-accent font-display text-sm tracking-widest mb-4">
              SACRED SCHEDULE
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Puja & Aarti Timings
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Plan your divine visit with our comprehensive schedule of daily rituals, 
              special pujas, and sacred ceremonies
            </p>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              EVERYDAY BLESSINGS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Daily Temple Schedule
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

              {dailySchedule.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center gap-6 mb-4 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-card border-4 border-primary/20 flex items-center justify-center z-10 shadow-soft">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-4 shadow-soft hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="font-display text-lg font-semibold text-foreground">
                        {item.event}
                      </span>
                      <span className="font-body text-primary font-medium">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aarti Timings */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              LAMP CEREMONIES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Aarti Schedule
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {aartiTimings.map((aarti, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-full gradient-divine flex items-center justify-center mb-4 shadow-divine">
                  <Bell className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {aarti.name}
                </h3>
                <p className="font-display text-xl font-bold text-primary mb-2">
                  {aarti.time}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {aarti.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Pujas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              SACRED RITUALS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Special Pujas & Ceremonies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specialPujas.map((puja, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {puja.name}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {puja.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-body text-primary font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {puja.timing}
                  </p>
                  <p className="font-body text-muted-foreground">
                    Duration: {puja.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Note:</span> Timings may vary during 
              festivals and special occasions. Please contact the temple office for the most 
              current schedule. Devotees are advised to arrive 15 minutes before the scheduled 
              time for pujas and aartis.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PujaTimings;
