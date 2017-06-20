window.onload = function() {
document.getElementById("btnCheck").addEventListener("click",handleClick);

function handleClick(){
var roomsizelength = document.getElementById("rsizel").value;
var roomsizewidth = document.getElementById("rsizew").value;
var roomdimension = 0;
roomdimension = roomsizelength*roomsizewidth;

	//when button is clicked, do stuff here
window.alert(roomdimension);
};
}