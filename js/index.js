
let fullName = prompt("Lütfen isminizi yazın");
document.querySelector("#myName").innerHTML = `${fullName}`
 
let showTime = function(){
  let date = new Date();
  let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = days[date.getDay()];
  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let fullTime = hours + ":" + minutes + ":" + seconds + " " + day;
  
  document.querySelector("#myClock").innerHTML = `${fullTime}`
  setTimeout(showTime, 1000);
}
  
showTime();
