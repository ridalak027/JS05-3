/* function 1 (version 1)*/
var N = "N";

function verf(numb1) {
  if (isNaN(numb1)) {
    document.getElementById("stat").innerHTML = `${numb1} :is not a number`;
  } else {
    document.getElementById("stat").innerHTML = `${numb1} :yes it is a number`;
  }
}

verf(N);

/* function 2 */

var N1 = 1;
var N2 = 3;

function verf_two(numb1, numb2) {
  if (N1 > N2) {
    document.getElementById("grat").innerHTML = `the great number is: ${N1}`;
  } else if (N2 > N1) {
    document.getElementById("grat").innerHTML = `the great number is: ${N2}`;
  } else {
    document.getElementById("grat").innerHTML = `the two numbers are equales`;
  }
}

verf_two(N1, N2);

/* function 3 */

const TAB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var txt = "";

function print_even(T) {
  for (var i = 0; i < 10; i++) {
    if (TAB[i] % 2 == 0) {
      txt += TAB[i] + " ";
    }
  }
  document.getElementById(
    "tab"
  ).innerHTML = `the evens numbers in the table are: ${txt}`;
}

print_even(TAB);

/* function 4 */

function print_date() {
  const datt = new Date();
  var days = datt.getDate();
  var month = datt.getMonth() + 1;
  var year = datt.getFullYear();
  var day = datt.getDay();

  if (day == 0) {
    day = "Sunday";
  } else if (day == 1) {
    day = "Monday";
  } else if (day == 2) {
    day = "Tuesday";
  } else if (day == 3) {
    day = "Wednesday";
  } else if (day == 4) {
    day = "Thursday";
  } else if (day == 5) {
    day = "Friday";
  } else {
    day = Saturday;
  }

  document.getElementById(
    "date"
  ).innerHTML = `To day is: ${day},${days}/${month}/${year}`;
}

print_date();

/* function 2 (version 2) */

function verf_v2() {
  var x = document.getElementById("inputtxt").value;
  if (isNaN(x)) {
    document.getElementById("out").innerHTML = `${x} :is not a number`;
  } else {
    document.getElementById("out").innerHTML = `${x} :yes it is a number`;
  }
}

/*  */
