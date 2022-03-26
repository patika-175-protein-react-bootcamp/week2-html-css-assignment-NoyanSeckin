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
// Cards container div holds cards generated with this map method.
characters.map((character) => {
  let adamWarlockImgWidth = "width: 225px";
  let pStyleWithAka = "margin-bottom: 0";
  let divStyleWithAka =
    "align-items: center; justify-content: end; flex-direction: column";
  
    // Character template generates each individual card
  let characterTemplate = ` 
  <div 
  // Bu fonksiyonu normal olarak cagirabiliyorumn, ama icine template literal ile parametre koyunca hata aliyorum.
    onclick="changeOverlay('${character.name}', '${character.image}')"
    class="card-container"
    style="${character.aka ? divStyleWithAka : ""}"
    >
    <div class="card-horizontal-rule"> </div>
    <img style="${
      character.name === "Adam Warlock" ? adamWarlockImgWidth : ""
    }" src="${character.image}" class="card-image" alt="" />
    
    <p class="w-text card-text" style="${
      character.aka ? pStyleWithAka : "margin-bottom: 40px"
    }" >${character.name}</p>
    <p style="margin-top: 0;"  class="w-text card-text">${
      character.aka ? character.aka : ""
    }</p>
  </div>`;
  cardsContainer.innerHTML += characterTemplate;
});
// Bonus: Overlay is added
const overlay = document.getElementById("overlay");
const overlayCloseBtn = document.querySelector(".overlay-close-btn");
overlayCloseBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});
const overlayImage = document.querySelector(".overlay-image");
const overlayName = document.querySelector(".overlay-name");
function changeOverlay(name, image) {
  overlayName.innerText = name;
  overlayImage.setAttribute("src", image);
  overlay.classList.add("show");
}

