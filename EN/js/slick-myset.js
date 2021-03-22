$(function(){
    // 單張輪播
    $('.Singleplay').slick({
        arrows: true,
        slidesToShow: 1,         //一次顯示幾張
        slidesToScroll: 1,       //一次卷幾張
        dots: true,              //顯示圓點
        dotsClass: 'slick-dots', //圓點樣式
        // 自訂左右箭頭
        // next arrow
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        infinite: true,          //無限輪播
        autoplay: false,          //自動輪播
        autoplaySpeed: 3000      //輪播速度
    });

    // Banner輪播
    $('.BannerSlide').slick({
        arrows: true,
        slidesToShow: 1,         //一次顯示幾張
        slidesToScroll: 1,       //一次卷幾張
        dots: false,              //顯示圓點
        dotsClass: 'slick-dots', //圓點樣式
        // 自訂左右箭頭
        // next arrow
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        infinite: true,          //無限輪播
        autoplay: false,          //自動輪播
        autoplaySpeed: 3000      //輪播速度
    });

    // 側邊欄 垂直輪播
    $('.Vertical_slider').slick({
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 1500,

        speed: 1000,
        focusOnSelect: true,
    });

    // 
    $('.Responsive_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});