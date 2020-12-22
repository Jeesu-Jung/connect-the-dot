// JavaScript Document
const points = [[230, 180], [160, 200], [140, 320], [200, 360], [210, 410], 
[200, 460], [260, 500], [390, 490], [530, 500], [570, 460],
 [560, 410], [570, 360], [620, 320], [620, 220], [540, 201],
 [500, 200], [460, 150], [410, 117], [360, 100], [310, 140]]
var main = function(){
	'use strict';
	console.log("");
	console.log("<<< J A V A S C R I P T   R U N N I N G >>>");
	
	var XcircleCoor = [];
	var YcircleCoor = [];
	var circleRadius = 20;
	var circleNum = 20;
	var x;
	var y;
	var j;
	var currentCircle = 0;
	var nextCircle = 1;
	var currentID = "#"+currentCircle;
	var nextID = "#"+nextCircle;
	var correct;
	var correctCount = 0;
	var incorrectCount = 0;
	
	function updateCurrent(){
		currentCircle = currentCircle + 1;
		currentID = "'#"+currentCircle+"'";
		nextCircle = currentCircle + 1;
		nextID = "'#"+nextCircle+"'";
	}
	
	
	for (var i = 0; i<circleNum; i++){
		console.log("Generating Circle: "+ (i+1));
		x = points[i][0]
		y = points[i][1]
		XcircleCoor.push(x);
		YcircleCoor.push(y);
		var newCircle = "<div style='top:"+YcircleCoor[i]+"px; left:"+XcircleCoor[i]+"px; width:"+(circleRadius*2)+"px; height:"+(circleRadius*2)+"px; line-height:"+(circleRadius*2)+"px;' class='circle' id='"+i+"'>"+(i+1)+"</div>";
		$('.container').append(newCircle);
		
		console.log("newCircle: ", newCircle);
	}
	
	
	$('.circle').mousedown(function() {
		console.log("Clicked "+ $(this).attr('id'));
		console.log("Current circle "+currentCircle);
		
		if ($(this).attr('id') == currentCircle){
			console.log("Current circle");
			correct = 1;
			$(this).css({
				'background-color': '#00AEDC'
			});
			
			$(this).addClass('clicked');
			
			
		}
		else if (($(this).attr('id') == nextCircle)&& correct ===1){
			console.log("Next circle");
			correct = 1;
			$(this).addClass('clicked');
			$(this).css({
				'background-color': '#00AEDC'
			});
			correctCount = correctCount + 1;
			console.log(correctCount);
			console.log("Draw");
			var a1 = circleRadius+YcircleCoor[currentCircle];
			var a2 = circleRadius+XcircleCoor[currentCircle];
			var b1 = circleRadius+YcircleCoor[nextCircle];
			var b2 = circleRadius+XcircleCoor[nextCircle];
			
			var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
			newLine.setAttribute('x1', a2);
			newLine.setAttribute('y1', a1);
			newLine.setAttribute('x2', b2);
			newLine.setAttribute('y2', b1);
			$(".line").append(newLine);
			
			updateCurrent();
			if (correctCount === circleNum -1){
				$('.next').addClass("active");
			}
		}
		
		else{
			console.log("Wrong circle");
			$(this).css({
				'background-color': '#FF4D4D'
			});
			incorrectCount = incorrectCount + 1;
			
		}
	});
	
	$('.circle').mouseup(function() {
		if($(this).hasClass('clicked')){
			$(this).css({
				'background-color': '#00AEDC'
			});
			
		}
		else{
			$(this).css({
				'background-color': '#FFFFFF'
			});
		}
	});
		
};

$(document).ready(main);