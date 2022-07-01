// Variables linked to the DOM.

let navBar = document.querySelector(".nav");
let navBarLinks = document.querySelectorAll(".nav-links");

let coverTitleContainer = document.querySelector(".cover-proyect-title-container");
let coverTitle = document.querySelector(".cover-proyect-title");

let aboutProyectTextContainer = document.querySelector(".about-proyect-text-container");
let aboutProyectText = document.querySelector(".about-proyect-text");

let charactersDisplayContainer = document.querySelector(".characters-display-container");
let charactersDisplay = document.querySelectorAll(".characters-display");
let charactersTextGlobal = document.querySelectorAll(".characters-text");
let charactersText = document.querySelectorAll(".characters-text-2");
let charactersButton = document.querySelectorAll(".characters-button");
let charactersButtonString = document.querySelectorAll(".characters-button-string");
let charactersButtonImg = document.querySelectorAll(".characters-button-img");

const multipleNodeColorConverter = (varName,color)=>{
	for (let i=0; i<varName.length; i++) {
		varName[i].style.color = `${color}`;
	}
}
const multipleNodeSizeConverter = (varName,size)=>{
	for (let i=0; i<varName.length; i++){
		varName[i].style = `font-size:${size}`;
	}
}

// Event to execute scroll functions on the hole document.

document.addEventListener("scroll", ()=>{
	const scrollY = window.scrollY;
	if (scrollY !== 0) {
		navBarMinimize();
	} else {
		navBarMaximize();
	}
	let rectCoverTitle = coverTitleContainer.getBoundingClientRect();
	console.log(rectCoverTitle);
	if (rectCoverTitle.top <= 600 && rectCoverTitle.top >= 20) {
		paimemanTitleFall();
	}
	let rectTextDisplay = aboutProyectTextContainer.getBoundingClientRect();
	if (rectTextDisplay.top <= 450 && rectTextDisplay.top >= -17) {
		proyectTextOpacity();
	}
	let rectCharPlate = charactersDisplayContainer.getBoundingClientRect();
	if (rectCharPlate.top <= 420 && rectCharPlate.top >= 48) {
		displayCharactersPlates();
	}
})

const navBarMinimize = ()=>{
	navBar.style.position = "fixed"
	navBar.style.top = "0";
	navBar.style.background = "#0005";
	navBar.style.animation = "navMinimize 1s forwards";
	multipleNodeSizeConverter(navBarLinks,"large");
	multipleNodeColorConverter(navBarLinks,"#fff");
	
}

const navBarMaximize = ()=>{
	navBar.style.position = "initial"
	navBar.style.background = "#efefef";
	navBar.style.animation = "navMaximize 1s forwards";
	multipleNodeSizeConverter(navBarLinks,"x-large");
	multipleNodeColorConverter(navBarLinks,"#000");
}

const paimemanTitleFall = ()=>{
	coverTitle.style.animation = "coverTitleFall 0.6s forwards";
}

const proyectTextOpacity = ()=>{
	aboutProyectText.style.animation = "aboutProyectTextOpacity 2s forwards";
}

const displayCharactersPlates = ()=>{
	charactersDisplay[0].style.animation = "characterPlate1 0.8s forwards";
	charactersDisplay[1].style.animation = "characterPlate2 0.8s forwards";
}

// Events to characters plate button interact.


const displayCharacterInfo = (wichChar)=>{
	charactersText[wichChar].style.display = "flex";
	charactersButtonString[wichChar].innerHTML = "Click para minimizar";
	charactersButtonImg[wichChar].style.animation = "ImgRotate 1s normal forwards";
	textNone[wichChar] = false;
}

const hideCharacterInfo = (wichChar)=>{
	charactersText[wichChar].style.display = "none";
	charactersButtonString[wichChar].innerHTML = "Click para maximizar";
	charactersButtonImg[wichChar].style.animation = "ImgRotate2 1s forwards";
	textNone[wichChar] = true;
}

let textNone = [true, true];
charactersButton[0].addEventListener("click", ()=>{
	if (textNone[0] === true) {
		displayCharacterInfo(0);
	} else {
		hideCharacterInfo(0)
	}
})

let textNone2 = true;
charactersButton[1].addEventListener("click", ()=>{
	if (textNone[1] === true) {
		displayCharacterInfo(1);
	} else {
		hideCharacterInfo(1)
	}
})
