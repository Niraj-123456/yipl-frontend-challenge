var date = new Date().getFullYear();
document.getElementById("Date").innerHTML = date;

var current = location.pathname;

$(function(){
    var current = location.pathname;
    $('.Link').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href') === current) {
            $('.Link').removeClass('active');
            $(this).addClass('active');
        }
    });
});

$(document).ready(function(){
    $('.Search').click(function(e){
        e.preventDefault();
        $('.MenuItem input').toggle();

    });

    $('.WorkSec').waypoint(function(direction){
        $('.WorkSecImg').addClass('animate__animated animate__backInLeft')
    },{
        offset: '50%'
    });
});