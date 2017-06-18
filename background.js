// Copyright (c) 2017 Codarren Velvindron @ hackers.mu
// Week Ly
// The purpose of Week Ly is to show current week number!
// and a weekly quote when clicked.
// Tooltip shows the current week.
// According to ISO-8601 Date Standard
// MIT License

function getWeekNumber(dateVar) {
	dateVar = new Date(+dateVar);
	dateVar.setHours(0,0,0,0);
	dateVar.setDate(dateVar.getDate() + 4 - (dateVar.getDay()||7));
	var startofYear = new Date(dateVar.getFullYear(),0,1);
	var weekNumber = Math.ceil(( ( (dateVar - startofYear) / 86400000) + 1)/7);
	return [dateVar.getFullYear(), weekNumber];
}
result();
setInterval(function(){result(); },300000);

function result(){
	var result = getWeekNumber(new Date());
	var weekno = result[1].toString();
	chrome.browserAction.setTitle({title:'Week ' + weekno});
	var weeknopath = "icons/" + weekno + ".png";
	chrome.browserAction.setIcon({path: weeknopath});
}
