const showSearch = () => {
    $('form.searchBar input').css('display','block');
    console.log('lol');
    $('form.searchBar #showButton').hide();
    $('form.searchBar #searchButton').css('display', 'block');
}

$('#language').hover(function() {
    $('#language .dropdown').children('.dropdown-content').slideToggle(200);
});

$('#menuBar .dropbtn').hover(function () {
    $(this).next('.dropdown-content').stop(true, false, true).slideToggle(200);
});