$(document).ready(function(){
    let currSlide = 1
    function slideImage(){
        if(currSlide < 5){
            $('.slides-container').animate({
                'left' : '-=100%'
            }, 3000)
            currSlide++;
        }
        else{
            $('.slides-container').animate({
                'left' : '0'
            }, 3000)
            currSlide = 1;
        }
    }
    setInterval(slideImage, 3000)
})