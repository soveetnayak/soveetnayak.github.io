/*JS-4*/
$(document).ready
(
function()
{

    if (typeof(Storage) !== "undefined") {
        for (var key in localStorage) {
            try {
                var data = JSON.parse(localStorage.getItem(key));
                if (data.check === "VALID") {
                    document.getElementById('fm-table').innerHTML += '<tr><td>' + key + '</td><td>' + data.skill +
                        '</td><td>' + data.level + '</td></tr>';
                }
            } catch (err) {;
            }
        }
    }
});

var dict = {};
function addData() {
    var name = document.forms.input[0].value;
    var s = document.getElementById("v2");
    if( name == "")
    {
        exit();
    }
    var skill = s.options[s.selectedIndex].text;
    var l = document.getElementById("v3");
    var level = l.options[l.selectedIndex].text;
    var check = "VALID";
    dict[name] = { skill, level, check };
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(dict[name]));
    }
    document.getElementById('fm-table').innerHTML += '<tr><td>' + name + '</td><td>' + skill +
        '</td><td>' + level  + '</td></tr>';
}