import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import templeHero from "@/assets/temple-hero.jpg";
import deityGanesha from "@/assets/deity-ganesha.jpg";
import aartiCeremony from "@/assets/aarti-ceremony.jpg";
import festivalCelebration from "@/assets/festival-celebration.jpg";

const spiritualQuotes = [
  {
    text: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    translation: "O Lord with curved trunk, massive form, and the brilliance of a million suns, please make all my endeavors free of obstacles.",
  },
  {
    text: "ॐ गं गणपतये नमः",
    translation: "I bow to Lord Ganesha, the remover of obstacles.",
  },
];

const highlights = [
  {
    icon: Clock,
    title: "Daily Darshan",
    description: "Experience divine blessings with our morning and evening darshan timings",
    link: "/puja-timings",
  },
  {
    icon: Calendar,
    title: "Upcoming Festivals",
    description: "Join us for grand celebrations of Ganesh Chaturthi and other sacred festivals",
    link: "/festivals",
  },
  {
    icon: Heart,
    title: "Seva & Donation",
    description: "Support the temple's mission and receive blessings through your generous contributions",
    link: "/donate",
  },
  {
    icon: Sparkles,
    title: "Special Pujas",
    description: "Book personalized pujas for prosperity, health, and spiritual well-being",
    link: "/puja-timings",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={templeHero}
            alt="Sri Ganesha Temple at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-background" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 temple-pattern opacity-20" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="animate-fade-up">
            <p className="text-accent font-display text-lg md:text-xl mb-4 tracking-widest">
              ॐ श्री गणेशाय नमः
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Welcome to
              <br />
              <span className="text-gradient-divine">Sri Ganesha Temple</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              A sacred sanctuary of peace, devotion, and divine blessings.
              Experience the eternal grace of Lord Ganesha in our spiritual abode.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="divine" size="xl" asChild>
                <Link to="/about">
                  Explore Temple <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/puja-timings">View Timings</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Spiritual Quote Section */}
      <section className="py-20 bg-card temple-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {spiritualQuotes.map((quote, index) => (
              <div key={index} className="space-y-4 animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                <p className="font-display text-2xl md:text-3xl text-primary font-semibold leading-relaxed">
                  "{quote.text}"
                </p>
                <p className="font-body text-muted-foreground italic">
                  {quote.translation}
                </p>
                {index < spiritualQuotes.length - 1 && (
                  <div className="flex items-center justify-center gap-4 py-4">
                    <div className="w-16 h-px bg-primary/30" />
                    <span className="text-accent text-2xl">॥</span>
                    <div className="w-16 h-px bg-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deity Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up order-2 lg:order-1">
              <p className="text-primary font-display text-sm tracking-widest mb-4">
                THE DIVINE PRESENCE
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Lord Ganesha
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Sri Ganesha, the elephant-headed deity, is revered as the remover of obstacles
                and the god of beginnings. His divine presence at our temple has blessed
                countless devotees with wisdom, prosperity, and spiritual awakening.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                The sacred idol, carved from divine stone and adorned with gold, radiates
                an aura of peace and protection. Devotees from across the world come to
                seek His blessings and find solace in His eternal grace.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/deity">
                  Learn More About the Deity <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-4 gradient-divine rounded-2xl opacity-20 blur-xl" />
                <img
                  src={deityGanesha}
                  alt="Lord Ganesha deity"
                  className="relative rounded-2xl shadow-elegant w-full hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              TEMPLE SERVICES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Experience Divine Blessings
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-card rounded-xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              SACRED MOMENTS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Temple Gallery
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Glimpses of divine ceremonies, sacred rituals, and festive celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-2xl hover-lift animate-fade-up">
              <img
                src={aartiCeremony}
                alt="Aarti ceremony at temple"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-secondary-foreground">
                    Sacred Aarti Ceremony
                  </h3>
                  <p className="font-body text-sm text-secondary-foreground/80">
                    Daily evening prayers with devotees
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl hover-lift animate-fade-up delay-100">
              <img
                src={festivalCelebration}
                alt="Festival celebration"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-secondary-foreground">
                    Festival Celebrations
                  </h3>
                  <p className="font-body text-sm text-secondary-foreground/80">
                    Grand Diwali celebrations with diyas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <p className="font-display text-sm tracking-widest mb-4 text-accent">
              SUPPORT THE TEMPLE
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Seva, Our Service
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Help us preserve this sacred space and continue our spiritual mission.
              Every contribution, big or small, brings blessings to you and your family.
            </p>
            <Button variant="golden" size="xl" asChild>
              <Link to="/donate">
                Make a Donation <Heart className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
