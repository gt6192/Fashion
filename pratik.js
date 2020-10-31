window.onload = function()
{
document.getElementById("preloader").style.display="none";
document.getElementById("preloader1").style.display="none";
document.getElementById("preloader2").style.display="none";
document.getElementById("preloader3").style.display="none";
runningText();
setTimeout(runningTextP, 800);
setTimeout(runningTextI, 2500);
}

window.onscroll = function ()
{
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 100)
{
document.getElementById("scroll").style.display="block";
document.getElementById("menu").setAttribute("class", "menubutdiv2");
}
else
{
document.getElementById("scroll").style.display="none";
document.getElementById("menu").setAttribute("class", "menubutdiv");
}
}

function out()
{
var variable = document.getElementById("slidingmenu");
var opa = document.getElementById("opac");
variable.style.width = "80%";
variable.style.transition = "0.5s";
var img = document.getElementById("pimg");
opa.style.transition = "3s";
opa.style.opacity = "0.9";
}

function colapse()
{
var variable = document.getElementById("slidingmenu");
var opa = document.getElementById("opac");
variable.style.width = "0";
variable.style.transition = "0.5s";
opa.style.transition = "0.2s";
opa.style.opacity = "0";
}

function scrolltotop()
{
window.scrollTo({top: 0, behavior: 'smooth'});
}

var slides = document.getElementsByClassName("gtslides");
var i=0;
var j=1;

function initialcorosal()
{
for(i=0;i<slides.length;i++)
{slides[i].style.display="none";}
slides[j-1].style.display="block";
}

initialcorosal();

function corosal()
{
j++;
if(j>slides.length)
{j=1}
for(i=0;i<slides.length;i++)
{
slides[i].style.display="none";
}
slides[j-1].style.display="block";
}
setInterval(corosal, 1000);

var text_h1 = ["F", "a", "s", "h", "i", "o", "n"];
var temp = "";
var loop = 0;
function runningText()
{
if(loop < 7)
{
setTimeout(addText, 100);
}
}

function addText()
{
temp = temp + text_h1[loop];
document.getElementById("hero-h1").innerHTML=temp;
loop = loop+1;
runningText();
}

var text_p = ["R", "e", "a", "d", "y", " t", "o", " s", "h", "o", "w", " y", "o", "u", "r", " s", "w", "a", "g", " w", "i", "t", "h", " o", "u", "r", " f", "a", "s", "h", "i", "o", "n", "."];
var temp2 = "";
var loop2 = 0;
function runningTextP()
{
if(loop2 < 34)
{
setTimeout(addTextP, 50);
}
}

function addTextP()
{
temp2 = temp2 + text_p[loop2];
document.getElementById("hero-p").innerHTML=temp2;
loop2 = loop2+1;
runningTextP();
}

var text_i = ["#", "p", "r", "a", "t", "i", "k", "_", "g", "t", "_", "6", "1", "9", "2"];
var temp3 = "";
var loop3 = 0;
function runningTextI()
{
if(loop3 < 15)
{
setTimeout(addTextI, 100);
}
}

function addTextI()
{
temp3 = temp3 + text_i[loop3];
document.getElementById("hero-i").innerHTML=temp3;
loop3 = loop3+1;
runningTextI();
}