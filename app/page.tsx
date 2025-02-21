"use client";
import { useState, useEffect } from "react";
import { services } from "@/data/services";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ContactSection from "@/components/ContactSection";
import ServiceCard from "@/components/ServiceCard";
import PortfolioSection from "@/components/PortfolioSection"; // Import the new component
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  // Carousel setup
  const slides = [
    {
      title: "Legal Attestation & Consultant Services",
      subtitle: "Your trusted partner for all legal document needs",
      cta: "Explore Services",
      bg: "bg-[url('/images/hero1.jpg')]",
    },
    {
      title: "Professional Document Verification",
      subtitle: "Fast and reliable document authentication services",
      cta: "View Services",
      bg: "bg-[url('/images/hero2.jpg')]",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Section tracking
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.5,
  });
  // const { ref: portfolioRef, inView: portfolioInView } = useInView({ threshold: 0.5 });
  // const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });
  const { ref: mapRef, inView: mapInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    const sections = {
      home: homeInView,
      about: aboutInView,
      services: servicesInView,
      // portfolio: portfolioInView,
      // contact: contactInView,
      map: mapInView,
    };
    const visibleSection = Object.keys(sections).find((key) => sections[key]);
    if (visibleSection) setActiveSection(visibleSection);
  }, [homeInView, aboutInView, servicesInView, mapInView]); //portfolioInView, contactInView,

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} />

      {/* Hero Carousel */}
      <section ref={homeRef} className="relative min-h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slide.bg
            } bg-cover bg-center ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <div className="max-w-6xl text-center text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
                  {slide.subtitle}
                </p>
                <a
                  href="#services"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg transition-colors text-lg md:text-xl z-50"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronLeftIcon className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronRightIcon className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            About LACS
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Legal Attestation and Consultant Services (LACS) provides fast and
            reliable document attestation, apostille, and visa appointment
            services. We handle both educational and non-educational documents,
            ensuring a smooth and hassle-free process.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Our services include degree certificate attestation, marriage
            certificate attestation, birth certificate attestation, police
            clearance certificates (PCC), and more. We make document
            verification simple and stress-free.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedService === service.id}
                onClick={() =>
                  setExpandedService(
                    expandedService === service.id ? null : service.id
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Location Section */}
      <section ref={mapRef} id="map" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Our Location
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30455.30194641754!2d78.41518733251553!3d17.415974641016724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9728e7c230a5%3A0xbf59752f5f7caa0!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1739919827760!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p className="text-lg font-medium">Banjara Hills Office</p>
            <p className="mt-2">Road No. 12, Hyderabad</p>
            <p className="mt-1">Telangana 500034, India</p>
            <p className="mt-4 text-blue-600 font-medium">
              Open Hours: Mon-Sat 9:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
}
