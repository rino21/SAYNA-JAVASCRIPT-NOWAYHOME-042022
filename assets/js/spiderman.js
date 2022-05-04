var btn = document.getElementsByClassName("btn button1");


for(let i = 0; i < btn.length; i++)
{
	btn[i].addEventListener("mouseover",animationBouton);
}

function animationBouton(e)
{
	if(e.type="mouseover")
		e.target.classList.add("button1-js");
}



var lienReseauxSoc = document.querySelectorAll("footer .media a");

for(let i=0;i<lienReseauxSoc.length;i++)
{
	lienReseauxSoc[i].addEventListener("mouseover",animationLienReseauxSociaux);
}

function animationLienReseauxSociaux(e)
{
	if(e.type="mouseover")
		e.target.classList.add("media-js");
		e.target.href="bonus.html";
}	


var lienMenu = document.querySelectorAll(".menu ul li");
for(let i=0; i<lienMenu.length;i++)
{
	lienMenu[i].addEventListener("mouseover",animationLienMenu);
}

function animationLienMenu(e)
{
	if(e.type="mouseover")
		e.target.classList.add("lien-js");
}	



function animationTitre()
{
	var titre = document.querySelector(".titre");
	var textTitre = titre.textContent;
	titre.textContent="";
	mouvementGaucheDroite(textTitre,titre,0);
}

function mouvementGaucheDroite(text,elem,i,p)
{
	elem.textContent+=text[i];
	if(i<text.length-1)
		setTimeout(mouvementGaucheDroite,300,text,elem,i+1);
}

animationTitre();


function animationSousTitre()
{
	var description=document.querySelector(".description");
	animeOpacitySousTitre(description,0);

}

function animeOpacitySousTitre(elem,i)
{
	elem.style.opacity=i+"%";
	if(i<100)
		setTimeout(animeOpacitySousTitre,50,elem,i+1);
	
		 
}

animationSousTitre();