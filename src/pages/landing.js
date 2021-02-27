import React from "react";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import About from "../components/whoWeAre/About";
import VideoPreview from "../components/VideoPreview/VideoPreview";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Landing() {
    return (
        <>
        <WelcomeSection />
        <About />
        <VideoPreview />
        <Testimonials />
        </>
    );
}