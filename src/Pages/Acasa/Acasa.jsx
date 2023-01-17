import React from "react";
import "./acasa.css";

function Acasa() {
    return (
        <div className="acasa">
            <h1 className="title">Viziunea școlii</h1>
            <div className="text-picture-card">
                <p className="viziunea">
                    „Să ofere educație la standarde de calitate, prin centrarea învățării pe elev, pentru desăvărșirea intelectuală, morală și
                    profesională a elevilor, în vederea adaptării la schimbarea continuă a societății, condiție esențială a progresului economic și
                    cultural.”
                </p>
            </div>

            <h1 className="title">Misiunea</h1>
            <div className="text-picture-card">
                <img src="./Media/Acasa/kids3.png" alt="" />
                <div>
                    <p>Școala noastră, pentru a-și îndeplini viziunea trebuie să:</p>
                    <br />
                    <ol>
                        <li>Creeze în şcoală un mediu educaţional profesionist, la standarde instrucţionale şi morale înalte.</li>
                        <li>
                            Focalizeze eforturile pentru ca elevii să dobândească o pregătire generală bună, cunoştinţe aprofundate, competenţe
                            necesare inserţiei sociale şi deprinderi de muncă intelectuală pentru a putea învăţa pe tot parcursul vieţii.
                        </li>
                        <li>
                            Deschidă școala spre comunicare astfel încât să devină ea însăși o comunitate bazată pe respectul reciproc și
                            autodisciplină, cu o personalitate bine definită.
                        </li>
                    </ol>
                </div>
            </div>
            <h1 className="title">Ținte strategice</h1>
            <div className="text-picture-card">
                <p>
                    Pornind de la misiunea și viziunea școlii, de la rezultatele diagnozei și autoevaluării, am formulat următoarele ținte și opțiuni
                    strategice, în vederea dezvoltării şi modernizării instituţionale a Şcolii Gimnaziale nr.1 Călărași în perioada 2021-2025:
                </p>
            </div>
            <TinteStategice />
            <a className="downloadBtn" href="./Data/PDI-2021-2025.pdf" download="PDI-2021-2025.pdf">
                Descarcă Proiect de Dezvoltare Instituțională
            </a>
        </div>
    );
}

export default Acasa;

