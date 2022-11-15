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
    team.innerHTML += `<div class="card col-12 col-md-3"> <img src="img/${listaTeam[i].img}" class="card-img-top"> <div class="card-body"> <p class="card-text"> ${listaTeam[i].nome} <br> ${listaTeam[i].ruolo} </p> </div></div>`;
}



