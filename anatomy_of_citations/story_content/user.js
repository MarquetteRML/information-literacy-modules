function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cGruT4Tvbn":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var number=Math.floor(Math.random()*10);
GetPlayer().SetVar("RandNum",number);
}

};
