function digitalClock() {
  //Current Date
  let date = new Date();
  //Weeks Names In Array
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //Months Name In Full Year In Array
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Hour show on desktop
  let hour = date.getHours();
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  // Display the Hours
  document.getElementById("hrs").innerHTML =
    hour.toString().padStart(2, "0") + ":";
  // Display the Minutes
  document.getElementById("min").innerHTML =
    date.getMinutes().toString().padStart(2, "0") + ":";
  //  Display the Seconds
  document.getElementById("sec").innerHTML = date
    .getSeconds()
    .toString()
    .padStart(2, "0");
  // Display the AM/PM
  document.getElementById("AmPm").innerHTML = ampm;

  //Days show on desktop
  let day = document.getElementById("day");
  if (day) {
    day.innerHTML = `${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, Year ${date.getFullYear()}`;
  }
}

//Call the Function
digitalClock();
setInterval(digitalClock, 1000);