const TinteStategice = () => {
    return (
        <div className="tinteStrategice">
            <h1>
                Asigurarea creșterii calităţii în educaţie pentru toate domeniile și toți indicatorii din standardele de evaluare periodică a
                unităților de învățământ preuniversitar
            </h1>
            <div className="optiuniStrategice">
                <div className="optiune">
                    <h2>Opţiunea curriculară:</h2>
                    <div>
                        <ul>
                            <li>Asigurarea cadrului instituţional pentru calitate în educaţie.</li>
                            <li>Optimizarea sistemului de evaluare, prin utilizarea criteriilor de calitate şi a descriptorilor de performanţă.</li>
                            <li>Stimularea şi democratizarea vieţii şcolare, prin programe extracurriculare.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse materiale şi informaţionale:</h2>
                    <div>
                        <ul>
                            <li>
                                Popularizarea documentelor de politică educaţională şi a finalităţilor lor pe nivele de şcolarizare, în vederea
                                aplicării eficiente a acestora.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse umane:</h2>
                    <div>
                        <ul>
                            <li>
                                Asigurarea asistenţei manageriale şi de specialitate pentru cadrele didactice din şcoală în vederea implementării SCIM
                                şi a tuturor procedurilor operaționale
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea relaţii cu comunitatea:</h2>
                    <div>
                        <ul>
                            <li>
                                Colaborarea dintre Inspectoratul Școlar ….., Consiliul Naţional pentru Curriculum, A.R.A.C.I.P., Centrul Național de
                                Politici și Evaluare în Educație
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>Prevenirea eşecului şcolar şi creşterea performanţei elevilor prin reforma şi personalizarea procesului instructiv – educativ</h1>
            <div className="optiuniStrategice">
                <div className="optiune">
                    <h2>Opţiunea curriculară:</h2>
                    <div>
                        <ul>
                            <li>
                                Dezvoltarea şi proiectarea ofertei curriculare în raport cu particularităţile individuale ale elevilor, cu cerințele
                                pieții forței de muncă şi dezideratele comunităţii
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse materiale şi informaţionale:</h2>
                    <div>
                        <ul>
                            <li>Asigurarea fondurilor necesare pentru achiziţionarea de noi materiale didactice şi mijloacele de învăţământ</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse umane:</h2>
                    <div>
                        <ul>
                            <li>Stimularea cadrelor didactice pentru parcurgerea unor programe de abilitare în utilizarea lucrului diferenţiat</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea relaţii cu comunitatea:</h2>
                    <div>
                        <ul>
                            <li>
                                Promovarea în comunitate a preocupărilor şcolii pentru personalizarea actului instructiv-educativ în vederea
                                prevenirii eşeului şcolar.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>Asigurarea finalitaţilor educaţionale</h1>
            <div className="optiuniStrategice">
                <div className="optiune">
                    <h2>Opţiunea curriculară:</h2>
                    <div>
                        <ul>
                            <li>
                                Abordarea unei politici educaţionale pentru cultivarea expresivităţii şi a sensibilităţii, în scopul împlinirii
                                personale şi a promovării unei vieţi de calitate
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse materiale şi informaţionale:</h2>
                    <div>
                        <ul>
                            <li>
                                Popularizarea documentelor de politică educaţională şi a finalităţilor lor în vederea aplicării eficiente a acestora.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse umane:</h2>
                    <div>
                        <ul>
                            <li>
                                Asigurarea asistenţei manageriale şi de specialitate pentru cadrele didactice din şcoală în vederea asigurării
                                finalităţilor educaţionale
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea relaţii cu comunitatea:</h2>
                    <div>
                        <ul>
                            <li>Proiecte educaţionale</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>Dezvoltarea personală şi profesională a cadrelor didactice</h1>
            <div className="optiuniStrategice">
                <div className="optiune">
                    <h2>Opţiunea curriculară:</h2>
                    <div>
                        <ul>
                            <li>Promovarea unei politici de personal care să asigure creşterea calităţii şi eficienţa activităţii.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse materiale şi informaţionale:</h2>
                    <div>
                        <ul>
                            <li>
                                Promovarea ofertanţilor care livrează programe adaptate, focalizate pe introducerea schimbărilor în educaţie, mai ales
                                în domeniul dezvoltării personale
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse umane:</h2>
                    <div>
                        <ul>
                            <li>
                                Identificarea nevoilor reale de pregătire ale cadrelor didactice, stimularea participării acestora în programe de
                                formare continuă, în vederea creşterea calităţii resurselor umane angajate în școală, în vederea îndeplinirii
                                scopurilor educaţionale şi asigurarea calităţii în învăţământ, în vederea îmbunătățirii relațiilor dintre colegi și
                                dintre profesori și elevi, în vederea creșterii gradului de satisfacție în raport cu activitățile desfășurate la
                                școală
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea relaţii cu comunitatea:</h2>
                    <div>
                        <ul>
                            <li>
                                Mediatizarea în comunitate a rezultatelor deosebite obţinute de către cadrele didactice în desfăşurarea activităţilor
                                instructiv-educative școlare si extrașcolare
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>Păstrarea şi modernizarea bazei tehnico-materiale şi generalizarea accesului la informaţia Electronica</h1>
            <div className="optiuniStrategice">
                <div className="optiune">
                    <h2>Opţiunea curriculară:</h2>
                    <div>
                        <ul>
                            <li>Tematica orelor educative va cuprinde aspecte ce ţin de păstrarea bazei material a şcolii.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse materiale şi informaţionale:</h2>
                    <div>
                        <ul>
                            <li>Proiecte de buget fundamentate care să acopere cheltuielile de întreţinere şi reparaţii;</li>
                            <li>Procurarea de fonduri extrabugetare;</li>
                            <li>Aplicarea prevederilor regulamentului de ordine interioară pentru recuperarea pagubelor produse de elevi</li>
                            <li>Demersuri pentru funcţionarea tuturor calculatoarelor</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse umane:</h2>
                    <div>
                        <ul>
                            <li>Asumarea răspunderii personalului didactic privind păstrarea patrimoniului şcolii;</li>
                            <li>Implicarea membrilor CA în gestionarea bunurilor şi recuperarea pagubelor.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea relaţii cu comunitatea:</h2>
                    <div>
                        <ul>
                            <li>Colaborarea cu comitetele de părinţi ale claselor;</li>
                            <li>Implicarea Consiliului Reprezentativ al Părinţilor în identificarea de noi surse de finanţare.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>
                Asigurarea condițiilor necesare prevenirii și combaterii contaminării cu virusul SARS-CoV2 și desfășurării în condiții optime a
                activității în școală
            </h1>
            <div className="optiuniStrategice">
                <div className="optiune">
                    <h2>Opţiunea curriculară:</h2>
                    <div>
                        <ul>
                            <li>Organizarea procesului instructiv-educativ față în față și/ sau online.</li>
                            <li>
                                Functionarea in conditii de siguranta a unitatii de invatamant in contextul prevenirii, depistarii din timp si a
                                controlului Covid-19.
                            </li>
                            <li>Organizarea activităților și supravegherea elevilor în timpul pauzelor.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse materiale şi informaţionale:</h2>
                    <div>
                        <ul>
                            <li>Stabilirea accesului in unitatea de invatamant.</li>
                            <li>Asigurarea permanenta a unui stoc de rezerva de materiale de protectie pentru elevi si personal.</li>
                            <li>Întocmirea unui plan de curatenie si dezinfectie.</li>
                            <li>Dotarea grupurilor sanitare.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse umane:</h2>
                    <div>
                        <ul>
                            <li>Instruirea personalului pentru aplicarea planului de masuri.</li>
                            <li>Instruirea elevilor si a parintilor.</li>
                            <li>
                                Desemnarea unui responsabil care va coordona activitatile de prevenire a infectiei cu SARS-CoV-2 la nivelul unitatii.
                            </li>
                            <li>Îndrumarea elevilor și familiilor pentru utilizarea în siguranță a instrumentelor online.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea relaţii cu comunitatea:</h2>
                    <div>
                        <ul>
                            <li>Comunicarea permanenta de informatii catre elevi si parinti privind masurile de prevenire.</li>
                            <li>
                                Comunicarea permanentă cu Inspectoratul Școlar, primărie, părinți, în vederea modificării scenariilor de funcționare,
                                în context pandemic.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>
                Intensificarea colaborării cu comunitatea locală, cu organizaţiile nonguvernamentale, cu asociaţiile culturale şi sportive şi agenţii
                economici, prin desfășurarea de activități și proiecte în parteneriat
            </h1>
            <div className="optiuniStrategice">
                <div className="optiune">
                    <h2>Opţiunea curriculară:</h2>
                    <div>
                        <ul>
                            <li>
                                Încheierea de parteneriate cu operatorii economici interesați în a susține educația elevilor, modernizarea
                                infrastructurii și a dotării cu echipamente didactice a școlii.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse materiale şi informaţionale:</h2>
                    <div>
                        <ul>
                            <li>
                                Încheierea de parteneriate cu toți factorii care pot contribui la calitatea serviciilor educaționale oferite de
                                școală.
                            </li>
                            <li>Realizarea a cel puțin unei acțiuni cu impact comunitar, în fiecare lună.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea - resurse umane:</h2>
                    <div>
                        <ul>
                            <li>Întâlniri periodice cu Consiliul Elevilor si CRP.</li>
                            <li>Actualizarea permanentă a informațiilor la avizierele elevilor și cadrelor didactice.</li>
                            <li>Comunicarea permanentă pe mail cu profesorii, părinții, Consiliul Elevilor.</li>
                        </ul>
                    </div>
                </div>
                <div className="optiune">
                    <h2>Opţiunea relaţii cu comunitatea:</h2>
                    <div>
                        <ul>
                            <li>Colaborarea cu primăria.</li>
                            <li>Colaborarea permanentă cu Inspectoratul Școlar.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
