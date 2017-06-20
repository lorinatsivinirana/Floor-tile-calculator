window.onload = function() {
document.getElementById("btnCheck").addEventListener("click",handleClick).value;

function handleClick(){
var roomsizelength = document.getElementById("rsizel");
var roomsizewidth = document.getElementById("rsizew");
var roomdimension = 0;
roomdimension = roomsizelength*roomsizewidth;

	//when button is clicked, do stuff here
window.alert(roomdimension);
};
}