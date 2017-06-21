window.onload = function() {
function handleClick(){
el1 = document.getElementById('tnumber');
el2 = document.getElementById('tprice');	
var roomsizelength = document.getElementById("rsizel").value;
var roomsizewidth = document.getElementById("rsizew").value;
var tilesize = document.getElementById("tsize").value;
var unitprice = document.getElementById("uprice").value;

var roomdimension = roomsizelength*roomsizewidth;
var tilenumber = roomdimension/tilesize;
var totalprice = tilenumber*unitprice;

el1.innerHTML = '#Tiles:' + tilenumber;
el2.innerHTML = '#Price:' + totalprice;

	//when button is clicked, do stuff here
//window.alert(totalprice);

};
document.getElementById("btnCheck").addEventListener("click",handleClick);
}