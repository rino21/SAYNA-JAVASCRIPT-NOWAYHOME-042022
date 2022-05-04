var slideImg = document.querySelector(".slide-img");
var marge = 0;
setInterval(function(){
	marge+=100;
	slideImg.style.marginLeft="-"+marge+"%";
	if(marge==400)
		marge=0;
},1000);



var zoomImg=document.querySelectorAll(".zoom-img");

for(let i=0; i<zoomImg.length;i++)
{
	zoomImg[i].addEventListener("mouseover",function(){
		zoomImg[i].style.transform="scale(1.2)";
		zoomImg[i].style.transition="transform 0.5s ease-in-out";

	});
	zoomImg[i].addEventListener("mouseout",function(){
		zoomImg[i].style.transform="scale(1)";
	});
}