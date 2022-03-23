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
  let characterTemplate = ` <div class="card-container">
  <img src="${character.image}" class="card-image" alt="" />
  <p  class="w-text">${character.name}</p>
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
