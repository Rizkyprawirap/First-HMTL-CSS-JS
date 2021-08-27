let $slider = $('.slider');
let $slides = $slider.find('.slides');
let $slide = $slides.find('.slide');

let $totalSlide = $slide.length;
let $width = $slide.width();
let $currSlide = 0;

$slides.css({
    width: ($totalSlide * $width) + 'px'
})

let $speed = 1000;
let $delay = 3000;

setInterval(function(){

    if($currSlide == $totalSlide){
        $currSlide = 0;
        $slides.css({
            marginLeft : 0
        })
    }   
    $slides.animate({
        'margin-left' : -($currSlide * $width)
    }, $speed)
    $currSlide++;

}, $delay)
