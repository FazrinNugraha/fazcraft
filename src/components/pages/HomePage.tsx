import React from "react";
import HeroSection from "../home/HeroSection";
import AboutSection from "../home/AboutSection";
import RecentActivities from "../home/RecentActivities";
import { useTheme } from "../../context/ThemeContext";

interface HomePageProps {
  blogPosts?: any[];
}

export default function HomePage({ blogPosts }: HomePageProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <RecentActivities />
        </div>
    );
}
