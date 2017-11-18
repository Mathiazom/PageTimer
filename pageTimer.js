let startTime;

// GET STARTTIME FROM LOCALSTORAGE (IF AVAILABLE)
if(window.localStorage.timeSpent > 0){
  startTime = new Date().getTime() - window.localStorage.timeSpent;
}else{
  startTime = new Date().getTime();
}

// TIMER HTML ELEMENT
let timerEl = document.createElement("p");
timerEl.id = "timerEl";
timerEl.style.cssText = "position:fixed;bottom:7px;right:10px;width:150px;background:#212121;color:#eee;padding:10px;margin:0px;text-align:center;font-size:15px;font-family:Helvetica,sans-serif;"
document.documentElement.appendChild(timerEl);


function checkTime(){
  // GET TIME SPENT ON WEBSITE
  var currentTime = (new Date().getTime()-startTime);
  
  // STORE IN LOCALSTORAGE
  window.localStorage.timeSpent = currentTime;

  // CONVERT TO MILLIS
  currentTime = Math.floor(currentTime/1000);

  // GET HOURS, MINUTES AND SECONDS (WITH ZEROS)
  var h = addZero(Math.floor(currentTime / 3600));
  currentTime %= 3600;
  var m = addZero(Math.floor(currentTime / 60));
  currentTime %= 60;
  var s = addZero(currentTime);

  // PUSH RESULT TO TIMER HTML ELEMENT
  document.getElementById('timerEl').innerHTML = "<p style='font-size:10px;margin:5px;'>Time on <i>" + getDomain() + "</i></p>" + h + ":" + m + ":" + s;
}

// GET CURRENT DOMAIN (www.domain.tld)
function getDomain(){
  var d = window.location.href;
  var domain = (new URL(d)).hostname;

  return domain;
}

// ADD EXTRA ZERO IF NEEDED (2:5:23 --> 02:05:23)
function addZero(s){

  s = s.toString();

  if(s.length == 1){
    s = "0" + s;
  }
  return s;
}

// REFRESH TIME SPENT
setInterval(function(){
  checkTime();
},100);
