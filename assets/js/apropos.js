var imageScroll = document.querySelector(".image-rotate");


window.addEventListener("scroll",()=>{
	
	const {scrollTop} = document.documentElement;
	if(scrollTop>0)
		imageScroll.style.top=scrollTop+"px";
});


var form=document.getElementById("form");
	form.addEventListener("submit",function(e){
		e.preventDefault();
		var demandeCostume=document.querySelector(".demandeCostume");
		demandeCostume.style.left="0%";
		demandeCostume.style.transition="left 1s ease-in-out";
},false);

function cacheModalSecApropos()
{
	let demandeCostume=document.querySelector(".demandeCostume");
		demandeCostume.style.left="-100%";
		demandeCostume.style.transition="left 1s ease-in-out";
}


var lienReseauxSoc = document.querySelectorAll(".media a");

for(let i=0;i<lienReseauxSoc.length;i++)
{
	lienReseauxSoc[i].addEventListener("mouseover",animationLienReseauxSociaux);
}

function animationLienReseauxSociaux(e)
{
	if(e.type="mouseover")
		e.target.classList.add("liens-js");
}	