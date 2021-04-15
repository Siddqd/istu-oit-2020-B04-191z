window.onscroll=function()	{scrollFunction()};
function scrollFunction() {
	if(document.body.scrollTop>document.documentElement.clientHeight||
	document.documentElement.scrollTop>document.documentElement.clientHeight){
	document.getElementById("myBtn").style.display="block";}
	else{
	document.getElementById("myBtn").style.display="none";}
}
function topFunction(){
	document.documentElement.scrollTop=0;
}
	