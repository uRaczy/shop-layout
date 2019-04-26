const showSearch = () => {
    $('form.searchBar input').css('display','block');
    console.log('lol');
    $('form.searchBar #showButton').hide();
    $('form.searchBar #searchButton').css('display', 'block');
}

$('.dropdown').hover(function () {
    $(this).children('.dropdown-content').stop(true, false, true).slideToggle(200);
});