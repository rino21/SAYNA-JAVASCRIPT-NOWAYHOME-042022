var btn2 = document.querySelector("#adv");

btn2.addEventListener("mouseover", animationBouton2);

function animationBouton2(e) {
    if (e.type = "mouseover")
        e.target.classList.add("button2-js");
}


var elemScroll = document.querySelector(".hero-scroll");
var elemScroll2 = document.querySelector(".hero-scroll-2");

window.addEventListener("scroll",()=>{
	
	const {scrollTop} = document.documentElement;
	if(scrollTop<=1713 && scrollTop>150)
		elemScroll.style.top=scrollTop+"px";
	if(scrollTop>1885 && scrollTop<=2435)
		elemScroll2.style.top=scrollTop+"px";
});


var marvelSlide = document.getElementById("marvel-slide");
	marvelSlide.classList.add("marvel-js");

/***           audio        ******/

var audioM = document.getElementById("audioM");
var playMusic = document.getElementById("playMusic");
var progress = document.getElementById("progress");
var position=0;
var sliderPos;

playMusic.onclick=function(){
	if(audioM.paused){
		audioM.play();
		this.classList.replace("fa-play","fa-pause");
	}
	else
	{
		audioM.pause();
		this.classList.replace("fa-pause","fa-play");
	}
	
}

function changeRange(elem)
{
	sliderPos = audioM.duration * (elem.value / 100);
	audioM.currentTime=sliderPos;
}

function changeSliderRange()
{
	let pos = 0;
	pos = audioM.currentTime * (100 / audioM.duration);
	progress.value = pos;
}
setInterval("changeSliderRange()",1000);



var cardUnique = document.querySelectorAll(".card-unique img");
var cardText = document.querySelectorAll(".card-text");

for (let i = 0; i < cardUnique.length; i++) {
	cardUnique[i].addEventListener("mouseover",function(e){
			this.parentNode.classList.add("imageHero-js");
			cardText[i].style.display="block";
			cardText[i].classList.add("text-js");
	});
	cardUnique[i].addEventListener("mouseout",function(e){
			this.parentNode.classList.remove("imageHero-js");
			cardText[i].style.display="none";
			cardText[i].classList.remove("text-js");
	});
}

var form1=document.getElementById("form1");
	form1.addEventListener("submit",function(e){
		e.preventDefault();
		var demandeCostume=document.querySelector(".demandeCostume");
		demandeCostume.style.left="0%";
		demandeCostume.style.transition="left 1s ease-in-out";
},false);

function cacheModal()
{
	var demandeCostume=document.querySelector(".demandeCostume");
		demandeCostume.style.left="-100%";
		demandeCostume.style.transition="left 1s ease-in-out";
}

var form1=document.getElementById("form2");
	form1.addEventListener("submit",function(e){
		e.preventDefault();
		var demandeCostume1=document.querySelector(".demandeCostume1");
		demandeCostume1.style.left="0%";
		demandeCostume1.style.transition="left 1s ease-in-out";
},false);

function cacheModalSec()
{
	var demandeCostume1=document.querySelector(".demandeCostume1");
		demandeCostume1.style.left="-100%";
		demandeCostume1.style.transition="left 1s ease-in-out";
}
