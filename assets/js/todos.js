//Check off a list item
$('ul').on('click', 'li', function () {
    $(this).toggleClass('li-clicked')
})

//
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(400, function () {
        $(this).remove()
    })
})

//
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        let text = $(this).val()
        //add new li
        $('ul').append(`<li><span>o</span> &nbsp; ${text} </li>`)
        $(this).val("")
    }
})
