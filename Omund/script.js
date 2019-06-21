var url_string = window.location.href;
var url = new URL(url_string);

var raw_text = url.searchParams.get("text");
var reply;
var c;
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

var jokeQ = [
    'Two web servers walked into a bar. I forget the rest.',
    'Why did the chicken cross the road?',
    'What is brown and sticky?',
    "Did you hear about the mathematician who's afraid of <br/>negative numbers?",
    'Helvetica and Times New Roman walk into a bar. "Get out of here!"<br/> shouts the bartender. "We do not serve your type."',
    'u',
    'u',
    'u',
    'u',
    'u'
];

const jRepeat = [
    "I've told you all my jokes! There is none left.",
    'I got nothing.',
    'I got no more jokes for you.',
    "You've ran me out of jokes!",
    'There is no more jokes'
];

const ok = [
    'Ok!',
    'Sure!',
    'Done!',
    'ok',
    'ok!',
    'OK'
];

const you_welcome = [
    'You are welcome',
    'Ahh... It was nothing☺️',
    "You're welcome!",
    'My pleasure!',
    'Sure!',
    'Anytime!'
];

const salt_1 = [
    '.',
    '!',
    '.',
    '!',
    '?'
];

const i_dont_know = [
    'I dont know.',
    'Sorry, Dont know.',
    'Dont know.',
    'I dont know.',
    'Yeah... sorry, I dont know.',
    '*blank mind*'
];

const i_doing_good = [
    'Good!',
    'Always good.',
    'Awesome!',
    'Fantastic!',
    'Pretty good',
    'Good!',
    'Good!'
];



//-----------------arrays---------------------------------



function start() {

c ++;

var raw_text;
raw_text = document.getElementById('text').value;

var text;
text = raw_text.toLowerCase();

var utext;
utext = raw_text;

var reply = "hi";
document.getElementById('text_monitor').innerHTML = text;


var current_person;
var default_person = "Me:"
document.getElementById('current_person').innerHTML = default_person;

command(text);

}

//alert(`command, text = ${text}`);
//____________________________________________________________

function randA(array) {
   return array[Math.floor(Math.random() * array.length)];
}



function ramA(array) {

  var i = Math.floor(Math.random() * (array.length / 2));
  var n = array[i];

  return n;

  //var randListN = 0;
}

//____________________________________________________________



function command(text) {




  if ((text.includes("hi") == true && text.indexOf("hi") == 0) || text.includes("hello") == true|| text.includes("Hello") == true || text.includes("sup") == true || text.includes("hey") == true) {
    setTimeout(function () {
      reply(randA(hello));
    }, 1000);

  } else {

    if (text.includes("by") == true || text.includes("bye") == true || (text.includes("see you") == true && text.includes("later") == true)) {
      setTimeout(function () {
        reply(randA(bye));
      }, 1000);

    } else {

      if (text.includes("joke") == true) {
        setTimeout(function () {
          reply(ramA(jokeQ));
        }, 1000);

      } else {
        if (text.includes("roll") == true && (text.includes("dice") == true) || text.includes("die") == true) {
          setTimeout(function () {
            reply(Math.floor(Math.random() * 6));
          }, 1000);

        } else {
          if (((text.includes("thank") == true || text.includes("Thank") == true) && (text.includes("you") == true)) || (text.includes("thanks") == true || text.includes("Thanks"))) {
            setTimeout(function () {
              reply(randA(you_welcome));
            }, 1000);


          } else {
            if ((((text.includes("how") || text.includes("How")) && (text.includes("you"))) || text.includes("doing") || text.includes("going")) || ((text.includes("hows") || text.includes("Hows")) && (text.includes("going") || text.includes("doing")))) {
              setTimeout(function () {
                reply(randA(i_doing_good));
              }, 1000);

            } else {
              if (text.endsWith("?") && text.length > 1) {
                setTimeout(function () {
                  reply(randA(i_dont_know));
                }, 1000);

              } else {
                if (text == "") {
                  setTimeout(function () {
                    reply("");
                  }, 1000);

                } else {
                  if (text.includes("tell me")) {
                    setTimeout(function () {
                      reply(`I cant tell you "${strSearchAft("tell me", text)}" yet, Ira still has to program it.`);
                    }, 1000);

                  } else {
                    if (text.includes("ask me")) {
                      setTimeout(function () {
                        reply(`I cant ask you "${strSearchAft("tell me", text)}" yet, Ira still has to program it.`);
                      }, 1000);

                    } else {
                      setTimeout(function () {
                        reply(text + randA(salt_1));
                      }, 1000);

                  }

                }

              }

            }

          }

        }

      }

    }}}




}






//document.getElementById('text_monitor').innerHTML = text;


function f1() {
  alert('Im doing fine!');
}

function strSearchAft(phrase, txt) {
  //alert(`phrase = ${phrase}, txt = ${txt}`);
  var p = txt.search(phrase);
  //alert(`p = ${p}, p.length = ${phrase.length}`);

  var pPlusL = (p + phrase.length) - 1;
  //alert(`pPlusL = ${pPlusL}`);
  var start = txt.indexOf(" ", pPlusL);
  //alert(`space after p = ${start}`);
  var startP1 = start + 1;
  //alert(`startP1 = ${startP1}`);
  var end = txt.length;
  //alert(`space after value = ${end}`);
  var value = txt.substring(startP1, end);
  //alert(value);
  return value;
}





function reply(reply) {
  document.getElementById('reply_monitor').innerHTML = reply;
}


//reply(randA(hello));
//setTimeout(function () {
//  reply(randA(hello));
//  raw_text = "";
//}, 1000);


/*
function ramA(array) {

  var randListN = 0;
  var i = Math.floor(Math.random() * (array.length / 2));
  var n = array[i];

alert(`i = ${i}, n = ${n}`);
  if ((array[n] + (array.length / 2)) == 'u') {
    randListN ++;
    array[i] = "t";
    reply(array[i]);
  } else {
    randA(array);
  }
  alert(`randListN = ${randListN}, n = ${n}, i = ${i}, array[i] = ${array[i]}`);

  if (randListN => (array.length / 2)) {
    alert(randListN);
    randListN = 0;
    reply(randA("jRepeat"));
  } else {

  }
}
*/
