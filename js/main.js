const listaTeam = [
  /* 0 */ {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
  /* 1 */ {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
  /* 2 */ {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
  /* 3 */ {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    /* 4 */ {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg"
    },
  /* 5 */ {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];

const team = document.getElementById("team");

for (let i = 0; i < listaTeam.length; i++) {
    console.log(listaTeam[i]);
    team.innerHTML += `<li>nome: ${listaTeam[i].nome} <br> ruolo: ${listaTeam[i].ruolo} <br> immagine: ${listaTeam[i].img} <br> <br></li>`;
}



