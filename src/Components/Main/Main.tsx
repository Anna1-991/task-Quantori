// src/Main.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "../Header/Header";
import "./main.css";
import { HomePage } from "../Pages/HomePage";
import { AboutPage } from "../Pages/AboutPage";
import { ContactPage } from "../Pages/ContactPage";
import { Footer } from '../Footer/Footer';

export const Main = () => {
    return (
        <Router>
            <main>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Footer/>
            </main>
        </Router>
    );
};
