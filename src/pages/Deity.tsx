import Layout from "@/components/layout/Layout";
import { Star, BookOpen, Flower, Flame } from "lucide-react";
import deityGanesha from "@/assets/deity-ganesha.jpg";

const Deity = () => {
  const attributes = [
    {
      icon: Star,
      title: "Vighnaharta",
      description: "The remover of all obstacles from life's path",
    },
    {
      icon: BookOpen,
      title: "Buddhi Pradayaka",
      description: "The bestower of wisdom and intelligence",
    },
    {
      icon: Flower,
      title: "Mangal Murti",
      description: "The embodiment of auspiciousness",
    },
    {
      icon: Flame,
      title: "Pratham Pujya",
      description: "The first deity to be worshipped in all ceremonies",
    },
  ];

  const rituals = [
    {
      name: "Abhishekam",
      description: "Sacred bathing of the deity with milk, honey, yogurt, and holy water",
      timing: "Every Tuesday and Saturday at 7:00 AM",
    },
    {
      name: "Archana",
      description: "Offering of 108 names with flowers and sacred leaves",
      timing: "Daily during morning and evening aarti",
    },
    {
      name: "Modak Bhog",
      description: "Offering of Lord Ganesha's favorite sweet - the divine modak",
      timing: "Every Wednesday and during Chaturthi",
    },
    {
      name: "Deep Aarti",
      description: "Grand lamp ceremony with devotional songs and mantras",
      timing: "Morning 6:30 AM and Evening 7:30 PM",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="absolute inset-0 mandala-bg" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <p className="text-primary font-display text-sm tracking-widest mb-4">
                THE DIVINE DEITY
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Lord Sri Ganesha
              </h1>
              <p className="font-body text-xl text-primary italic mb-4">
                विघ्नेश्वराय वरदाय सुरप्रियाय
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                The beloved elephant-headed God, son of Lord Shiva and Goddess Parvati, 
                is the supreme deity of wisdom, success, and new beginnings. His divine 
                presence at our temple blesses all devotees with prosperity and removes 
                all obstacles from their spiritual journey.
              </p>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-4 gradient-divine rounded-2xl opacity-20 blur-xl animate-glow" />
                <img
                  src={deityGanesha}
                  alt="Lord Ganesha - The Divine Deity"
                  className="relative rounded-2xl shadow-elegant w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attributes Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              DIVINE ATTRIBUTES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Forms of Lord Ganesha
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attributes.map((attr, index) => (
              <div
                key={index}
                className="text-center bg-card rounded-xl p-8 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full gradient-divine flex items-center justify-center mb-4 shadow-divine">
                  <attr.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {attr.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {attr.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbolism Section */}
      <section className="py-20 gradient-warm temple-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-display text-sm tracking-widest mb-4">
                SACRED SYMBOLISM
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                The Divine Form
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 animate-fade-up">
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Elephant Head
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Symbolizes wisdom, understanding, and a discriminating intellect 
                    that one must possess to attain perfection in life.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Large Ears
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Represent the importance of listening more and speaking less, 
                    absorbing wisdom from all sources.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Single Tusk
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Signifies the ability to retain the good and throw away the bad, 
                    keeping only what is spiritually nourishing.
                  </p>
                </div>
              </div>
              <div className="space-y-6 animate-fade-up delay-200">
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Four Arms
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Represent the four inner attributes: mind, intellect, ego, 
                    and conditioned consciousness.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Modak (Sweet)
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Represents the sweetness of the realized inner self, 
                    the joy of spiritual awakening.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    Mouse Vehicle
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Symbolizes the ego that can be kept under control through wisdom 
                    and humility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              SACRED RITUALS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Daily Worship Practices
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rituals.map((ritual, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {ritual.name}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {ritual.description}
                </p>
                <p className="font-body text-sm text-primary font-medium">
                  📅 {ritual.timing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mantra Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <p className="font-display text-sm tracking-widest mb-6 text-accent">
              SACRED MANTRAS
            </p>
            <div className="space-y-8">
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold mb-3">
                  ॐ गं गणपतये नमः
                </p>
                <p className="font-body text-primary-foreground/80 italic">
                  "Om Gam Ganapataye Namaha"
                </p>
                <p className="font-body text-sm text-primary-foreground/70 mt-2">
                  The most powerful mantra for invoking Lord Ganesha's blessings
                </p>
              </div>
              <div className="w-24 h-0.5 bg-accent/50 mx-auto" />
              <div>
                <p className="font-display text-xl md:text-2xl font-bold mb-3">
                  वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
                  <br />
                  निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
                </p>
                <p className="font-body text-primary-foreground/80 italic mt-4">
                  "O Lord with a curved trunk and massive form, whose splendor equals a million suns,
                  please remove all obstacles from my endeavors, always."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Deity;
