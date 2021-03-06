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
        $('.WorkSecDesc').addClass('animate__animated animate__backInRight')
    },{
        offset: '50%'
    });

    $('.Card').waypoint(function(direction){
        $('.CardImage').addClass('animate__animated animate__backInUp')
    },{
        offset: '50%'
    });

    $('.RandomPhotosSection').waypoint(function(direction){
        $('.FoodPhotoSection img').addClass('animate__animated animate__zoomIn')
    },{
        offset: '50%'
    });

    $('.Resources').waypoint(function(direction){
        $('.Resource').addClass('animate__animated animate__backInLeft')
        $('.FrontendLatest').addClass('animate__animated animate__backInRight')
    },{
        offset: '50%'
    });

    $('.Services').waypoint(function(direction){
        $('.ServicesList').addClass('animate__animated animate__zoomIn')
    },{
        offset: '50%'
    })
});