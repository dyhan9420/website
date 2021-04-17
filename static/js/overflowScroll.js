/*let diff = 0;
let ticking = false;

const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';

const list = document.querySelector('.skillList');

function doSomething(diff) {
  list.scrollLeft += (diff);
}

list.addEventListener('wheel', function(e) {
  diff = e.deltaY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(diff);
      ticking = false;
    });
  }
  ticking = true;
}, { passive: true });*/
/*$(".skillList").on('mousewheel',function(e){

		var wheelDelta = e.originalEvent.wheelDelta;

		if(wheelDelta > 0){

			console.log("up");

			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

		}else{

		console.log("down");

			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

		}

});*/

$(function(){
    var d = false;
    $(".skills").on('mousewheel DOMMouseScroll', function(e) { 
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        };

        var a = parseInt($(".skillList").css("left"));
        var b = $(".skillList li").width();
        var c = $('.skillList li').length;

        if(delta < 0 && a > (c-1)*-b && !d){
            // 마우스 휠을 아래로 내렸을 경우
            d = true;
            $('.skillList').stop().animate({
                "left": a += -b
            },400,function(){
                d = false;
            });
        };
        if(delta > 0 && a < 0 && !d){
            // 마우스 휠을 위로 올렸을 경우
            d = true;
            $('.skillList').stop().animate({
                "left": a += b
            },400,function(){
                d = false;
            });
        };
        return false; //body의 scroll을 막는 용
    });
});



