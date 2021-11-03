function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6J7GhuBiRSn":
        Script1();
        break;
  }
}

function Script1()
{
  var number=Math.floor(Math.random()*10);
GetPlayer().SetVar("RandNum",number);
}

