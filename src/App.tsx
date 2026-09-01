import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
import { PartnersSection } from './components/PartnersSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { MenuDrawer } from './components/MenuDrawer';
import { ChatModal } from './components/ChatModal';
import { ContactModal } from './components/ContactModal';
import { ScrollBackgroundVideo } from './components/ScrollBackgroundVideo';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#f2f2f5] font-['Poppins'] selection:bg-[#ff4122] selection:text-white overflow-x-hidden">
      
      {/* Whole Webpage Background Scroll-Controlled Video */}
      <ScrollBackgroundVideo />

      {/* Top Fixed Header */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Page Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenChat={() => setIsChatOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 2. Middle Stats & Agency Mission Card */}
        <StatsCard />

        {/* 3. Agency Capabilities & Services */}
        <ServicesSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 4. Selected Work & Portfolio Showcase */}
        <WorkSection />

        {/* 5. Our 4-Step Process & Methodology */}
        <ProcessSection />

        {/* 6. Partner Bubbles Cluster */}
        <PartnersSection />

        {/* 7. Client Testimonials & Industry Awards */}
        <TestimonialsSection />

        {/* 8. Flexible Engagement & Pricing Models */}
        <PricingSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 9. Interactive FAQ */}
        <FAQSection />

        {/* 10. Giant CTA Banner & Global Footer */}
        <FooterSection
          onOpenContact={() => setIsContactOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </main>

      {/* Interactive Modals and Drawers */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}

