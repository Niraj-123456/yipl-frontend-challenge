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

$('.Search').click(function(e){
    e.preventDefault();
    $('.Link').hide();
    $('.SearchClick').addClass('Show');
})

// $(document).ready(function(){
//     $('.SearchClick').hide();
// })