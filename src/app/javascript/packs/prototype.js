

var result = false;
$(document).on("click", "#judge_button", function() {
	if(result){
		$('#result').css('visibility','hidden');
		result = false;
	}else{
		$('#result').css('visibility','visible');
		result = true;
	}
});






var judge1 = false;
var judge2 = false;




$(document).on("click", "#input_button", function () {
	var input_message = $("#input_message").val();
	const answer = "だから";
	if(input_message == answer){
		$("#output_message").html("正解です！");
		judge1 = true;
		func3();
		
	} else {
		$("#output_message").html("残念！もう一度やってみよう！");
	}
});







$(function () {
	$("#2").click( function() {
		$("#output_answer").html("正解です！");
		judge2 = true;
		func3();
	});
});

$(function () {
	$("#1").click( function() {
		$("#output_answer").html("残念！他のを選んでみよう！");
	});
});

$(function () {
	$("#3").click( function() {
		$("#output_answer").html("残念！他のを選んでみよう！");
	});
});







function func3() {
	if(judge1 && judge2){
		$("#great_button").html("GREAT！");
	};
}



$(function () {
	$('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
	  $('.nav , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
	})
});



