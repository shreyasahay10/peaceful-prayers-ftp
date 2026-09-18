import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";
import deityGanesha from "@/assets/deity-ganesha.jpg";
import aartiCeremony from "@/assets/aarti-ceremony.jpg";
import festivalCelebration from "@/assets/festival-celebration.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: templeHero,
      title: "Temple at Sunset",
      category: "Architecture",
    },
    {
      src: deityGanesha,
      title: "Lord Ganesha",
      category: "Deity",
    },
    {
      src: aartiCeremony,
      title: "Evening Aarti",
      category: "Ceremonies",
    },
    {
      src: festivalCelebration,
      title: "Diwali Celebrations",
      category: "Festivals",
    },
    {
      src: aartiCeremony,
      title: "Devotees in Prayer",
      category: "Devotion",
    },
    {
      src: templeHero,
      title: "Sacred Architecture",
      category: "Architecture",
    },
    {
      src: festivalCelebration,
      title: "Festival Lights",
      category: "Festivals",
    },
    {
      src: deityGanesha,
      title: "Divine Blessings",
      category: "Deity",
    },
  ];

  const categories = ["All", "Architecture", "Deity", "Ceremonies", "Festivals", "Devotion"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 temple-pattern opacity-10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-up">
            <p className="text-accent font-display text-sm tracking-widest mb-4">
              SACRED MOMENTS
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Temple Gallery
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore the divine beauty of our temple through these sacred photographs
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-display text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "gradient-divine text-primary-foreground shadow-divine"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-soft cursor-pointer hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-secondary-foreground">
                      {image.title}
                    </h3>
                    <p className="font-body text-sm text-secondary-foreground/80">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              TEMPLE EXPERIENCE
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Virtual Darshan
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Experience the divine atmosphere of our temple through these sacred recordings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-soft text-center">
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <p className="text-muted-foreground font-body">Morning Aarti Video</p>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Morning Aarti Ceremony
              </h3>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-soft text-center">
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <p className="text-muted-foreground font-body">Temple Tour Video</p>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Virtual Temple Tour
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-secondary/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-secondary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elegant animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
