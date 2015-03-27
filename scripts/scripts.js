$(function() {

$(".hoverpart").mouseenter(function() {
    var show = '#' + $(this).attr("show");
    $(show).fadeIn("fast");
})

$(".hoverpart").mouseleave(function() {
    var show = '#' + $(this).attr("show");
    $(show).fadeOut("fast");
})

});