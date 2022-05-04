

var cardHero = document.getElementsByClassName("card-hero");
var cardImage = document.getElementsByClassName("card-image");
var cardTitle = document.getElementsByClassName("card-title");
var cardContent = document.getElementsByClassName("card-content");

for(let i=0;i<cardHero.length;i++)
{
	cardHero[i].addEventListener("mouseover",function(){
		cardHero[i].style.transition="height 1s ease-in-out";
		cardHero[i].style.borderBottomLeftRadius="50px";
		cardHero[i].style.borderBottomRightRadius="50px";
		cardHero[i].style.height="600px";
		cardImage[i].style.height="180px";
		cardImage[i].style.transition="height 1s ease-in-out";
		cardContent[i].style.display="block";
		cardContent[i].style.transition=" display 1s ease-in-out";

		cardTitle[i].style.position="relative";
		cardTitle[i].style.left="30px";
		cardTitle[i].style.transition=" left 1s ease-in-out";

	});
	cardHero[i].addEventListener("mouseout",function(){
		cardHero[i].style.transition="height 1s ease-in-out";
		cardHero[i].style.borderBottomLeftRadius="0px";
		cardHero[i].style.borderBottomRightRadius="0px";
		cardHero[i].style.height="300px";
		cardImage[i].style.height="230px";
		cardImage[i].style.transition="height 1s ease-in-out";
		cardContent[i].style.display="none";
		cardContent[i].style.transition=" display 1s ease-in-out";
		
		cardTitle[i].style.left="0px";
		cardTitle[i].style.transition=" left 1s ease-in-out";

	});
	
}

