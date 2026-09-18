import Layout from "@/components/layout/Layout";
import { History, Award, Users, Heart } from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";

const About = () => {
  const milestones = [
    { year: "1952", event: "Temple foundation stone laid by spiritual leaders" },
    { year: "1955", event: "Main sanctum (Garbhagriha) completed with sacred idol installation" },
    { year: "1980", event: "Major renovation and addition of the grand mandapa" },
    { year: "2000", event: "Silver jubilee celebrations with Kumbhabhishekam" },
    { year: "2024", event: "Digital transformation and global outreach initiative" },
  ];

  const values = [
    {
      icon: History,
      title: "Rich Heritage",
      description: "Over 70 years of spiritual service to the community, preserving ancient traditions and sacred practices.",
    },
    {
      icon: Award,
      title: "Authentic Rituals",
      description: "All ceremonies performed according to Vedic scriptures by trained priests with unwavering devotion.",
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Serving thousands of devotees annually with prasadam distribution, education, and spiritual guidance.",
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Regular satsangs, meditation sessions, and spiritual discourses for inner peace and enlightenment.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={templeHero}
            alt="Temple architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-secondary/90" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <p className="text-accent font-display text-sm tracking-widest mb-4">
            OUR SACRED JOURNEY
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            About the Temple
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discover the divine history and spiritual significance of Sri Ganesha Temple
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg text-foreground leading-relaxed mb-6 animate-fade-up">
                Sri Ganesha Temple stands as a beacon of spirituality and devotion, nestled in the heart of our 
                sacred city. For over seven decades, this divine abode has been a sanctuary for seekers of peace, 
                prosperity, and spiritual enlightenment.
              </p>
              
              <p className="font-body text-muted-foreground leading-relaxed mb-6 animate-fade-up delay-100">
                Founded in 1952 by visionary spiritual leaders, the temple was built with the noble intention 
                of creating a space where devotees could connect with the divine presence of Lord Ganesha. 
                The sacred idol was brought from a holy pilgrimage site and installed with elaborate Vedic rituals 
                that lasted for 21 days.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed mb-8 animate-fade-up delay-200">
                The temple architecture reflects the grandeur of South Indian Dravidian style, with intricately 
                carved pillars depicting scenes from the Puranas, a magnificent gopuram (temple tower) adorned 
                with colorful sculptures, and a serene meditation hall that echoes with ancient mantras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              OUR PRINCIPLES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Pillars of Our Service
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-divine flex items-center justify-center mb-4 shadow-divine">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              OUR HISTORY
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Temple Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 mb-8 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full gradient-divine flex items-center justify-center shadow-divine">
                    <span className="font-display text-sm font-bold text-primary-foreground">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="font-body text-lg text-foreground leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <p className="font-display text-sm tracking-widest mb-4 text-accent">
              OUR VISION
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Spreading Divine Light
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 leading-relaxed">
              Our vision is to be a global center of Hindu spirituality, preserving ancient wisdom 
              while embracing modern ways to connect with devotees worldwide. We strive to create 
              a harmonious space where every soul finds peace, purpose, and divine connection.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
