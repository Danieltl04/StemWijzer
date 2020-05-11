//alert("test");

var test = 0;
var Precentage = 0;
var o = 0;
var Choices = [];
var PartyChoices;
var Party;
var checkedValue;
var checkedName;


for (let u = 0; u < parties.length; u++) {
    // console.log(i, subjects[o].parties[i].name)
    var input = document.createElement("INPUT");
    var p = document.createElement("P");
    p.innerHTML = parties[u].name;
    input.setAttribute("type", "checkbox");
    document.getElementById("Party"+u).innerHTML = parties[u].name;
    console.log(input + u + " " + parties[u].name);
}

function EditText() {
    document.getElementById("Title").innerHTML = o+1 + ". " + subjects[o].title;
    document.getElementById("Statement").innerHTML = subjects[o].statement;
    //console.log(subjects[o].parties);
    //console.log(Choises);
    for (let i = 0; i < subjects[o].parties.length; i++) {
        //console.log(i, subjects[o].parties[i].name)
        //document.getElementById("Party"+i).innerHTML = subjects[o].parties[i].name + " Mening: " +  subjects[o].parties[i].opinion;
    }
    //GetChosenParty();
}

function GetChosenParty() {
    var inputElements = document.getElementsByClassName('partyCheckbox');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            checkedName = inputElements[i].name;
            // console.log(checkedName ,":", checkedValue);
            // console.log(Precentage + "% mee eens met " + checkedValue);
            console.log("---test---");
            for (let a = 0; a < 30; a++) {
                //alert(Choices[a])
                console.log(a);
                for (let b = 0; b < subjects[a].parties.length; b++) {
                    if (subjects[a].parties[b].name == checkedValue) {
                        //console.log(a + ":" + b + ":" + subjects[a].parties[b].name);
                            if (Choices[a] == subjects[a].parties[b].position) {
                                console.log(Choices[a] + ":" + subjects[a].parties[b].position)
                                test++
                            }
                    }
                }
            }
            Precentage = 100 / subjects.length * test;
            alert(Precentage + "% mee eens met " + checkedValue);
            Precentage = 0;
            test = 0;
        }
    }
    // var inputElements = document.getElementsByClassName('partyCheckbox');
    // for(var i=0; inputElements[i]; ++i){
    //     if(inputElements[i].checked){
    //         checkedValue = inputElements[i].value;
    //         for (let u = 0; u < subjects[o].parties.length; u++) {
    //             if (subjects[o].parties[u].name == checkedValue) {
    //                 console.log(u + " party: ", subjects[o].parties[u].name);
    //                 if (Choices[i] == subjects[i].parties[u].position) {
    //                     test++
    //                     console.log(test);
    //                 }
    //                 //console.log("test");
    //             }
    //         }
    //         //console.log(checkedValue);
    //     }
    // }
    // for (let u = 0; u < subjects[o].parties.length; u++) {
    //     if (subjects[o].parties[u].name == "PVV") {
    //         //console.log(u + " party: ", subjects[o].parties[u].name);
    //     }
    // }
}

function SaveChosenParty() {
    Party = [];
    var inputElements = document.getElementsByClassName('partyCheckbox');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            Party.push(checkedValue);
        }
    }
    //Party.push(choice);
    console.log(Party);
    alert("test")
}

function NextStatement(choice) {
    if (o < 29) {
        o++
        Choices.push(choice);
        console.log(choice)
        EditText();
    }
    else{
        //window.location.href = "StartPage.html";
        Choices.push(choice);
        name();
    }
}

function PreviousStatement() {
    o--
    Choices.pop(); 
    if (o >= 0) {
        EditText();
    }
    else{
        window.location.href = "StartPage.html";
    }
}

function name() {
    // console.log(Choices.length);
    // console.log(subjects.length);
    console.log(Choices)
    // for (let i = 0; i < 30; i++) {
    //     if (Choices[i] == subjects[i].parties[0].position) {
    //         test++
    //     }
    // }
    Precentage = 100 / subjects.length * test;
    //console.log(Precentage + "% mee eens met " + parties[0].name);
    //console.log(Precentage + "% mee eens met " + checkedValue);
    document.getElementById("testDiv").innerHTML = '';
    document.getElementById("PartyDiv").style.display = "block";
    // document.getElementById("PrecentageHolder").innerHTML = Precentage + "% mee eens met " + parties[0].name;
}