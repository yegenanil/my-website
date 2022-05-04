import { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { homeObjOne } from '../../components/InfoSection/Data';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar toggle={Toggle} isOpen={isOpen} />
            <Navbar toggle={Toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Projects />
            <Footer />
        </>
    )
}

export default Home