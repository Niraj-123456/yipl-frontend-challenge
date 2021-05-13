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
    $('.SearchClick').hide();
    $('.Search').click(function(e){
        e.preventDefault();
        // $('MenuItem').hide();
        $('.SearchClick').toggle();
        $('.SearchClick>input').css('transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s;');
    })
})