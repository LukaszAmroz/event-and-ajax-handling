(function(){
	"use strict";

	function eventHandling(element, event, callback, useCapture){
		element.addEventListener(event, callback, useCapture);
	}

	function ajaxHandling(url, callback){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					var response = JSON.parse(xhr.responseText);
					callback(response);
				}
			}
		}
		xhr.send();
	}

	var btn = document.querySelector(".btn");

	function ajaxHandlingCallback(response){
		var content = document.getElementById("content");
		content.innerText = response.person.name;
	}

	eventHandling(btn, "click", ajaxHandling.bind(this, "data.json", ajaxHandlingCallback));

}());
