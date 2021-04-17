var wordArray = ["standard", "responsive", "parallax", "flex", "company", "what U want"];
var word = wordArray[0];
var count = wordArray.length; //단어 갯수 6
var i = word.length, max = word.length; //글자 수
var fase = 1; //글자 쓰고 지울 경우의 변수 0: 글 쓰기 / 1: 글 지우기
var tick = 2000; // 글자 쓴/쓴 후 텀 시간 변수
var j = 0; //배열을 순서대로 골라내기 위한 변수

var myFunction = function(){
	clearInterval(interval); //interval=myFunction tick을 끄다
	stopBarAnimation(); //바 깜빡임 멈추기
	tick = 125; // 글자 쓰고 지우는 시간
	if(fase == 0){
        //글자 쓰기
		i++;
		if(i==max){ //글자를 다 쓰고 나면
			barAnimation(300); //바 애니메이션 .3 실행
			tick = 2000; //글자 쓰고 난 후 텀 시간
			fase = 1; //글 지우는 경우로 변환
		}
	}else{
        //글자 지우기
		i--;
		if(i==0){ //글자를 다 지우고 나면
			barAnimation(300); //바 애니메이션 .3 실행
			tick = 1500; //글자 쓰기 전 텀
			j++;
			word = wordArray[j%count];
            // j =0; count= 단어갯수 => 0에서 1을 나눈 나머지 = 1;
            //0에서 2를 나눈 나머지 = 2; 
            //0에서 3을 나눈 나머지 = 3; ..... 배열 순서대로 실행시키기
			max = word.length; //글자 수 
			fase = 0; //글 쓰는 경우로 변환
		}
	}
	$(".typing").text(word.substring(0,i));  //.typing안의 글 내용을 변경 //.substring 변경할 부분의 처음(0)과 끝(i)
    interval = setInterval(myFunction, tick);
}
var interval = setInterval(myFunction, tick);
var barInterval;

function stopBarAnimation(){ //타이핑 동안 깜빡임 없애기
	clearInterval(barInterval);
	$(".typing").css("border-right", "3px solid #fff");
}

function barAnimation(tick, counter = 0){
    barInterval = setInterval(function(){
        if(counter%2){ 
            //바 없어보이기
            $(".typing").css("border-right", "3px solid transparent");
        }else{ 
            //바 나타나기
            $(".typing").css("border-right", "3px solid #fff");
        }
        counter++;
    }, tick); //tick=2000;
}

barAnimation(300);