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
    onclick="changeModal('${character.name}', '${character.image}')"
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
const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
const modalImage = document.querySelector(".modal-image");
const modalName = document.querySelector(".modal-name");
function changeModal(name, image) {
  modalName.innerText = name;
  modalImage.setAttribute("src", image);
  modal.classList.add("show");
}

