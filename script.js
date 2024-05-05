const btns = document.querySelectorAll(".button");
const txts = document.querySelectorAll(".text");
const nav = document.querySelector(".nav");
const contEl = document.querySelector(".container");
const inputElement = document.querySelector(".input");
const blackDiv = document.querySelector(".header");
const hElement = document.querySelector(".hh")
const bodyEL = document.querySelector("body");
const words = ['Software Engineer', 'Frontend Developer'];
const drop = document.querySelector("i");
const droplist = document.querySelector(".dropdown-list");
const maindrop = document.querySelector(".dropdown-container");


drop.addEventListener("click", ()=> {
    console.log("hi");
    droplist.style.display = "flex";
    droplist.style.flexDirection = "column"
    droplist.style.justifyContent =  "center";
    droplist.style.alignItems = "center" 
})
setTimeout(function () {
    blackDiv.classList.add("active");
    }, 100)
let wordsIndex = 0;
let characterIndex = 0;
updateText();
function updateText(){
    hElement.innerText = `${words[wordsIndex].slice(0, characterIndex)}`
    characterIndex++;
    if (characterIndex === words[wordsIndex].length + 1) {
        wordsIndex++;
        characterIndex = 0;
    }
    if (wordsIndex === words.length) {
        wordsIndex = 0;
    }
    setTimeout(updateText, 500);
}

nav.addEventListener("click", (event)=> {


    const id = event.target.dataset.id;

    if (id) {
        btns.forEach((btn)=> {
            blackDiv.classList.remove("active");
            wordsIndex = 0;
            characterIndex = 0;
            setTimeout(function () {
            blackDiv.classList.add("active");
            }, 400)
            btn.classList.remove("live");
            droplist.style.display = "none"
        })
        event.target.classList.add("live");
        txts.forEach((txt)=> {
            txt.classList.remove("live");
        })
        const element = document.getElementById(id);
        element.classList.add("live");
    }
})

inputElement.checked = JSON.parse(localStorage.getItem("Mode"));
updateMode();

inputElement.addEventListener("input", ()=> {
    updateMode();
    updateLocalStorage();
})

function updateMode(){
    if(inputElement.checked){
        contEl.style.background = "#36454F";
        bodyEL.style.background = "#36454F";
        contEl.style.color = "white";
        hElement.style.background = "linear-gradient(45deg,#ffcc00,#ff9f00)";
        hElement.style.webkitTextFillColor = "transparent";
        hElement.style.backgroundClip = "text";
    }else {
        contEl.style.background = "#eaf4f1";
        contEl.style.color = "#333333";
        bodyEL.style.background = "#eaf4f1";
        hElement.style.background = "linear-gradient(45deg,#ff9f00,#ffcc00)";
        hElement.style.webkitTextFillColor = "transparent";
        hElement.style.backgroundClip = "text";
    }
}

function updateLocalStorage() {
    localStorage.setItem("Mode", JSON.stringify(inputElement.checked));
}
