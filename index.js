let navBar = document.querySelector(".nav");
let navBarLinks = document.querySelectorAll(".nav-links");
const multipleNodeColorConverter = (varName,color)=>{
	for (i=0;i<varName.length;i++) {
		varName[i].style.color = `${color}`;
	}
}
const multipleNodeSizeConverter = (varName,size)=>{
	for (i=0;i<varName.length;i++){
		varName[i].style = `font-size:${size}`;
	}
}

document.addEventListener("scroll", ()=>{
	let scrollY = window.scrollY;
	if (scrollY !== 0) {
		navBarMinimize();
	} else {
		navBarMaximize();
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
