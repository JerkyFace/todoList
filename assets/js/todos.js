$('li').on('click', function () {
    if ($(this).css('color') === "rgba(22, 22, 22, 0.7)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        })
    }
    else {
        $(this).css({
            color: "rgba(22,22,22, 0.7)",
            textDecoration: "line-through"
        })
    }
})