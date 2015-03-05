function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JJUxjVTFsp":
        Script1();
        break;
  }
}

function Script1()
{
  var player 			= GetPlayer();

//grab the LMS object
var lmsAPI = parent
//ask the LMS object to get the name
var rawName = lmsAPI.GetStudentName();
//the name comes very formal "Last, First"
//we will fix that by sticking the name into an array
var nameArray = rawName.split(",")
//get the first name
var firstName = nameArray[1];
//get the last name
var lastName = nameArray[0];

var period = ".";

var domain = "@marquette.edu";

var StudentEmail = firstName.concat(period).concat(lastName).concat(domain);

var StudentEmailLowerCase = StudentEmail.toLowerCase();

player.SetVar("StudentEmailSend",StudentEmailLowerCase);


var InitialTopic 	                = player.GetVar("InitialTopic");

var InitialKeywords 	                = player.GetVar("InitialKeywords");


var ArticleTitle                        = player.GetVar("ArticleTitle");

var JournalTitle                       = player.GetVar("JournalTitle");

var PublicationYear                 = player.GetVar("PublicationYear");

var StudentEmailSent                 = player.GetVar("StudentEmailSend");



var ResearchReflection 	= player.GetVar("ResearchReflection");

$.ajax({  
 type: "POST",  
 url: "http://www.mu.edu/cgi-bin/FormMail.cgi",  
 data: {
        recipient : 'eric.kowalik@marquette.edu',
        subject : 'Library Day Article',
        email : 'askus@marquette.edu',
        Topic :  InitialTopic,
        Keyword : InitialKeywords,
       Article_Title : ArticleTitle,
      Journal_Title : JournalTitle,
      Publication_Year : PublicationYear,
     Research_Reflection : ResearchReflection
},
                    statusCode: {
                        0: function() {
                            //Success message
                        },
                        200: function() {
                            //Success Message
                        }
                    }   
  }); 
}

