var test = 0;
var Precentage = 0;
var o = 0;
var choices = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var partyChoices;
var party;
var checkedValue;
var checkedName;

function EditText() {
    document.getElementById('pro').className = 'btn btn-primary';
    document.getElementById('none').className = 'btn btn-primary';
    document.getElementById('contra').className = 'btn btn-primary';
    if (choices[o] !== '') {
        document.getElementById(choices[o]).className = 'btn btn-success';
    }

    document.getElementById('Title').innerHTML = o+1 + '. ' + subjects[o].title;
    document.getElementById('Statement').innerHTML = subjects[o].statement;
}

function GetChosenParty() {
    var inputElements = document.getElementsByClassName('partyCheckbox');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            checkedName = inputElements[i].name;
            console.log(checkedName , ':' , checkedValue);
            console.log('---test---');
            for (let a = 0; a < 30; a++) {
                console.log(a);
                for (let b = 0; b < subjects[a].parties.length; b++) {
                    if (subjects[a].parties[b].name === checkedValue) {
                        console.log(choices[a] + ':' + subjects[a].parties[b].position)
                            if (choices[a] == subjects[a].parties[b].position) {
                                test++
                            }
                    }
                }
            }
            Precentage = 100 / subjects.length * test;
            console.log(Precentage + '% mee eens met ' + checkedValue);
            alert(Precentage + '% mee eens met ' + checkedValue);
            Precentage = 0;
            test = 0;
        }
    }
}

function SaveChosenParty () {
    party = [];
    var inputElements = document.getElementsByClassName('partyCheckbox');
    for(var i = 0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            party.push(checkedValue);
        }
    }
    console.log(party);
    alert('test')
}

function NextStatement(choice) {
    if (o < 29) {
        choices[o] = choice;
        console.log(choice);
        o++
        EditText();
    }else{
        choices[o] = choice;
        name();
    }
}

function PreviousStatement() {
    o--;
    if (o >= 0) {
        EditText();
    }else{
        window.location.href = 'StartPage.html';
    }
}

function name() {
    var partiesResults = [];
    console.log(choices);
    console.log(subjects.length);

    for (let i = 0; i < parties.length -1; i++) {
        console.log('---'+ parties[i].name +'---');
        for (let a = 0; a < 30; a++) {
            for (let b = 0; b < subjects[a].parties.length; b++) {
                if (subjects[a].parties[b].name == parties[i].name) {
                    if (choices[a] == subjects[a].parties[b].position) {
                        test++
                    }
                }
            }
        }
        Precentage = 100 / subjects.length * test;
        Precentage = Math.round(Precentage * 100) / 100;
        console.log(Precentage + '% mee eens met ' + parties[i].name);
        partiesResults.push([Precentage, parties[i].name]);
        document.getElementById('Party' + i).innerHTML = Precentage + '% mee eens met <strong>' + parties[i].name + '</strong>';
        Precentage = 0;
        test = 0;
    }

    getHighestNum(partiesResults);

    document.getElementById('QuestionDiv').innerHTML = '';
    document.getElementById('PartyDiv').style.display = 'block';
}

function getHighestNum(array){
    var highestNum;
    var indexValue;
    var highestIndexNum;
    var highestValues = [];

    for (let i = 0; i < 3; i++) {
        highestNum = 0;
        for (let index = 0; index < array.length; index++) {
            var num = array[index][0];
            if (num >= highestNum) {
                highestNum = num;
                indexValue = array[index];
                highestIndexNum = index;
            }
        }
        array.splice(highestIndexNum,1);
        highestValues.push(indexValue);
    }
    alert('1: ' + highestValues[0][1] + ' / ' + highestValues[0][0] + '% mee eens\n2: ' + highestValues[1][1] + ' / ' + highestValues[1][0] + '% mee eens\n3: ' + highestValues[2][1] + ' / ' + highestValues[2][0] + '% mee eens');
}
