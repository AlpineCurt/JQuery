$(document).ready(function(){
    console.log("Let's get ready to party with JQuery!");
})

$('img').addClass('image-center');
$('p').last().remove();
$('#title').css('font-size', Math.floor(Math.random() * 100) + 'px');
$('ol').append('<li>I added something to the list!</li>');
$('ol').remove();
$('aside').append('<p>Sorry for that list\'s existence.</p>');
//console.log($('input').first().val());
//console.log($('input').index(1));
$('.form-control').on('change', function() {
    const color = `rgb(${$('.form-control').eq(0).val()}, ${$('.form-control').eq(1).val()}, ${$('.form-control').eq(2).val()})`;
    console.log(color);
    $('body').css('background-color', color)
})

$('img').on('click', function(e) {
    this.remove();
})