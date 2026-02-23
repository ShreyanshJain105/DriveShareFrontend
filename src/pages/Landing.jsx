import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Pricing from "../components/landing/Pricing";
import Testimonials from "../components/landing/Testimonials";
import CallToAction from "../components/landing/CallToAction";
import Footer from "../components/landing/Footer";

const Landing = () => {
    return (
       <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
        {/* creating hero section  */}
        <HeroSection/>
            
        
        {/* Features of Driveshare */}
        <FeaturesSection/>
        {/* Pricing section */}
        <Pricing/>
        {/* testimonails  */}
        <Testimonials/>
        {/* call to action section  */}
        <CallToAction/>
        {/* Footer */}
        <Footer/>
       
       </div>
    );
};

export default Landing;