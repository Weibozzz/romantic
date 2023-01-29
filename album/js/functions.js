/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

    diffTime(new Date('2022-2-9 00:00:00'),new Date());

}
function diffTime(startDate,endDate) {
    var diff=endDate.getTime() - startDate.getTime();//时间差的毫秒数

    //计算出相差天数
    var days=Math.floor(diff/(24*3600*1000));

    //计算出小时数
    var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));

    //计算相差秒数
    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);

    var returnStr = seconds + "秒";
    if(minutes>0) {
        returnStr = minutes + "分" + returnStr;
    }
    if(hours>0) {
        returnStr = hours + "小时" + returnStr;
    }
    if(days>0) {
        returnStr = days + "天" + returnStr;
    }
    var result = " <span class=\"digit\">"
        + days + "</span> 天 <span class=\"digit\">"
        + hours + "</span> 小时 <span class=\"digit\">"
        + minutes + "</span> 分钟 <span class=\"digit\">"
        + seconds + "</span> 秒";
    $("#clock").html(result);
    return returnStr;
}
// function timeElapse(date){
//     var interval = 1000;
//     function ShowCountDown(year,month,day,divname)
//     {
//         var now = new Date();
//         var endDate = new Date(year, month-1, day);
//         var leftTime=endDate.getTime()-now.getTime();
//         var leftsecond = parseInt(leftTime/1000);
// //var day1=parseInt(leftsecond/(24*60*60*6));
//         var day1=Math.floor(leftsecond/(60*60*24));
//         var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
//         var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
//         var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
//         var cc = document.getElementById(divname);
//         cc.innerHTML = "<span class='digit'>"+day1+"</span>"+"天"+
//             "<span class='digit'>"+hour+"</span>"+"小时"+
//             "<span class='digit'>"+minute+"</span>"+"分"+
//             "<span class='digit'>"+second+"</span>"+"秒";
//     }
//     window.setInterval(function(){ShowCountDown(2017,11,25,'clock');}, interval);
// }
// var interval = 1000;
// function ShowCountDown(year,month,day,divname)
// {
//     var now = new Date();
//     var endDate = new Date(year, month-1, day);
//     var leftTime=endDate.getTime()-now.getTime();
//     var leftsecond = parseInt(leftTime/1000);
// //var day1=parseInt(leftsecond/(24*60*60*6));
//     var day1=Math.floor(leftsecond/(60*60*24));
//     var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
//     var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
//     var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
//     var cc = document.getElementById(divname);
//     cc.innerHTML = "脚本之家提示距离"+year+"年"+month+"月"+day+"日还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒";
// }
// window.setInterval(function(){ShowCountDown(2010,4,20,'clock');}, interval);
