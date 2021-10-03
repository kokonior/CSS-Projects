var turn = 1;
var arrX = [0,0,0,0,0,0,0,0,0];
var arrO = [0,0,0,0,0,0,0,0,0];
var count = 0;
var quit = 0;
var check = 0;
var box = $(".container div");
$("button").click(function() {
	restart();
});

box.click(function() {
	if(turn === 1) {
		$(this).text("X");
		$(this).css("color","#125149");
		count = $(this).index();
		// $(this).off("click");
		turn = 2;
		arrX[count] = 1;
		winner();
	}
	else {
		$(this).text("O");
		$(this).css("color","white");
		count = $(this).index();
		// $(this).off("click");
		turn = 1;
		arrO[count] = 1;
		winner();
	}
	check++;
	if(check === 9 && quit === 0) {
		$(".won").text("DRAW");
	}
});

function restart() {
	box.text("");
	turn = 1;
	count = 0;
	quit = 0;
	check = 0;
	arrX = [0,0,0,0,0,0,0,0,0];
	arrO = [0,0,0,0,0,0,0,0,0];
	$(".won").text(" ");
}

function winner() {
	if((arrX[0] && arrX[1] && arrX[2]) || (arrX[3] && arrX[4] && arrX[5]) ||
	   (arrX[6] && arrX[7] && arrX[8]) || (arrX[0] && arrX[3] && arrX[6]) ||
	   (arrX[1] && arrX[4] && arrX[7]) || (arrX[2] && arrX[5] && arrX[8]) ||
	   (arrX[0] && arrX[4] && arrX[8]) || (arrX[2] && arrX[4] && arrX[6])) {
		$(".won").text("WINNER : PLAYER 1");
		// box.off("click");
		quit = 1;
	}

	if((arrO[0] && arrO[1] && arrO[2]) || (arrO[3] && arrO[4] && arrO[5]) ||
	   (arrO[6] && arrO[7] && arrO[8]) || (arrO[0] && arrO[3] && arrO[6]) ||
	   (arrO[1] && arrO[4] && arrO[7]) || (arrO[2] && arrO[5] && arrO[8]) ||
	   (arrO[0] && arrO[4] && arrO[8]) || (arrO[2] && arrO[4] && arrO[6])) {
		$(".won").text("WINNER : PLAYER 2");
		// box.off("click");
		quit = 1;
	}
}
