$(".btn-primary").click(function () {
    if (!$(".form-control").val()) {return false;}
    $(".list").append(`<li class='list-group-item'>${$(".form-control").val()}<button class = 'btn remove'>X</button></li>`)
    $(".form-control").val("")
    $(".remove").click(function () {
        $(this).parent().remove();
    })
})
$(".remove").click(function () {
    $(this).parent().remove();
})