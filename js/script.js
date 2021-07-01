/*JS-3*/
function insertdata() {
    var c1 = document.getElementById("v1").value;
    var c2 = document.getElementById("v2").value;
    var c3 = document.getElementById("v3").value;
    var table = document.getElementById("fm-table");
    var row = table.insertRow(0 );

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = c1;
    cell2.innerHTML = c2;
    cell3.innerHTML = c3;
}
/*JS-4*/
function imggallery() {
    var url = document.getElementById("gallery").src;
    var image = url.substring(url.lastIndexOf('/')+1);
    if ( image == "1.jpg") 
    {
        document.getElementById("gallery").src = "../img/2.jpg";
    }
    else if ( image == "2.jpg") 
    {
        document.getElementById("gallery").src = "../img/3.jpg";
    }
    else if ( image == "3.jpg") 
    {
        document.getElementById("gallery").src = "../img/4.jpg";
    }
    else if ( image == "4.jpg") 
    {
        document.getElementById("gallery").src = "../img/5.jpg";
    }
    else
    {
        document.getElementById("gallery").src = "../img/1.jpg";
    }    
}
$(document).ready
(
function()
{
/*JS-1*/
    $(document).scroll(function(){
            $(".navbar").addClass('navbar-fixed-top');
    });
/*JS-2 For Highlighting fields in Nav-Bar*/
    $(".li-nav").mouseenter(function(){
        $(this).css("background-color", "grey");
    });
    $(".li-nav").mouseleave(function(){
        $(this).css("background-color", "#222");
    });
});
