

function Miniteur() {
 	var mini = document.querySelector(".mini");

 	let date_debut = new Date().getTime();
    let date_fin = new Date("May 5, 2022");
    let date_termine = date_fin.setHours(8,0);

    const distance_heure = date_termine - date_debut;

    let jours = Math.floor(distance_heure / (1000 * 60 * 60 * 24));
    let heures = Math.floor((distance_heure % (1000* 60 * 60 * 24)) / (1000*60*60));
    let minutes = Math.floor((distance_heure % (1000*60*60)) / (1000 * 60));
    let secondes = Math.floor((distance_heure % (1000*60)) / (1000));
    mini.textContent=jours+"j : "+heures+"h : "+minutes+"m : "+secondes+"s";
    if(jours == 0 && heures == 0 && minutes == 0 && secondes == 0)
    {
         temps_ecoule();
    }
 	
}
var timer=setInterval("Miniteur()", 1000);



        function temps_ecoule(){
            clearInterval(timer);
            var tempsEcoule = document.querySelector(".temps-ecoule");
            tempsEcoule.textContent="TEMPS ECOULE";

        }