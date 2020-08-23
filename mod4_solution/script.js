helloSpeaker.SayHello();
byeSpeaker.SayGoodbye();



(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 10; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();

 if (firstLetter === 'j') {
    byeSpeaker.SayGoodbye(names[i]);
  } else {
    helloSpeaker.SayHello(names[i]);
  }

  }

})();