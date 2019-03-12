function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YfeyNFebFK":
        Script1();
        break;
      case "62mAKJaoD0w":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

function findLMSAPI(win) { 
// look in this window 
if (win.hasOwnProperty("GetStudentID")) return win;

// all done if no parent 
else if (win.parent == win) return null;

// climb up to parent window & look there 
else return findLMSAPI(win.parent); 
} 
var lmsAPI = findLMSAPI(this); 
var myName = lmsAPI.GetStudentName(); 
var array = myName.split(','); 
var newName = array[1] + ' ' + array[0]; 
player.SetVar("LearnerName", newName)
}

function Script2()
{
  // Name of the certificate html file
var certFilename = 'certificate.html';

// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");

// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
    /* If src of current iFrame element equals the filename set in variable
	** certFilename call the generatePDF() function.
	*/
    var src = iframeElements[i].getAttribute('src');
	if (src.indexOf(certFilename) !=-1) {
		iframeElements[i].contentWindow.generatePDF();
	}
}
}

