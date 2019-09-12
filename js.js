/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a background color of your choosing when you click on one of them*/
$(".hello").click(function (e) {
    $(e.target).css("backgroundColor","blue")
});

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it
change it back */
$("h1").mouseenter(function(e){
    $(e.target).css("width","20px");
    $(e.target).css("height","20px")
});

$("h1").mouseleave(function(e){
    $(e.target).css("width","");
    $(e.target).css("height","")
});



// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
$(".hello:first").click(function (e) {
    $(e.target).append(".")
});