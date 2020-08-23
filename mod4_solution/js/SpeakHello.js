(function (window) {

	var helloSpeaker = {};	
	helloSpeaker.name = ["Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura",];
	var speakWord = "Hello ";
	helloSpeaker.SayHello = function () {
	for (var i = 0; i < helloSpeaker.name.length; i++) {
  console.log(speakWord + " " + helloSpeaker.name[i]);
}

	
}
	window.helloSpeaker = helloSpeaker;
})(window);