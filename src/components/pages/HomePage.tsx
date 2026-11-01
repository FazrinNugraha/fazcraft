import React from "react";
import HeroSection from "../home/HeroSection";
import AboutSection from "../home/AboutSection";
import RecentActivities from "../home/RecentActivities";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <RecentActivities />
        </div>
    );
}
