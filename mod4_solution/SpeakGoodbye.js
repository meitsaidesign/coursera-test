(function (window) {

	var byeSpeaker = {};
	

	
	byeSpeaker.name = ["John", "Jen", "Jason", "Jim"];
	var speakWord = "Good Bye";

	byeSpeaker.SayGoodbye = function () {
	for (var i = 0; i < byeSpeaker.name.length; i++) {
  console.log(speakWord + " " + byeSpeaker.name[i]);
}


}

window.byeSpeaker = byeSpeaker;

})(window);