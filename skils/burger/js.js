$(document).ready(function() {
 $('.header_burger').click(function(event) {
    //  При гажатии на иконку добавляется класс active,  пр повторном убирается
     $('.header_burger, .header_menu').toggleClass('active');
    //  Убираем скрул при открытом меню
    $('body').toggleClass('lock');
 });
});