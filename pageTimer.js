console.log(window.localStorage);

let startTime;

if(window.localStorage.timeSpent > 0){
  startTime = new Date().getTime() - window.localStorage.timeSpent;
}else{
  startTime = new Date().getTime();
}

let timerEl = document.createElement("p");
timerEl.innerHTML = "<p style='font-size:10px;margin:0;'>Time on" + getDomain() + "</p>00:00:00";
timerEl.id = "timerEl";
timerEl.style.position = "fixed";
timerEl.style.bottom = "7px";
timerEl.style.right = "10px";
timerEl.style.width = "150px";
timerEl.style.background = "#212121";
timerEl.style.color = "#eee";
timerEl.style.padding = "10px";
timerEl.style.margin = "0px";
timerEl.style.textAlign = "center";
timerEl.style.fontSize = "15px";
document.documentElement.appendChild(timerEl);



function checkTime(){
  var currentTime = Math.floor((new Date().getTime()-startTime)/1000);

  window.localStorage.timeSpent = (new Date().getTime()-startTime);
  console.log(window.localStorage.timeSpent);

  var h = addZero(Math.floor(currentTime / 3600));
  currentTime = currentTime % 3600;
  var m = addZero(Math.floor(currentTime / 60));
  currentTime = currentTime % 60;
  var s = addZero(currentTime);

  document.getElementById('timerEl').innerHTML = "<p style='font-size:10px;margin:5px;'>Time on <i>" + getDomain() + "</i></p>" + h + ":" + m + ":" + s;


}

function getDomain(){
  var d = window.location.href;
  var domain = (new URL(d)).hostname;

  return domain;
}

function addZero(s){

  s = s.toString();

  if(s.length == 1){
    s = "0" + s;
  }
  return s;
}

setInterval(function(){
  checkTime();
},100);
