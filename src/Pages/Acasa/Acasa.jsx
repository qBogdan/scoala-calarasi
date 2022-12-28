import React from "react";
import "./acasa.css";

function Acasa() {
    return (
        <div className="acasa">
            <h1 className="title">Viziunea școlii</h1>
            <div className="text-picture-card">
                <img src="./Media/Acasa/kids1.png" alt="" />
                <p>
                    Ne propunen sa devenim o scoala apreciata de elevi, parinti si comunitate locala. Pentru desfasurarea unui invatamant de calitate
                    si asigurarea egalitatii sanselor tuturor elevilor.
                </p>
            </div>
            <div className="text-picture-card">
                <img src="./Media/Acasa/kids2.png" alt="" />
                <p>
                    Vom urmari dezvoltarea relatiilor de parteneriat cu comunitatea locala, dezvoltarea motivatiei elevilor pentru invatatura si
                    activitatile extrascolare, dar si atragerea de fonduri pentru dezvoltarea bazei materiale scoli{" "}
                </p>
            </div>
            <span></span>
            <h1 className="title">Misiunea</h1>
            <div className="text-picture-card">
                <img src="./Media/Acasa/kids3.png" alt="" />
                <p>
                    Scoala noastra este locul unde se ofera tuturor tinerilor sanse egale de instruire si educare si unde se dezvolta competentele de
                    relationare si comunicare pentru orice persoana si asigura conditiile prielnice pentru petrecerea placuta a timpului liber{" "}
                </p>
            </div>
            <h1 className="title">Ținte strategice</h1>
            <ul>
                <li>Dezvoltarea profesionala a cadrelor didactice si cresterea calitatii actului educational</li>
                <li>Cresterea ofertei de activitati extracurriculare si a ofertei de petrecere a timpului liber</li>
                <li>Asigurarea unui parteneriat privilegiat cu Consiliul reprezentativ al parintilor</li>
                <li>Dezvoltarea bazei materiale si accesarea de fonduri</li>
            </ul>
            <Table />
        </div>
    );
}

export default Acasa;

const Table = () => {
    return (
        <div className="table">
            <div className="tableHead">
                <div className="cell">Tinta</div>
                <div className="cell">Optiunea curriculara</div>
                <div className="cell">Optiunea financiara si a dotarilor materiale</div>
                <div className="cell">Optiunea investitiei inresursa umana</div>
                <div className="cell">Optiunea relatii comunitare</div>
            </div>
            <div className="tableRow">
                <div className="cell">
                    <p>Dezvoltarea profesionala a cadrelor didactice si cresterea calitatii actului educational</p>
                </div>
                <div className="cell">
                    <p>Eficientizarea procesului de predare-invatare prin utilizarea metodelor active-participative</p>
                    <p>valorificarea oportunitatilor oferite de paleta larga de cursuri de formare</p>
                </div>
                <div className="cell">
                    <p>consultarea cadrelor didactice in vederea completarii materialului didactic</p>
                    <p>asigurarea fondurilor necesarea formarii cadrelor didactice</p>
                    <p>retea de calculatoare conectate la internet la scolile din comuna</p>
                </div>
                <div className="cell">
                    <p>programe de formare la nivel local</p>
                    <p>consilierea cadrelor didactice debutante / fara studii necorespunzatoare</p>
                    <p>elaborarea de materiale si ghiduri metodice in cadrul comisiilor metodice</p>
                </div>
                <div className="cell">
                    <p>Colaborarea cu CCD pentru participarea la cursuri de formare a cadrelor didactice</p>
                    <p>implicarea cadrelor didactice in cadrul proiectelor organizate la nivelul comunitatii locale</p>
                </div>
            </div>
            <div className="tableRow">
                <div className="cell">
                    <p>Cresterea ofertei de activitati extrascolare si a ofertei de petrecere a timpului liber</p>
                </div>
                <div className="cell">
                    <p>
                        Introducerea in CDS a unor discipline optionale care sa puna in evidenta talentul si aptitudinile
                        elevilor(muzica,pictura,creatii literare,sport s.a)
                    </p>
                </div>
                <div className="cell">
                    <p>amenajarea unui teren de sport</p>
                    <p>asigurarea unor instrumente muzicale</p>
                    <p>asigurarea de fonduri din sponsorizari pentru stimularea elevilor participanti la cincursuri</p>
                    <p>tiparirea si difuzarea unor materiale promotionale in vederea mediatizarii activitatilor organizate</p>
                </div>
                <div className="cell">
                    <p>programe de formare pentru cadre didactice,dar si pentru parinti pe probleme de comunicare si cooperare</p>
                    <p>stimularea cadrelor didactice care realizeaza activitati optionale si activitati extrascolare de calitate</p>
                </div>
                <div className="cell">
                    <p>parteneriat cu parintii si implicarea acestora in desfasurarea activitatilor</p>
                    <p>extinderea relatiilor de parteneriat cu institutii de cultura/comunitatea locala</p>
                    <p>popularizarea prin mass-media a factorilor implicati,dar si a activitatilor desfasurate</p>
                </div>
            </div>
            <div className="tableRow">
                <div className="cell">
                    <p>Dezvoltarea bazei materiale si accesarea de fonduri</p>
                </div>
                <div className="cell">
                    <p>
                        includerea in cadrul lectiilor/activitatilor educative a elementelor educative legate depastrarea si intretinerea bazei
                        materiale a scolii
                    </p>
                </div>
                <div className="cell">
                    <p>proiect de buget fundamentat care sa acopere cheltuielile deintretinere si reparatii</p>
                    <p>Executie bugetara echilibrata</p>
                    <p>identificarea fondurilor extrabugetare</p>
                    <p>realizarea Programului de achizitii si bunuri cu respectarea legii</p>
                    <p>aplicarea ROI privind recuperarea pagubelor produse de elevi</p>
                </div>
                <div className="cell">
                    <p>asumarea raspunderii cadrelor didactice in pastrarea patrimoniului scolii</p>
                    <p>implicarea membrilor CA in gestoinarea bunurilor si recuperarea pagubelor produse de elevi</p>
                </div>
                <div className="cell">
                    <p>colaborarea cu comitetele de parinti/CRP in identificarea de noi surse de finantare</p>
                    <p>participarea la programe de parteneriat cu Consiliul local</p>
                </div>
            </div>
        </div>
    );
};
