const characters = [
  {
    name: "Adam Warlock",
    image: "images/adamwarlock.png",
  },
  { name: "A-Bomp HAS", image: "images/abomphas.png" },
  { name: "Alex Power", image: "images/alexpower.png" },
  {
    name: "American Eagle",
    aka: "(Json Strrongbow)",
    image: "images/americaneagle.png",
  },
  { name: "Agent Zero", image: "images/agentzero.png" },
  { name: "Anita Blake", image: "images/anitablake.png" },
  { name: "Alex Power", image: "images/alexpower.png" },
  { name: "Apocalypse", image: "images/apocalypse.png" },
];

const cardsContainer = document.querySelector(".cards-container");

characters.map((character) => {
  // let characterTemplate = ``
  let pStyleWithAka = "margin-bottom: 0";
  let divStyleWithAka =
    "align-items: center; justify-content: end; flex-direction: column";
  let characterTemplate = ` <div style="${
    character.aka ? divStyleWithAka : ""
  }" class="card-container">
  <img src="${character.image}" class="card-image" alt="" />
  
  <p style="${
    character.aka ? pStyleWithAka : "margin-bottom: 40px"
  }" class="w-text card-text">${character.name}</p>
  <p style="margin-top: 0;"  class="w-text card-text">${
    character.aka ? character.aka : ""
  }</p>
  </div>`;
  // cardsContainerHtml;
  cardsContainer.innerHTML += characterTemplate;
});

// const cardsArray = [
//   ` <div class="card-container">
//   <h1>hello</h1>
// <img src="images/adamwarlock.png" class="card-image" alt="" />
// </div>`,
//   ` <div class="card-container">
// <h1>hello</h1>
// <img src="images/adamwarlock.png" class="card-image" alt="" />
// </div>`,
// ];
