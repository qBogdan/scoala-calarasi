import React from "react";

function ResurseUmane() {
    return (
        <div className="profesori">
            <h1 className="title">Resurse Umane</h1>
            {listaProfesori.map((profesor, index) => {
                return <Profesor key={index} profesor={profesor} />;
            })}
        </div>
    );
}

export default ResurseUmane;

const Profesor = ({ profesor: { nume, functie, email, img, telefon } }) => {
    return (
        <div className="profesorCard">
            <img className="profilePicture" src={img ? `./Media/Profesori/${img}.png` : "./Media/Profesori/placeholder.svg"} alt="" />
            <div className="profesorInfo">
                <h1>{nume}</h1>
                <h2>{functie}</h2>
                <div className="contact">
                    {telefon ? (
                        <div className="phone">
                            <img src="./Media/phoneIcon.svg" alt="" />
                            <h3>{telefon}</h3>
                        </div>
                    ) : null}
                    {email ? (
                        <div className="email">
                            <img src="./Media/emailIcon.svg" alt="" />
                            <h3>{email}</h3>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

const listaProfesori = [
    {
        nume: "Romică Daneș",
        functie: "Director, profesor de Matematică",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Mihaela Borcilă-Iftimescu ",
        functie: "Profesoară de Matematică",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Larisa Gabriela Ichim",
        functie: "Profesoară de Limba Romănă",
        email: "ichimlarisagabriela@yahoo.com",
        img: "ichim",
        telefon: null,
    },
    {
        nume: "Andreea Hliboceanu-Lehuțu",
        functie: "Profesoară de Limba Romănă",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Marinica Cuzuban ",
        functie: "Profesoară de Limba Franceză",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Georgiana Mardar",
        functie: "Profesoară de Limba Franceză",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Ștefan Brehuescu",
        functie: "Profesor de Istorie",
        email: "s.brehuescu@gmail.com",
        img: "bStefan",
        telefon: "0741407770",
    },
    {
        nume: "Valentina Bârsan",
        functie: "Profesoară de Geografie",
        email: "barsan.valentina@yahoo.com",
        img: "birsan",
        telefon: null,
    },
    {
        nume: "Ioana- Alina Grosu",
        functie: "Profesoară de Biologie",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Ioan Radiș",
        functie: "Profesor de Religie",
        email: "ioanradis2019@gmail.com",
        img: "radisI",
        telefon: null,
    },
    {
        nume: "Carmen Voiniciuc ",
        functie: "Profesoară de Educație Fizică",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Aurel Apetrei ",
        functie: "Profesor de Educație Fizică",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Ana Zelinschi",
        functie: "Profesoară de Educație Tehnologică",
        email: "anazelinschi3@gmail.com",
        img: "zelinschi",
        telefon: null,
    },
    {
        nume: "Emil Mandric ",
        functie: "Profesor de Educație Muzicală",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Felicia Radiș ",
        functie: "Profesoară pentru Învățământul Primar",
        email: "felicia_radis@yahoo.com",
        img: "radisF",
        telefon: null,
    },
    {
        nume: "Alina Pavel- Rascarache ",
        functie: "Profesoară pentru Învățământul Primar",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Maria Adelina Voiniciuc ",
        functie: "Profesoară pentru Învățământul Preșcolar",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Simona Vîlcan ",
        functie: "Profesoară pentru Învățământul Primar",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Andreea Cătălina Ciobanu ",
        functie: "Profesoară pentru Învățământul Preșcolar",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Iuliana Toplicean",
        functie: "Profesoară pentru Învățământul Primar",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Mariana Trofin ",
        functie: "Profesoară pentru Învățământul Primar",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Geanina Grecu ",
        functie: "Profesoară pentru Învățământul Preșcolar",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Daniela Mihaela Radeș ",
        functie: "Educatoare",
        email: "danielarades286@gmail.com",
        img: "radesD",
        telefon: null,
    },
    {
        nume: "Teodora Ganez",
        functie: "Învățătoare",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Volschi Doina ",
        functie: "Învățătoare",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Laura Tucaliuc ",
        functie: "Învățătoare",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Mădălina-Alina Ghițun-Brehuescu ",
        functie: "Educatoare",
        email: "ghitunmadalinaalina@gmail.com",
        img: "",
        telefon: null,
    },
    {
        nume: "Tudor Vâlcan ",
        functie: "Învățător",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Carmen Adina Ghițun",
        functie: "Consilier școlar",
        email: "cghitun@yahoo.com",
        img: "carmen",
        telefon: null,
    },
    {
        nume: "Livia Primac ",
        functie: "Profesoară - documentarist CDI",
        email: "primaclivia@yahoo.com",
        img: "primac",
        telefon: null,
    },
    {
        nume: "Antonica Buțerchi ",
        functie: "Secretară",
        email: "",
        img: "",
        telefon: null,
    },
    {
        nume: "Florica Răuțu",
        functie: "Contabilă",
        email: "",
        img: "",
        telefon: null,
    },
];

// function insertQuery(array) {
//     let q;
//     array.forEach(point => {
//         q += `INSERT INTO \`resurseUmane\` (\`nume\`,\`functie\`,\`email\`,\`img\`,\`telefon\`) VALUES ('${point.nume}' , '${point.functie}','${
//             point.email
//         }','${point.img}','${point.telefon == null ? "" : point.telefon}'); `;
//     });
//     return q;
// }
