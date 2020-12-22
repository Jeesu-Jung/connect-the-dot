// JavaScript Document
const points = [[380, 150], [300, 160], [230, 180], [230, 210], [260, 220], [260, 250], 
[230, 230], [190, 210], [180, 250], [165, 270], [180, 290],
[165, 310], [180, 340], [200, 360], [210, 420], [180, 410], 
[190, 450], [190, 480], [220, 490], [240, 500], [210, 550], [200, 610],
[200, 650], [230, 690], [260, 715], [280, 740], [290, 760], 
[320, 760], [330, 740], [340, 720], [390, 710], [440, 720],
[450, 740], [470, 760], [490, 760], [500, 740], [520, 720], 
[550, 700], [570, 670], [600, 650], [610, 610], [600, 580], 
[560, 560], [550, 530], [530, 500], [550, 490], [580, 480], 
[580, 460], [590, 420], [560, 420], [560, 360], [590, 340],
[600, 300], [605, 260], [590, 245], [580, 210], [550, 230], 
[520, 240], [510, 220], [550, 205], [550, 180], [510, 170],
[500, 150], [470, 160], [395, 150]]
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
	var circleRadius = 10;
	var circleNum = 65;
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
				'background-color': '#A9CD45'
			});
			
			$(this).addClass('clicked');
			
			
		}
		else if (($(this).attr('id') == nextCircle)&& correct ===1){
			console.log("Next circle");
			correct = 1;
			$(this).addClass('clicked');
			$(this).css({
				'background-color': '#A9CD45'
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
				'background-color': '#A9CD45'
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