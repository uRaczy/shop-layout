const showSearch = () => {
    $('form.searchBar input').css('display','block');
    console.log('lol');
    $('form.searchBar #showButton').hide();
    $('.language').hide();
    $('form.searchBar #searchButton').css('display', 'block');
}

$('.dropdown').hover(function () {
    if ($(document).width() > 800) {
    $(this).children('.dropdown-content').stop(true, false, true).slideToggle(200);}
});

$('.menuToggle').click(function() {
    $('#menuBar').slideToggle(200);
});

$('.dropdown').click(function () {
    if ($(document).width() < 800) {
    $(this).children('.dropdown-content').stop(true, false, true).fadeToggle(100);}
});

const decreaseQuantity = () => {
    if (document.querySelector(".quantity-number").value > 1) {
        document.querySelector(".quantity-number").value--;
    }
}

const increaseQuantity = () => {
    if (document.querySelector(".quantity-number").value > 0) {
        document.querySelector(".quantity-number").value++;
    }
}