/*
    JavaScript
*/ 
$(document).ready(function(){


"use strict";

//var msg="Hello Test";
//console.log(msg);
        
//var TestVar = document.getElementById(result);
//result.innerHTML ="<p>This is from JS</p>";
var TestVar_No2 = jQuery("#resultList");
TestVar_No2.text("This is from jQuery");

var buttON = $("#buttON");
buttON.on("click", function(){
    TestVar_No2.toggle(500);

    if(buttON.text()=="Hide") buttON.text("Show");
    else buttON.text("Hide");
});

var ListItem = $("header nav li")
ListItem.css("font-weight", "bold");
//ListItem.css("font-size", "18px");
ListItem.filter(":first").css("font-size", "18px");

/*
var ObjectsName = {
    name:"Antonio",
    language:"JavaScript",
    score:"4.20",
    showLog: function(){
        console.log("This is in object");
    },
    owner:{
        NameOwner:"Qubec",
        id:"123123"
    }
};
*/
//console.log(ObjectsName.score);

//ObjectsName.PhoneNumber = "123-456-789";
//console.log(ObjectsName.PhoneNumber);

$("#gitHubSearchForm").on("submit", function(){

    var searchPhrase = $("#VarSrc").val();
    var checkbox = $("#checkbox").val();
    var languageChoice = $("#language").val();

    if(searchPhrase){

        TestVar_No2.text("Loading...");

        var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);

        if(languageChoice != "All"){
            gitHubSearch += "+language:" + encodeURIComponent(languageChoice);
        }

        if(checkbox){
            gitHubSearch += "&sort=stars"; 
        }

        var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

        $.get(gitHubSearch, function (r) {
            //console.log(r.items.length);
            displayResults(r.items);
        });
    }

    return false;   
});


/*
var arrayName = [
    {
        name:"Antonio",
        language:"JavaScript",
        score:"4.20",
        showLog: function(){
            
        },
        owner:{
            login:"Qubec",
            id:"123123"
            }
    },
    {
        name:"Ivan",
        language:"HTML",
        score:"2.20",
        showLog: function(){
            
        },
        owner:{
            login:"Qubec",
            id:"123123"
            }
    },
    
    {
        name:"Josip",
        language:"C++",
        score:"3.20",
        showLog: function(){
                
        },
        owner:{
            login:"Qubec",
            id:"123123"
            }
    }
    
];
*/

function displayResults(arrayName){
TestVar_No2.empty();
$.each(arrayName, function(i, item){                                 //each- nesto ka for petlja samo od jQ i brže je
    var newResult = $("<div class='result'>" +                       //baza je u tome da smo tribali dodat $ kako bi mogli koristit hover posto sada newRes predstavlja jquerry objekt pa možemo koristit funkciju hover
    "<div class = 'title'>" + item.name + "</div>" +
    "<div>language: " + item.language + "</div>" +
    "<div>owner: " + item.owner.login + "</div>" + 
    "</div>");

    newResult.hover(function(){                                   //hover-kad priđemo priko ovog diva s mišem minja se boja div-a
        //neka bude tamnija boja
        $(this).css("background-color", "lightgray");
        }, function(){
        //povrati na staro kad smo gotovi
        $(this).css("background-color", "transparent");
    });

    TestVar_No2.append(newResult);                                   //dodavanje novog rezultata u div class=results u HTML-u

});
}



//console.log(arrayName.length);
//console.log(arrayName[0]);
//--------------------------------------------
/*
for(var x=0; x<arrayName.length; x++){
    console.log(x+1);
}

*/

/*
console.log("Msg is " + typeof(msg));
console.log("TestVar is " + typeof(TestVar));

var none;

var numVar = 10;
var BooleanVar = true;

console.log("numVar is " + typeof(numVar));     
console.log("BooleanVar is " + typeof(BooleanVar));

//msgs = "this shouldnt work";

if(none == undefined){
    console.log("This var is undifine");
}

if(numVar === "10"){
    console.log("10 is 10");
}
else{
    console.log("This is not true!");
}
 //-----------------------------------------------------------------
function showMsg(msg){
    console.log("Show that msg " + msg);
}
//-----------------------------------------------------------------
function showMsg(msg, more){
    if(more){
        console.log("Show that msg+ " + msg + more);
    }else{
        console.log("The msg is " + msg);
    }
}

showMsg(msg);
showMsg("some informations", " and more informations");
//-----------------------------------------------------------------
var showIt = function(msg){
    console.log(msg);
}

showIt("Some message");
//-----------------------------------------------------------------
function showItThan(msg, callback){
    showIt(msg);
    callback();
}

showItThan("lalaLand", function(){
    console.log("callback called");
});
//-----------------------------------------------------------------
var GlobalOne = true;

function writeIt(msg){
    console.log(msg);
    
    var LocalOne = "Toni";
    console.log("Your name is:" + LocalOne);
    
}

writeIt(GlobalOne);
*/
});
