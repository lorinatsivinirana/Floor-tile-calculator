window.onload = function() {
document.getElementById("btnCheck").addEventListener("click",handleClick);

function handleClick(){
var roomsizelength = document.getElementById("rsizel");
var roomsizewidth = document.getElementById("rsizew");
var roomdimension = roomsizelength*roomsizewidth;

	//when button is clicked, do stuff here
window.alert("result");
};
}