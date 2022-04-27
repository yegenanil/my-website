import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Contact from "../Contact/";
import Sidebar from "../../components/Sidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar toggle={Toggle} isOpen={isOpen} />
            <Routes>
                <Route path="/" element={<Navbar toggle={Toggle} />}>
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}

export default Home