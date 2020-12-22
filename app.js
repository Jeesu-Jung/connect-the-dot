// JavaScript Document
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
	var circleRadius = 30;
	var circleNum = 10;
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
		var valid = 0;
			while (valid <1 ){
				valid = 1;
				x = getRandomInt(0, 700-(circleRadius*2));
				y = getRandomInt(0, 500-(circleRadius*2));
				
				/*for (var z = 0; z<XcircleCoor.length; z++){
					console.log("Array Contents: "+ 	XcircleCoor[z]);
				}*/
				
				for ( j = 0; j<XcircleCoor.length; j++){
					
					if( XcircleCoor[j] <= x && x <= XcircleCoor[j] + (circleRadius*2) && YcircleCoor[j] <= y && y <= YcircleCoor[j] + (circleRadius*2)){
						console.log("Top left");
						valid = -1;
					}
					
					else if( XcircleCoor[j] <= x + (circleRadius*2) && x + (circleRadius*2) <= XcircleCoor[j] + (circleRadius*2) && YcircleCoor[j] <= y && y <= YcircleCoor[j] + (circleRadius*2)){
						console.log("Top right");
						valid = -1;
					}
					
					else if( XcircleCoor[j] <= x && x <= XcircleCoor[j] + (circleRadius*2) && YcircleCoor[j] <= y + (circleRadius*2) && y + (circleRadius*2) <= YcircleCoor[j] + (circleRadius*2)){
						console.log("Bottom left");
						valid = -1;
					}
					
					else if( XcircleCoor[j] <= x + (circleRadius*2) && x + (circleRadius*2) <= XcircleCoor[j] + (circleRadius*2) && YcircleCoor[j] <= y + (circleRadius*2) && y + (circleRadius*2) <= YcircleCoor[j] + (circleRadius*2)){
						console.log("Bottom right");
						valid = -1;
					}
					
				}
			}
			
			console.log("Valid: "+ valid);
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
				'background-color': '#30AC59'
			});
			
			$(this).addClass('clicked');
			
			
		}
		else if (($(this).attr('id') == nextCircle)&& correct ===1){
			console.log("Next circle");
			correct = 1;
			$(this).addClass('clicked');
			$(this).css({
				'background-color': '#30AC59'
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
				'background-color': '#30AC59'
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