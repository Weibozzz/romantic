$(document).ready(function() {

    $('#fullpage').fullpage({
        scrollingSpeed: 400,
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','page8','page9'],
        menu: '#menuPage',


        afterRender: function(){
            $(document).snowfall('clear');
            $(document).snowfall({
                image: "image/huaban.png",
                flakeCount:30,
                minSize: 5,
                maxSize: 22
            });
        },

        afterLoad: function(anchorLink, index){
            if(index == 0){

            }
            if(index == 1){
                $(document).snowfall('clear');
                $(document).snowfall({
                    image: "image/huaban.png",
                    flakeCount:30,
                    minSize: 5,
                    maxSize: 22
                });
            }
            if(index == 2){
                $(document).snowfall('clear');
                $(document).snowfall({
                    image: "image/flake.png",
                    flakeCount: 30,
                    minSize: 5,
                    maxSize: 22
                });

                $('.sec2').find('div.words').delay(500).animate({
                    left: '1000px'
                }, 1500);
            }
            if(index == 3){

                $(".tagline").letterfx({"fx":"fall","words":true,"timing":3000});
            }

            if(index == 4){		// 心形
                $(document).snowfall('clear');
                $(document).snowfall({
                    image: "image/huaban.png",
                    flakeCount:30,
                    minSize: 5,
                    maxSize: 22
                });
            }
            if(index==5){
                $(".fixSec5").show().addClass('showToggle3');
                $(".fixBtn").hide();
                setTimeout(function () {
                    $(".fixBtn").show();
                },20000)
            }
            if(index==8){
                $('.sec5').find('div.words').delay(500).animate({
                    left: '1000px'
                }, 1500);
                $("#sec8Iframe").attr('src','http://www.liuweibo.cn/rect-detail-and-108/108.html')
            }
        }
    });
});