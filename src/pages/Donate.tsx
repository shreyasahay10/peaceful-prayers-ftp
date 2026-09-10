import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles, BookOpen, Building, Users } from "lucide-react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [501, 1001, 2501, 5001, 11001, 21001];

  const donationCategories = [
    {
      icon: Sparkles,
      title: "Daily Puja Sponsorship",
      description: "Sponsor the daily worship rituals and offerings to the deity",
      amounts: ["₹501", "₹1,001", "₹2,501"],
    },
    {
      icon: Gift,
      title: "Prasadam Distribution",
      description: "Help provide sacred food to devotees and the needy",
      amounts: ["₹1,001", "₹5,001", "₹11,001"],
    },
    {
      icon: Building,
      title: "Temple Maintenance",
      description: "Contribute to the upkeep and beautification of the sacred space",
      amounts: ["₹5,001", "₹21,001", "₹51,001"],
    },
    {
      icon: BookOpen,
      title: "Education & Scripture",
      description: "Support Sanskrit classes and spiritual education programs",
      amounts: ["₹2,501", "₹5,001", "₹11,001"],
    },
    {
      icon: Users,
      title: "Festival Celebrations",
      description: "Sponsor grand festival celebrations and community events",
      amounts: ["₹11,001", "₹21,001", "₹51,001"],
    },
    {
      icon: Heart,
      title: "Anna Daan (Food Charity)",
      description: "Feed the hungry through our daily food distribution program",
      amounts: ["₹501", "₹1,001", "₹5,001"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 temple-pattern opacity-10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-up">
            <Heart className="w-16 h-16 mx-auto mb-6 text-accent" />
            <p className="text-accent font-display text-sm tracking-widest mb-4">
              SACRED GIVING
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Make a Donation
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Your generous contribution helps maintain this sacred space and supports 
              our spiritual mission. Every offering brings divine blessings to your family.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Donation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-display text-sm tracking-widest mb-4">
                QUICK DONATION
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Choose an Amount
              </h2>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant animate-fade-up">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`py-4 rounded-lg font-display font-semibold transition-all duration-300 ${
                      selectedAmount === amount
                        ? "gradient-divine text-primary-foreground shadow-divine"
                        : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-body text-sm text-muted-foreground mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-foreground">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <Button variant="divine" size="xl" className="w-full">
                Donate ₹{selectedAmount || customAmount || 0}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4 font-body">
                All donations are tax-exempt under Section 80G
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-widest mb-4">
              SEVA OPPORTUNITIES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Ways to Contribute
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {donationCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-divine flex items-center justify-center mb-4 shadow-divine">
                  <category.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.amounts.map((amount, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body"
                    >
                      {amount}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 shadow-elegant animate-fade-up">
              <p className="font-display text-2xl md:text-3xl text-primary font-semibold leading-relaxed mb-6">
                "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे।
                <br />
                देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥"
              </p>
              <p className="font-body text-muted-foreground italic mb-6">
                "Charity given to a worthy person at the right place and time, 
                without expecting anything in return, is considered pure giving."
              </p>
              <p className="font-body text-sm text-muted-foreground">
                — Bhagavad Gita 17.20
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <p className="font-display text-sm tracking-widest mb-4 text-accent">
              OTHER PAYMENT OPTIONS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Bank Transfer Details
            </h2>
            <div className="bg-primary-foreground/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="font-body text-primary-foreground/70 text-sm mb-1">Account Name</p>
                  <p className="font-display font-semibold">Sri Ganesha Temple Trust</p>
                </div>
                <div>
                  <p className="font-body text-primary-foreground/70 text-sm mb-1">Account Number</p>
                  <p className="font-display font-semibold">1234567890123456</p>
                </div>
                <div>
                  <p className="font-body text-primary-foreground/70 text-sm mb-1">IFSC Code</p>
                  <p className="font-display font-semibold">ABCD0001234</p>
                </div>
                <div>
                  <p className="font-body text-primary-foreground/70 text-sm mb-1">Bank Name</p>
                  <p className="font-display font-semibold">State Bank of India</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                <p className="font-body text-sm text-primary-foreground/70">
                  For UPI payments: <span className="font-semibold text-primary-foreground">sriganeshatemple@sbi</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
