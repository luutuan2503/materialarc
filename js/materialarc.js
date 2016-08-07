/*
	Materialarc JavaScript
*/
{
	'use strict';

	//adding animating bar
	var inputGroup = document.querySelectorAll('.input-group');

	if(inputGroup.length > 0){
		for (var i = inputGroup.length - 1; i >= 0; i--) {
			var bar=document.createElement('span');
			bar.classList.add("bar");
			inputGroup[i].appendChild(bar);
		}
	}

	//add full class when input type text or password is full else label will overlape
	
	function checkInput(){
		for (var i = textInput.length - 1; i >= 0; i--) {
			textInput[i].addEventListener("blur", function(){
				if(this.value == ""){
					this.classList.remove('full');
					console.log('full remove()');
				}
				else{
					console.log('full add');
					this.classList.add('full');
				}
			});
		}
	}

	var textInput = document.querySelectorAll('input[type=text]');
	checkInput();
	textInput = document.querySelectorAll('input[type=password]');
	checkInput();


	//add inner and outer span to radio label for custom radio button

	var radioLabel = document.querySelectorAll(".radio-label");

	if(radioLabel.length > 0){
		for (var i = radioLabel.length - 1; i >= 0; i--) {
			var outerCircle = document.createElement('span');
			outerCircle.classList.add('outer-circle');

			var innerCircle = document.createElement('span');
			innerCircle.classList.add('inner-circle');

			outerCircle.appendChild(innerCircle);
			
			radioLabel[i].insertBefore(outerCircle,radioLabel[i].firstChild);
		}
	}
}