$("#index-container").css("display", function() {
    $(this).fadeIn(4000);
});
$("document").ready(function(){
    $("#index-container").click(function(){
        location.href = "instructions.html";
    });
    
    // $("#instructions-container").click(function(){
    //     $("#instructions-text").find(".display-on").prev().css("display", "block")
    // });
});