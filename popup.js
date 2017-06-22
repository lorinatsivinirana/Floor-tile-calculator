window.onload = function() {
function handleClick(){
	
var roomsizelength = document.getElementById("rsizel").value;
var roomsizewidth = document.getElementById("rsizew").value;
var tilesize = document.getElementById("tsize").value;
var tilesize2 = document.getElementById("tsize2").value;
var unitprice = document.getElementById("uprice").value;

var roomdimension = roomsizelength*roomsizewidth;
var tilenumber = (roomdimension/(tilesize))|| roomdimension/(tilesize2);
var totalprice = tilenumber*unitprice;

el1 = document.getElementById("tnumber");
el2 = document.getElementById("tprice");

el1.innerHTML = "#Tiles: " + Math.round(tilenumber);
el2.innerHTML = "#Price: " + Math.round(totalprice);


	//when button is clicked, do stuff here
//window.alert(totalprice);
};

function tileMenu(){
if (this.value == "cm") {
document.getElementById('tsize').hidden = false;
document.getElementById('tsize2').hidden = true;
} else if (this.value == "inch"){
document.getElementById('tsize2').hidden = false;
document.getElementById('tsize').hidden = true;
}
else {
document.getElementById('tsize2').hidden = true;
document.getElementById('tsize').hidden = true;
}	
};	

document.getElementById("btnCheck").addEventListener("click",handleClick);
document.getElementById("tunit").addEventListener("change",tileMenu);
}