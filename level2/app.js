// JavaScript Document
const points = [[390, 120], [310, 40], [240, 30], [200, 80], [210, 150], 
[250, 200], [170, 200], [130, 250], [120, 300], [120, 340], 
[70, 380], [150, 420], [200, 400], [210, 430], [170, 450], 
[180, 500], [230, 510], [200, 580], [120, 620], [170, 660], 
[220, 710], [260, 690], [320, 710], [370, 730], [400, 720], 
[380, 700], [460, 680], [570, 650], [610, 580], [580, 560], 
[550, 520], [600, 500], [580, 470], [550, 480], [550, 450], 
[630, 440], [650, 400], [610, 390], [630, 330], [620, 270], 
[530, 230], [560, 160], [550, 80], [500, 40], [410, 60]]
var main = function(){
	'use strict';
	console.log("");
	console.log("");
	console.log("");
	console.log("");
	console.log("<<< J A V A S C R I P T   R U N N I N G >>>");
	
	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	var XcircleCoor = [];
	var YcircleCoor = [];
	var circleRadius = 15;
	var circleNum = 45;
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
		x = points[i][0]//getRandomInt(0, 800-(circleRadius*2));
		y = points[i][1]//getRandomInt(0, 800-(circleRadius*2));
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
				'background-color': '#E75A9E'
			});
			
			$(this).addClass('clicked');
			
			
		}
		else if (($(this).attr('id') == nextCircle)&& correct ===1){
			console.log("Next circle");
			correct = 1;
			$(this).addClass('clicked');
			$(this).css({
				'background-color': '#E75A9E'
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
				'background-color': '#E75A9E'
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