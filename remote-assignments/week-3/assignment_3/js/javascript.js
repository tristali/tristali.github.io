
$("h1>a").click(function(){
    $(this).text("Have a Good Time!");
});

$(".ham").click(function(){
    $(".ham_box").toggleClass("off");
});

$(".more_item").click(function(){
    $(this).hide();
    $('.item_more').fadeIn();
});

