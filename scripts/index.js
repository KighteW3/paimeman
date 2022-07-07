alert('Atención: esta página sigue en desarrollo, por lo tanto está incompleta y puede presentar errores.')

// Variables linked to the DOM.

let viewport = document.getElementById("viewport");

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

let secondArticle = document.getElementById("second-article");
let muñecoPesao = document.getElementById("muñeco-pesao");
let muñecoPesaoImg = document.querySelector(".muñeco-pesao-img");
let muñecoPesaoDiálogo = document.getElementById("muñeco-pesao-diálogo");
let ediciónPlate = document.querySelectorAll(".edición-plate");
let ediciónPlateBox = document.querySelectorAll(".edición-plate-2-1");
let ediciónPlateImg = document.querySelectorAll(".edición-plate-1-1-img");
let ediciónPlateBorder = document.querySelectorAll(".edición-plate-1-2-border");
let ediciónPlateText = document.querySelectorAll("edición-plate-1-2-text-container");

let thirtyArticle = document.getElementById("thirty-article");
let galeríaIntroductionTitle = document.querySelector(".galería-introduction-title-h2");
let galeríaImg = document.querySelectorAll(".galería-img");

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
	edicionesAnimation(0);
	edicionesAnimation(1);
	edicionesAnimation(2);
	let rectSecondArticle = secondArticle.getBoundingClientRect();
	if (rectSecondArticle.top <= 226 && rectSecondArticle.top >= (-1313)) {
		muñecoPesao.style.animation = "muñecoPesaoDisplay 1s forwards";
		muñecoPesao.style.display = "inline";
		muñecoPesao.style.opacity = "1";
		muñecoPesaoImg.style.transform = "rotate(30deg)";
		setTimeout(muñecoPesaoDiálogoDisplay, 500)
	} else if (rectSecondArticle.top != 226 && rectSecondArticle.top != (-1076)) {
		muñecoPesao.style.animation = "muñecoPesaoHide 1s forwards";
		muñecoPesao.style.opacity = "1";
		setTimeout(muñecoPesaoDiálogoHide, 500)
	}
	let rectThirtyArticle = thirtyArticle.getBoundingClientRect();
	console.log(rectThirtyArticle.top);
	if (rectThirtyArticle.top <= 265 && rectThirtyArticle.top >= -11) {
		galeríaIntroductionTitle.style.animation = "galeríaIntroductionTitle 1s infinite alternate"
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
	charactersDisplay[0].style.display = "grid";
	charactersDisplay[1].style.animation = "characterPlate2 0.8s forwards";
	charactersDisplay[1].style.display = "grid";
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


const muñecoPesaoDiálogoDisplay = ()=>{
	muñecoPesaoDiálogo.style.animation = "muñecoPesaoDiálogoDisplay 1s forwards";
	muñecoPesaoDiálogo.style.display = "inline";
	muñecoPesaoDiálogo.style.opacity = "1";
}

const muñecoPesaoDiálogoHide = ()=>{
	muñecoPesaoDiálogo.style.animation = "muñecoPesaoDiálogoHide 1s forwards";
	muñecoPesaoDiálogo.style.opacity = "1";
}

function edicionesAnimation(wichPlate) {
	let rectEdiciónPlate = ediciónPlate[wichPlate].getBoundingClientRect();
	let rectEdiciónPlateBorder = ediciónPlateBorder[wichPlate].getBoundingClientRect();
	if (rectEdiciónPlate.top <= 371 && rectEdiciónPlate.top >= 61) {
		ediciónPlateImg[wichPlate].style.animation = "edicionesPlateImgDisplay 1s forwards";
	}
	if (rectEdiciónPlate.top <= 371 && rectEdiciónPlate.top >= 61) {
		ediciónPlateBox[wichPlate].style.animation = "ediciónPlateDisplay 1s forwards"
		ediciónPlateBox[wichPlate].style.display = "flex";
	}
	if (rectEdiciónPlateBorder.top <= 663 && rectEdiciónPlateBorder.top >= 61) {
		ediciónPlateBorder[wichPlate].style.animation = "edicionesPlateTextDisplay 1s forwards";
	}
}

console.log(galeríaImg);

for (i=0;i<galeríaImg.length;i++) {
	let x = i;
	galeríaImg[i].addEventListener('click', ()=>{
		window.open(galeríaImg[x].src);
	})
}