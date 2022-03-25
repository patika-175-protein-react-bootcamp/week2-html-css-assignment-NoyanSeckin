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

// Cards are rendered to the screen through template literal syntax.
characters.map((character) => {
  // There are special cases, which differentiate cards from each other.
  // 1- Surprisingly, Adam Warlock character needs more width to match its horizontal rule
  // 2- American Eagle character has another nickname (aka). Therefore, I created a custom div style with aka to cope with it.
  let adamWarlockImgWidth = "width: 225px";
  let pStyleWithAka = "margin-bottom: 0";
  let divStyleWithAka =
    "align-items: center; justify-content: end; flex-direction: column";
  let characterTemplate = ` <div style="${
    character.aka ? divStyleWithAka : ""
  }" class="card-container">
  <div class="card-horizontal-rule">  </div>
  <img style="${
    character.name === "Adam Warlock" ? adamWarlockImgWidth : ""
  }" src="${character.image}" class="card-image" alt="" />
  
  <p style="${
    character.aka ? pStyleWithAka : "margin-bottom: 40px"
  }" class="w-text card-text">${character.name}</p>
  <p style="margin-top: 0;"  class="w-text card-text">${
    character.aka ? character.aka : ""
  }</p>
  </div>`;
  // Finally merge it with cardsContainer innerHtml
  cardsContainer.innerHTML += characterTemplate;
});
