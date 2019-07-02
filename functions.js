console.log("im working");

$(function() {
  $(".dropdown-menu a").click(function() {
    $(".btn:first-child")
      .text($(this).text() + " ")
      .append("</h6>")
      .prepend(
        '<img style="display:inline-block; height: 25px" id="my_image" src="img/' +
          $(this).text() +
          '.png" /> ' +
          "<h6 style='display:inline-block; font-size: 1em; font-weight: 700;'>"
      );
    $(".btn:first-child").val($(this).text());
  });
});

//CLOCK

var countDownDate = new Date("Jan 1, 2020 15:37:25").getTime();
var myVarSeconds = setInterval(function() {
  myTimerD();
}, 1000);
function myTimerD() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("clockS").innerHTML = seconds;
}

var myVarMinutes = setInterval(function() {
  myTimerM();
}, 1000);
function myTimerM() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("clockM").innerHTML = minutes;
}

var myVarHours = setInterval(function() {
  myTimer();
}, 1000);
function myTimer() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("clockH").innerHTML = hours;
}

var myVarDays = setInterval(function() {
  myTimerS();
}, 1000);
function myTimerS() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("clock").innerHTML = days;
}

function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

/* For displaying the thing */

function buyFunction() {
  var grabNum = document.getElementById("amountId").value;
  document.getElementById("popUpId").style.display = "block";
  document.getElementById("popUpId").style.zIndex = "5";
  document.getElementById("numChange").innerHTML = grabNum;
  document.getElementById("overLayId").style.display = "block";
}

function callPopUpOff() {
  document.getElementById("popUpId").style.display = "none";
  document.getElementById("overLayId").style.display = "none";
}
