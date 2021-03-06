$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        // Стрелочки False они выключины (исчезнут, disappeared)
        dots: true,
        // Точки под фото
        adaptiveHeight: true,
        // Адаптивная высота слайда под самый высокий слайд 
        slidesToShow:1, 
        // Количество слайдов которое отображается за раз
        slidesToScroll:1,
        // Количество слайдов которое будет прослистыватся за раз, так же убирает лишние точк под фото
        speed:400,
        // Скорость пролистывания слайдов (Пo умолчанию 300 (ms))
        easig:'linear',
        // анимация пролистывания слайда. По ум liner
        // infinite: false,
        // * // Бесконечный ли слайдер
        initialSlide:3,
        // С какого салайда будет начинать работа
        autoplay:true,
        // Автомотическое пролистывание слайдов
        autoplaySpeed:2000,
        // Скорость авто пролистывания слайдов
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        // Ставим на паузу автопроигрывания когда нажимаем(1) или рядом курсор(2) или при наведении на точки (3)
        draggable: true,
        // Возможность переключения между слайдами тянув мышку на комп
        swipe:true,
        // Возможность переключения между слайдами тянув мышку на pone
        touchThreshold:8,
        // Чем больше цифра, тем меньше услий нужно для пролистывания слайда.
        touchMove:true,
        // Передвижение зажатого пальца на экране (слайдера), вк или выкл
        waitForAnimate:false,
        // Отключает обязательное время ожидания прокрытки анимации при нажатии на кнопки
        // Если бысто нажать пару раз, оно перейднт быстрее к тому слайду, который тебя интересует
        // variableWidth:true
        // * // каждый слайд будет занимать именно ту ширину, которой он отвечает по оригиналу
        // * // если на ширина слайда меньше ширина экрана, приклеивается еще один слайд
        // centerMode:true,
        // * // Главный слайд всегда по центру
        rows:1,
        // Сколько рядов будет в слайде
        slidesPerRow:1,
        // Количество слайдов в ряду
        // vertical:true
        // * Делает слайде вертикальным
        //  * Теперь все слайды перемещаются с верху в низ
        // verticalSwiping:true,
        // * Вертикальный свайп
        asNavFor:".slider1",
        // Связывает два слайдера, при свейпе, нажатии на стрелку...
        // одного слайдера, сразу переключает другой
         // чо бы все работо нужно эту же функцию прописать в другом слайдере js
        // Так же поменять клаа(к слайдеру 1 приписать 2 класс, а ко 2 прип 1 )
            // Так же если сделать 2 одинаковых слайдера, олько поменять у одного из них
        // размер картинок, будет создаваться эффект(fade) одного слайдера
        // appendArrows:$('.cont'),
        // * // перемещает стрелки в выбраный класс
        // Для того что бы менять стили 
        // .cont .slick-arrow.slick-prev
        // .cont это новый обьект в который переместились стрелки
        // с точками тоже самое
        // appendDots:$('.cont'),
        //* // Перемещает точки в выбранный класс
        
    
    });    
    $('.slider1').slick({
        arrows: false,
        // //* Стрелочки False они выключины (исчезнут, disappeared)
        // dots: true,
        // //* Точки под фото
        // adaptiveHeight: true,
        // //* Адаптивная высота слайда под самый высокий слайд 
        // slidesToShow:1, 
        // //* Количество слайдов которое отображается за раз
        // slidesToScroll:1,
        // //* Количество слайдов которое будет прослистыватся за раз, так же убирает лишние точк под фото
        // speed:400,
        // //* Скорость пролистывания слайдов (Пo умолчанию 300 (ms))
        // easig:'linear',
        // //* анимация пролистывания слайда. По ум liner
        // //* infinite: false,
        // //* // Бесконечный ли слайдер
        // initialSlide:3,
        // //* С какого салайда будет начинать работа
        // autoplay:true,
        // //* Автомотическое пролистывание слайдов
        // autoplaySpeed:2000,
        // //* Скорость авто пролистывания слайдов
        // pauseOnFocus:true,
        // pauseOnHover:true,
        // pauseOnDotsHover:true,
        // //* Ставим на паузу автопроигрывания когда нажимаем(1) или рядом курсор(2) или при наведении на точки (3)
        // draggable: true,
        // //* Возможность переключения между слайдами тянув мышку на комп
        // swipe:true,
        // //* Возможность переключения между слайдами тянув мышку на pone
        // touchThreshold:8,
        // //* Чем больше цифра, тем меньше услий нужно для пролистывания слайда.
        // touchMove:true,
        // * // Передвижение зажатого пальца на экране (слайдера), вк или выкл
        // waitForAnimate:false,
        // //* Отключает обязательное время ожидания прокрытки анимации при нажатии на кнопки
        // //* Если бысто нажать пару раз, оно перейднт быстрее к тому слайду, который тебя интересует
        // //* variableWidth:true
        // //* // каждый слайд будет занимать именно ту ширину, которой он отвечает по оригиналу
        // //* // если на ширина слайда меньше ширина экрана, приклеивается еще один слайд
        // //* centerMode:true,
        // //* // Главный слайд всегда по центру
        // rows:1,
        //* // Сколько рядов будет в слайде
        //* slidesPerRow:1,
        //* Количество слайдов в ряду
        //* vertical:true
        //* // Делает слайде вертикальным
        //* // Теперь все слайды перемещаются с верху в низ
        //* verticalSwiping:true,
        //* // Вертикальный свайп
        fade:true,
        // показывает только один слайд
        // Меняет тип перехода между слайдами the BEST
        asNavFor:".slider",
        // Связывает два слайдера, при свейпе, нажатии на стрелку...
        // одного слайдера, сразу переключает другой
        // чо бы все работо нужно эту же функцию прописать в другом слайдере js
        // Так же поменять клаа(к слайдеру 1 приписать 2 класс, а ко 2 прип 1 )
        // Так же если сделать 2 одинаковых слайдера, олько поменять у одного из них
        // размер картинок, будет создаваться эффект(fade) одного слайдера
        responsive:[
            {
                breakpoint: 768,
                // Ширина окна
                settings: {
                    slidesToShow:2, 
                    // Количество слайдов которое отображается за раз
                    fade:false,
                }
            }    , {
                breakpoint: 990,
                // Ширина окна
                settings: {
                    slidesToShow:1.5, 
                    // Количество слайдов которое отображается за раз
                    fade:false,

                }
            }

        ],
        // для медиа запросов
    //    mobileFirst:false,
    // * //    Выводит слайдер если разрешение меньше 768(990)
    // * //    или если больше, при true (might)
  
    });    
