window.onload = function() {
function handleClick(){
	
var roomsizelength = document.getElementById("rsizel").value;
var roomsizewidth = document.getElementById("rsizew").value;
var tilesize = document.getElementById("tsize").value;
var tilesize2 = document.getElementById("tsize2").value;
var unitprice = document.getElementById("uprice").value;
var coefficient = document.getElementById("runit").value;

var roomdimension = (roomsizelength*coefficient)*(roomsizewidth*coefficient);
var tilenumber = Math.round(roomdimension/tilesize)|Math.round(roomdimension/tilesize2);
var totalprice = tilenumber*unitprice;

el1 = document.getElementById("tnumber");
el2 = document.getElementById("tprice");

el1.textContent = "#Tiles: " + tilenumber;
el2.textContent ="Price: " + totalprice;

};

function tileMenu(){
if (this.value == "cm") {
document.getElementById('tsize').hidden = false;
document.getElementById('tsize2').hidden = true;
document.getElementById('tsize2').value = 0;
} 
else if (this.value == "inch"){
document.getElementById('tsize').hidden = true;
document.getElementById('tsize2').hidden = false;
document.getElementById('tsize').value = 0;
}
else {
document.getElementById('tsize2').hidden = true;
document.getElementById('tsize').hidden = true;

}	
};
	

document.getElementById("btnCheck").addEventListener("click",handleClick);
document.getElementById("tunit").addEventListener("change",tileMenu);

}


