$(function(){

	// 主選單鍵盤控制

	// 1.第一層被 keyup 時，第二層選單展開
	$('.nav .dropdown').keyup(function() {
		$(this).addClass('open');
	});
    // 2.第二層選單 last-child focusout 時，它的 ul 關閉
	$('.nav .dropdown .dropdown-menu').find('li:last>a').focusout(function() {
		$(this).parents('.dropdown').removeClass('open');
	});

	// 第二節點靠齊高度
	// 把 a.dropdown-toggle 的高度數值，丟進.dropdown-menu 的top
	var _first = $('#Header .Left .nav>li a');
		_value = _first.outerHeight();
	// alert(_value);

	// $('.dropdown-menu').css({
	// 	top: _value
	// });

	// 左右主選單 點一個秀一個
	$('#Header .navbar-header .pull-right').click(function(){
		$(this).parent().siblings().eq(1).removeClass('in');
	});
	$('#Header .navbar-header .pull-left').click(function(){
		$(this).parent().siblings().eq(0).removeClass('in');
	});

	// 錨點滑動

	// 輔導業務
	$(document).on('click', 'a[href^="#Busniess"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 600);
	});
	// 新聞稿
	$(document).on('click', 'a[href^="#News"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 600);
	});
	// 業務消息
	$(document).on('click', 'a[href^="#BizNews"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1000);
	});
	// 活動訊息
	$(document).on('click', 'a[href^="#ActInfo"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1000);
	});
	// 粉絲專頁
	$(document).on('click', 'a[href^="#Community"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1600);
	});

	/*------------------------------------*/
    //////////分享按鈕 share dropdwon////////
    /*------------------------------------*/
    $('.Community_Btn .share').children('ul').hide();
    $('.Community_Btn .share').prepend('<a href="#" class="shareButton" title="分享">share分享按鈕</a>');
    var _shareButton = $('.shareButton');
    _shareButton.off().click(function(e) {
        $(this).siblings('ul').stop(true, true).slideToggle();
        e.preventDefault();
    });
    _shareButton.keyup(function(event) {
        $(this).siblings('ul').stop(true, true).slideDown();
    });
    $('.Community_Btn .share').find('li:last>a').focusout(function(event) {
        $(this).parent().parent('ul').hide();
    });
    // 點外面關閉share
    $(document).on('touchend click', function(e) {
        var container = $(".Community_Btn .share");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.Community_Btn .share ul').hide();
        }
    });

    // CP頁 slider fancybox
    $('.cppic_slider').slick({
	    dots: true,
	    infinite: false,
	    speed: 500,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    autoplay: false,
	    autoplaySpeed: 1500,
	    // pauseOnHover: true,
	    // pauseOnFocus: true,
	    // focusOnSelect: true,
	    // accessibility: true,
	    // lazyLoad: 'ondemand',
	    // ease: 'ease',
	    responsive: [{
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	            infinite: true,
	            dots: true
	        }
	    }, {
	        breakpoint: 545,
	        settings: {
	            arrows: true,
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    }, {
	        breakpoint: 480,
	        settings: {
	            arrows: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false
	        }
	    }]
	});

	// $(function(){
	// 	// 輔導業務
	// 	$("a[href=#Busniess]").click(function() {
	// 		$("html,body").animate({
	// 			scrollTop:$("#Busniess").offset().top
	// 		}, 600);
	// 	});
	// 	// 新聞稿
	// 	$("a[href=#News]").click(function() {
	// 		$("html,body").animate({
	// 			scrollTop:$("#News").offset().top
	// 		}, 600);
	// 	});
	// 	// 業務消息
	// 	$("a[href=#BizNews]").click(function() {
	// 		$("html,body").animate({
	// 			scrollTop:$("#BizNews").offset().top
	// 		}, 1000);
	// 	});
	// 	// 活動訊息
	// 	$("a[href=#ActInfo]").click(function() {
	// 		$("html,body").animate({
	// 			scrollTop:$("#ActInfo").offset().top
	// 		}, 1000);
	// 	});
	// 	// 粉絲專頁
	// 	$("a[href=#Community]").click(function() {
	// 		$("html,body").animate({
	// 			scrollTop:$("#Community").offset().top
	// 		}, 1600);
	// 	});
	// })

	// Go Top
	$(function(){
		var GoTop_Offset = $('#Btn_GoTop').offset().top;

		$('#Btn_GoTop').hide();

		$(window).scroll(function() {
			if ( $(this).scrollTop() > 300){
				$('#Btn_GoTop').fadeIn(600);
			}else {
				$('#Btn_GoTop').stop().fadeOut(600);
			}
		});
		$('#Btn_GoTop').click(function(){
			$('html,body').animate({scrollTop:0},1200);
			return false;
		});

		$('#Btn_GoTop').keydown(function(e) {
	        $('body').find('a#gotoMainContent').focus();
	        e.preventDefault();
	    });
	});

	//Fatfooter 內容收合
	$(function(){
		$(".FatFooterBtn").click(function() {
			$('#FatFooter>div>nav>ul>li>ul').slideToggle(function() {
				if ($(this).is(':visible')) {
					document.getElementById("FatFooterBtn").value = "收合";
				} else {
					document.getElementById("FatFooterBtn").value = "展開";
				}
			});
			$(this).toggleClass('close');
		});
	});

	// 字級調整
	$(function(){
		$(".FontSmall").click(function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$(".Content_page").css({fontSize:"100%"});
		});
		$(".FontDefault").click(function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$(".Content_page").css({fontSize:"110%"});
	  	});
		$(".FontLarge").click(function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$(".Content_page").css({fontSize:"120%"});
		});
	});

	// .According 展開收合
	$('.btn-switch').click(function(event) {
		/* Act on the event */
		// $(this).parents('.btn_grp').siblings('.box').addClass('act');
		var _this = $(this).parent('').siblings('.box');

		// 如果沒有.act 被點擊時，加入.act
		// 如果有.act 被點擊時，移除.act
		if ( _this.hasClass('act')) {
			_this.removeClass('act');
			$(this).val('展開內容');
		} else {
			_this.addClass('act');
			$(this).val('收合內容');
		}
	}); 

	// 常見問答

	$('.QA').find('a.que').click(function(){
		$('.ans').slideUp(300);
		$(this).next('.ans').stop(true,false).slideDown(300);
	});

	// 無障礙快捷鍵盤組合
	$(document).on('keydown', function(e) {
        // alt+S 查詢
        if (e.altKey && e.keyCode == 83) {
            $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
            $('.Search').find('input[type="text"]').focus();
        }
        // alt+U header
        if (e.altKey && e.keyCode == 85) {
            $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
            $('#Header .accesskey').find('a#accesskeyU').focus();
        }
        // alt+C 主要內容區
        if (e.altKey && e.keyCode == 67) {
            $('html, body').stop(true, true).animate({ scrollTop: $('#MainContent').find('.accesskey').offset().top }, 800, 'easeOutExpo');
            $('#MainContent .accesskey').find('a#accesskeyC').focus();
        }
        // alt+B footer
        // if (e.altKey && e.keyCode == 90) {
        //     $('html, body').stop(true, true).animate({ scrollTop: $('footer').find('.accesskey').offset().top }, 800, 'easeOutExpo');
        //     $('footer').find('.accesskey').focus();
        // }
    });



	// U00頁籤 eason+偉良
	// jQuery(document).ready(function() {
	//     $('.tabs').find('.active').next('.tabContent').fadeIn(); //顯示選到的頁籤的內容。用css設定也可以，本範例中css也有設定（18、19行）
	//     // var tw = $('.tabSet').width(); //取得頁籤區塊的寬度，並存入變數tw中
	//     var tabItemHeight = $('.tabs>h1>a').innerHeight(); //取得頁籤項目含padding高度，並存入變數tabItemHeight中
	//     $('.tabs').find('.tabContent').css('top', tabItemHeight); //找到頁籤內容區塊，設定它的top等於頁籤項目高度
	//     $(window).on('load resize', function() {
	//     	var tw = $('.tabSet').width()*0.98; 
	//         $('.tabSet').each(function() { //各別處理每個頁籤組

	//         	var twSelf = $(this).width();
	//             var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight(); //找到被選到的頁籤內容，取得它含padding的高度，並將高度存到變數tabContentHeight中。
	//             var tabItemLength = $(this).find('h1').length; //取得每個頁籤組中頁籤項目的個數

	//             $(this).height(tabContentHeight + tabItemHeight); //頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
	//             $(this).find('h1>a').width(twSelf / tabItemLength); //頁籤項目的寬度＝頁籤組的寬度／頁籤項目個數 
	//         });
	//     });
	//     $('.tabs>h1>a').focus(tabs); //用鍵盤選到頁籤時執行tabs函式
	//     $('.tabs>h1>a').click(tabs); //用滑鼠選到頁籤時執行tabs函式

	//     function tabs() { //定義tabs函式
	//         $(this).parent('h1').siblings().removeClass('active'); //非選到的頁籤項目的 class 要移除
	//         $(this).parent('h1').addClass('active'); //把選到的頁籤項目加上 class="active"
	//         tabContentHeight = $(this).parent('h1').next('.tabContent').innerHeight(); //取得選到的頁籤內容含padding的高度
	//         $(this).parents('.tabSet').height(tabContentHeight + tabItemHeight); //頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
	//     }
	// });

	// fancy box
	// $(function(){
	// 	/* Button helper. Disable animations, hide close button, change title type and content */
	// 	$('.fancybox-buttons').fancybox({
	// 		openEffect  : 'none',
	// 		closeEffect : 'none',
	// 		prevEffect : 'none',
	// 		nextEffect : 'none',
	// 		closeBtn  : true,
	// 		helpers : {
	// 			title : {
	// 				type : 'inside'
	// 			},
	// 			buttons : {}
	// 		},
	// 		afterLoad : function() {
	// 			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
	// 		}
	// 	});
	// });

})