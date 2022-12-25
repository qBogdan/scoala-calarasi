import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Template/Header";
import Footer from "./Pages/Template/Footer";
import "./Pages/Template/Style/template.css";
import Acasa from "./Pages/Acasa/Acasa";
import Contact from "./Pages/Contact/Contact";
import Istoric from "./Pages/Despre/Istoric";
import ResurseUmane from "./Pages/Despre/ResurseUmane";
import DocumenteUtile from "./Pages/Documente/DocumenteUtile";
import Orar from "./Pages/Documente/Orar";
import Activitati from "./Pages/Activitati/Activitati";
import Proiecte from "./Pages/Activitati/Proiecte";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="body">
                <Routes>
                    <Route path="/" element={<Acasa />} />
                    <Route path="/activitati" element={<Activitati />} />
                    <Route path="/proiecte" element={<Proiecte />} />
                    <Route path="/istorie" element={<Istoric />} />
                    <Route path="/resurse-umane" element={<ResurseUmane />} />
                    <Route path="/documente-utile" element={<DocumenteUtile />} />
                    <Route path="/orar" element={<Orar />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
