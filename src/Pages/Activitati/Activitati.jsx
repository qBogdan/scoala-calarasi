import React from "react";
import ActivityCard from "./components/ActivityCard";
import "./activitati.css";
function Activitati({ setActivity }) {
    return (
        <>
            <h1 className="title">Activitați</h1>
            <div className="activitiesGallery">
                {activitati.map(project => (
                    <ActivityCard key={project.title} setActivity={setActivity} project={project} />
                ))}
            </div>
        </>
    );
}

export default Activitati;

const activitati = [
    {
        title: "Ziua Luceafărului poeziei românești - Mihai Eminescu",
        imgCount: 3,
        imgFolder: "ziuaLuceafarului2023",
        text: "Pe data de 13.01.2023 am sărbătorit  ziua Luceafărului poeziei românești- Mihai Eminescu. Cu dăruire și talent, cu emoțiile inevitabile, copiii au realizat lucrări inspirate din opera eminesciană; așa am putut crea o atmosferă potrivită pentru desfășurarea momentelor artistice pe care ni le-au dăruit.",
    },

    {
        title: "Ziua României",
        imgCount: 7,
        imgFolder: "ziuaRomaniei",
        text: "Ziua României a fost sărbătorită și la școala din Călărași! Copiii s-au ridicat la înălțimea așteptării coordonatorilor, făcând din această activitate una de neuitat!",
    },
    {
        title: "Toamna în clasa noastră",
        imgCount: 8,
        imgFolder: "toamnaInClasa",
        text: "Minunile toamnei, frumusețea ei, aromele și culorile sale mirifice și-au găsit  loc perfect în școala noastră, în fiecare clasă minuțios și măiastru gătită. Dincolo de frumusețe, toamna le-a oferit copiilor noștri ocazia perfectă pentru a redescoperi munca în echipă, solidaritatea, această activitate fiind atât de prielnică originalității, creativității, imaginației... Felicitări tuturor! Vă mulțumim că ați adus toamna...în casa noastră",
    },
    {
        title: "Ziua Educației",
        imgCount: 4,
        imgFolder: "ziuaEducatiei",
        text: "Ziua Educației sărbătorită la Școala Gimnazială Nr. 1 Călărași!",
    },
    {
        title: "Ziua Culturii",
        imgCount: 4,
        imgFolder: "ziuaCulturii",
        text: "",
    },
    {
        title: "Cercul de Istorie",
        imgCount: 9,
        imgFolder: "cercIstorie",
        text: "Cercul de istorie a fost creat în 2017 și a fost dedicat persoanelor foarte pasionate de istorie. În cadrul cercului s-a discutat despre monarhia din Romania, despre Evul Mediu și despre interpretarea izvoarelor istorice. După întreruperea cauzată de pandemie, anul acesta cercul s-a reunit și analizează perioada comunistă din Romania",
    },
    {
        title: "Săptămâna Educației Globale 2022",
        imgCount: 4,
        imgFolder: "saptamanaEducatieiGlobale",
        text: " Scop :  Adaptarea la efectele schimbarilor climatice a devenit una din cele mai importante preocupari de pe agenda dezvoltarii globale. Educatia de calitate este absolut necesara” educatia privind reducerea emisiilor de gaze cu efect de sera si adaptarea la schimbarile climatice in randul tinerilor, care reprezinta una din categoriile cele mai vulnerabile la efectele acestui fenomen. Prin urmare, activitatea propusă urmărește punerea elevilor în situații de viață concrete   și diferite, pentru a înțelege cât mai bine tot ceea ce presupune ideea de schimbare în scopul  identificării cauzelor și efectelor schimbărilor climatice.",
    },
];
