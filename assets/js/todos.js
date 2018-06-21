//Check off a list item
$('ul').on('click', 'li', function () {
    $(this).toggleClass('li-clicked')
})

//remove li when sign is clicked
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(400, function () {
        $(this).remove()
    })
})

//listen for "enter" keypress. add new lis
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        let text = $(this).val()
        //add new li
        if (text != "") {
            $('ul').append(`<li><span>o</span> &nbsp; ${text} </li>`)
            $(this).val("")
        }
    }
})

//remove checked-off items
$('#remove-all').on('click', function () {
    console.log("btn clicked")
    $('.li-clicked').fadeOut(500, function () {
        $(this).remove()
    })
})