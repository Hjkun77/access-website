// var deadline = new Date("Jan 6, 2019 11:59:59").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
//
// if (seconds < 10) {
//   seconds = "0" + seconds;
// }
//
// if (minutes < 10) {
//   minutes = "0" + minutes;
// }
//
// if (hours < 10) {
//   hours = "0" + hours;
// }
//
// if (days < 10) {
//   days = "0" + days;
// }
//
// const daysEl = document.getElementById("days")
// const hoursEl = document.getElementById("hours")
// const minsEl = document.getElementById("minutes")
// const secondsEl = document.getElementById('seconds')
//
//
// daysEl && (daysEl.innerHTML = days)
// hoursEl && (hoursEl.innerHTML = hours)
// minsEl && (minsEl.innerHTML = minutes)
// secondsEl && (secondsEl.innerHTML = seconds)
//
// if (t < 0) {
//         clearInterval(x);
//         document.getElementById("days").innerHTML = "00";
//         document.getElementById("hours").innerHTML = "00";
//         document.getElementById("minutes").innerHTML = "00";
//         document.getElementById("seconds").innerHTML = "00";
//     }
// }, 1000);
