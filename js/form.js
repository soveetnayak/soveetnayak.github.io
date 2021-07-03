/*
JS-3 For storing form data in localStorage
*/
$(document).ready
(
function()
{

    if (typeof(Storage) !== "undefined") {
        for (var key in localStorage) {
            try {
                var data = JSON.parse(localStorage.getItem(key));
                if (data.Check === "VALID") {
                    document.getElementById('fm-table').innerHTML += '<tr><td>' + key + '</td><td>' + data.Skill +
                        '</td><td>' + data.Level + '</td></tr>';
                }
            } catch (err) {;
            }
        }
    }
});

var dictarray = {};
function addData() {
    var Name = document.forms.input[0].value;
    if( Name == "")
    {
        exit();
    }
    var svar = document.getElementById("v2");
    var Skill = svar.options[svar.selectedIndex].text;
    var lvar = document.getElementById("v3");
    var Level = lvar.options[lvar.selectedIndex].text;
    var Check = "VALID"
    dictarray[Name] = {Skill, Level, Check};
    
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(Name, JSON.stringify(dictarray[Name]));
    }

}