// EVENTS
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(currentSlide);
//   В консоль выводит текущий слайд
});
$('.slider').slick('setPosition');
// Как то встряхивает слайдер если тот работает не правильно
// $('.slider').slick('goTo',3);
// // Пролистывает до 4 слайда
// $('.Link_l').click(function(event) {
//     $('.slider').slick('slickNext');
// });
// *Делает управлющими елементами для слайдера на ст для выбраного класса
// *так же можно через ссылку link
// $('.Link_r').click(function(event) {
//     $('.slider').slick('slickPrev');
// });
// // Делает управлющими елементами для слайдера на ст для выбраного класса
// // так же можно через ссылку link
//     $('.Link_play').click(function(event) {
//     $('.slider').slick('slickPlay');
//  });
// //  При клике на обьект запускает автопрокрутку слайдера
// $('.Link_Pause').click(function(event) {
//     $('.slider').slick('slickPause');
// });
// //  При клике на обьект ставит на паузу автопрокрутку слайдера
$('.link_add').click(function(event) {
    $('.slider').slick('slickAdd','<a class="news">Уже добавил</a>');
    // Добавляет текст, html, js code пои кликена обьект
    return false;
    // Что бы ст не пеезагружалась
});
$('.link_remove').click(function(event) {
    $('.slider').slick('slickRemove',0);
    // Удаляет первый слайд
    return false
});

let filter = false;
$('.link_filter').on('click', function(){
if (filter === false) {
    $('.slider').slick('slickFilter', '.filter');
    $(this).text('Вернуть');
    filter = true;
} else { 
        $('.slider').slick('slickUnfilter');
        $(this).text('Убрать');
        filter = false; 
    }
    return false;
});
// При нажатии на ссылку с классом link_filter убирает все обьекты с доп
// классом filter ( class="slider_item filter" ) и меняет текс на выбранный
// при втором нажатии все наоборото



// let s=$('.slider').slick('slickGetOption', 'slidesToShow');
// console.log(s);
// // slidesToShow Значение этого параметра я вывожу в консоль
// $('.slider').slick('slickSetOption', 'slidesToShow',2);
// // изменение выбраного параметра на 2
// // при работе нужно еще присвоить переменную, как  выше (let s=$)



// $('.slider').slick('unslick');
// // Выключить слайдер
});
