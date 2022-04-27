import { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

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
        </>
    )
}

export default Home