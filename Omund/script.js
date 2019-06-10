var url_string = window.location.href;
var url = new URL(url_string);

var text = url.searchParams.get("text");
//alert(text);


//-----------------arrays---------------------------------

const hello = [
    'Hello!',
    'Hi!',
    'Hey There!',
    'Hey!',
    'Hi There!'
];

const bye = [
    'See you later!',
    'Bye!',
    'By',
    'By by.',
    'See you later!',
    'Bye!',
    'By',
    'By by.',
    'See ya',
    'Ill see you by and by...'
];

const jokeQ = [
    'Two web servers walked into a bar. I forget the rest.',
    'Why did the chicken cross the road?',
    'What is brown and sticky?',
    "Did you hear about the mathematician who's afraid of <br/>negative numbers?",
    'Helvetica and Times New Roman walk into a bar. "Get out of here!"<br/> shouts the bartender. "We do not serve your type."'
];


var jokeRepeats = [
    1,
    2,
    3,
    4,
    5
];

//-----------------arrays---------------------------------



function start() {



var reply = "";
document.getElementById('text_monitor').innerHTML = text;

var current_person;
var default_person = "Me:"
document.getElementById('current_person').innerHTML = default_person;


var a;
var b;
var c;
setTimeout(function () {
  command();
}, 1000);


}

function command() {




  function randA(array) {
     return array[Math.floor(Math.random() * array.length)];
  }

  function ramA(array) {
    var n = Math.floor(Math.random() * array.length);
    if (n of ) {

    } else {

    }
    //reply(randA(jokeQ));
  }




  if (text.includes("hi") == true || text.includes("Hi") == true || text.includes("hello") == true|| text.includes("Hello") == true || text.includes("sup") == true || text.includes("hey") == true) {
    reply(randA(hello));
  } else {

    if (text.includes("by") == true || text.includes("By") == true || text.includes("Bye") == true|| text.includes("bye") == true || (text.includes("see you") == true && text.includes("later") == true)) {
      reply(randA(bye));
    } else {

      if (text.includes("joke") == true || text.includes("Joke") == true) {
        ramA(jokeQ);
      } else {
        reply("IDK?");

    }}}













}

function reply(reply) {
  document.getElementById('reply_monitor').innerHTML = reply;
}
