"use client";

import { Rocket, Database, Palette } from "lucide-react";
import { FadeUp } from "../animations";
import { CardHover } from "../animations/CardHover";
import SolutionsImage from "@/public/images/solutions_bg_image.png";
import Image from "next/image";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

const Services = () => {
  const services: ServiceCard[] = [
    {
      icon: <Rocket className="w-10 h-10 text-primary" />,
      title: "Scale Optimization",
      description:
        "Automated marketing funnels designed to capture and convert high-intent leads while you sleep.",
      borderColor: "border-primary-container",
    },
    {
      icon: <Database className="w-10 h-10 text-secondary" />,
      title: "Data Infrastructure",
      description:
        "Enterprise-grade analytics for local businesses. Know exactly where every dollar goes.",
      borderColor: "border-secondary",
    },
    {
      icon: <Palette className="w-10 h-10 text-on-background" />,
      title: "Brand Authority",
      description:
        "Visual identities that command premium pricing and foster long-term customer loyalty.",
      borderColor: "border-on-background",
    },
  ];

  return (
    <section className="bg-surface-container-low object-contain px-6 py-20 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Capabilities
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-on-background">
            Our Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <CardHover
              key={index}
              className={`bg-white p-8 rounded-xl shadow-sm border-b-4 ${service.borderColor}`}
            >
              <FadeUp key={index} delay={index * 0.2}>
                <div className="mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold text-on-background mb-3">
                  {service.title}
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </FadeUp>
            </CardHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
