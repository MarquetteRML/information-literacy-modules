window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
const monthName = months[new Date().getMonth()];


// Putting it together
let dateString = monthName + " " + day + "," + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
}

window.Script2 = function()
{
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
const monthName = months[new Date().getMonth()];


// Putting it together
let dateString = monthName + " " + day + ", " + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
}

window.Script3 = function()
{
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
const monthName = months[new Date().getMonth()];


// Putting it together
let dateString = monthName + " " + day + "," + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
}

window.Script4 = function()
{
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
const monthName = months[new Date().getMonth()];


// Putting it together
let dateString = monthName + " " + day + ", " + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
}

};
