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
/*Fun*/
    $(".move").hover(function(){
        if (!$(this).hasClass('animated')) {
            $(this).dequeue().stop().animate({ width: "500px" });
        }
    }, function() {
        $(this).addClass('animated').animate({ width: "300px" }, "normal", "linear", function() {
            $(this).removeClass('animated').dequeue();
        });
    });
});

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
