$('#submitBtn').on('click', function(e){
    $('ul').append(`<li>${$('#title').val()}   ${$('#rating').val()}</li>    `);
    $('li').last().append('<button type="button">Remove</button>');
    $('button').on('click', function(e) {
        e.target.parentNode.remove();
    })
    e.preventDefault();
})