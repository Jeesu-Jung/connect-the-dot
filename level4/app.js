// JavaScript Document
const points = [[250, 200], [230, 195], [210, 193], [175, 195], [165, 220], 
[160, 250], [165, 290], [180, 330], [215, 370], [220, 400], 
[195, 415], [165, 415], [165, 430], [175, 450], [200, 460], 
[185, 470], [200, 490], [230, 495], [250, 505], [240, 520], 
[225, 545], [215, 580], [208, 627], [210, 660], [225, 690], 
[250, 710], [270, 720], [290, 730], [300, 740], [320, 765], 
[350, 760], [345, 740], [360, 725], [395, 715], [435, 725], 
[450, 740], [450, 760], [485, 755], [490, 740], [505, 735], 
[513, 725], [540, 713], [565, 690], [580, 670], [595, 660], 
[610, 610], [635, 575], [620, 550], [584, 535], [555, 525], 
[545, 505], [565, 495], [593, 485], [605, 470], [595, 460], 
[615, 445], [625, 430], [625, 415], [600, 415], [575, 400], 
[575, 370], [600, 340], [620, 300], [625, 235], [615, 195], 
[580, 195], [555, 200], [535, 205], [525, 195], [515, 185], 
[495, 178], [490, 165], [470, 150], [450, 150], [435, 155], 
[420, 145], [400, 135], [370, 140], [355, 150], [333, 150], 
[317, 155], [300, 170], [290, 183], [275, 180], [260, 190]]

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
	var circleRadius = 5;
	var circleNum = 85;
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
				'background-color': '#F8E842'
			});
			
			$(this).addClass('clicked');
			
			
		}
		else if (($(this).attr('id') == nextCircle)&& correct ===1){
			console.log("Next circle");
			correct = 1;
			$(this).addClass('clicked');
			$(this).css({
				'background-color': '#F8E842'
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
				'background-color': '#F8E842'
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