
/* calander */
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");
var monthHeader = document.getElementById("monthHeader");
var yearHeader = document.getElementById("yearHeader");
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");
var datePicked = document.getElementById("date-picked");
var months = "";
var days = "";
var monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

months = monthsArr;
days = daysArr;

var tableHeaderMonth = document.getElementById("thead-month");
var dataHead = "<tr>";
var startDay = "";

for (dhead in days) {
  days[dhead] === "Sun" ? startDay = "red-text" : startDay = "";
  dataHead += "<th data-days='" + days[dhead] + "' class='" + startDay + "'>" + days[dhead] + "</th>";
}

dataHead += "</tr>";
// tableHeaderMonth.innerHTML = dataHead;
showCalendar(currentMonth, currentYear);

nextBtn.addEventListener("click", next, false);
previousBtn.addEventListener("click", previous, false);

function yearRange(start, end) {
  var years = "";

  for (var year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }

  return years;
}

var createYear = yearRange(1970, 2050);
selectYear.innerHTML = createYear;

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

/* function test(){ */
function showCalendar(month, year) {
  var firstDay = new Date(year, month).getDay();
  var monthString = monthsArr[month];

  table = document.getElementById("calendar-body");
  table.innerHTML = "";
  monthHeader.innerHTML = monthString.substring(0, 3);
  yearHeader.innerHTML = year;
  selectYear.value = year;
  selectMonth.value = month;

  var date = 1;

  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month-name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span>";
        cell.onclick = function (event) {
          var dates = document.querySelectorAll(".date-picker");
          var currentTarget = event.currentTarget;
          var date = currentTarget.dataset.date;
          var month = currentTarget.dataset.month - 1;
          var year = currentTarget.dataset.year;

          for (var i = 0; i < dates.length; i++) {
            dates[i].classList.remove("selected");
          }

          currentTarget.classList.add("selected");
          datePicked.innerHTML = date + " " + monthsArr[month] + " " + year;


          var tdate = date + " " + monthsArr[month] + " " + year;
          document.getElementById('cdate').innerHTML = tdate;
          localStorage.setItem("date", tdate);
        }

        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.className = "date-picker selected";
        }

        row.appendChild(cell);
        date++;
      }
    }


    table.appendChild(row);
  }
}
/* } */
function get() {
  document.getElementById('cdate').innerHTML = localStorage.getItem('date');
}

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

// Gust

// adult loc
const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");
let ladult = 0;
plus.addEventListener("click", () => {
  ladult++;
  ladult = (ladult < 10) ? "0" + ladult : ladult;
  num.innerText = ladult;
});
minus.addEventListener("click", () => {
  if (ladult > 1) {
    ladult--;
    ladult = (ladult < 10) ? "0" + ladult : ladult;
    num.innerText = ladult;
  }
});

//child loc
const plus1 = document.querySelector(".plus1"),
  minus1 = document.querySelector(".minus1"),
  num1 = document.querySelector(".num1");
let lchild = 0;
plus1.addEventListener("click", () => {
  lchild++;
  lchild = (lchild < 10) ? "0" + lchild : lchild;
  num1.innerText = lchild;
});
minus1.addEventListener("click", () => {
  if (lchild > 1) {
    lchild--;
    lchild = (lchild < 10) ? "0" + lchild : lchild;
    num1.innerText = lchild;
  }
});

//infant 
const plus2 = document.querySelector(".plus2"),
  minus2 = document.querySelector(".minus2"),
  num2 = document.querySelector(".num2");
let infant = 0;
plus2.addEventListener("click", () => {
  infant++;
  infant = (infant < 10) ? "0" + infant : infant;
  num2.innerText = infant;
});
minus2.addEventListener("click", () => {
  if (infant > 1) {
    infant--;
    infant = (infant < 10) ? "0" + infant : infant;
    num2.innerText = infant;
  }
});

//adult forign
const plus3 = document.querySelector(".plus3"),
  minus3 = document.querySelector(".minus3"),
  num3 = document.querySelector(".num3");
let aduf = 0;
plus3.addEventListener("click", () => {
  aduf++;
  aduf = (aduf < 10) ? "0" + aduf : aduf;
  num3.innerText = aduf;
});
minus3.addEventListener("click", () => {
  if (aduf > 1) {
    aduf--;
    aduf = (aduf < 10) ? "0" + aduf : aduf;
    num3.innerText = aduf;
  }
});

//child forign
const plus4 = document.querySelector(".plus4"),
  minus4 = document.querySelector(".minus4"),
  num4 = document.querySelector(".num4");
let childf = 0;
plus4.addEventListener("click", () => {
  childf++;
  childf = (childf < 10) ? "0" + childf : childf;
  num4.innerText = childf;
});
minus4.addEventListener("click", () => {
  if (childf > 1) {
    childf--;
    childf = (childf < 10) ? "0" + childf : childf;
    num4.innerText = childf;
  }
});


let peakhours = 0;
let normalhours = 0;

function updateHours(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  if (checkbox.checked) {
    if (checkboxId === 'ch4' || checkboxId === 'ch5' || checkboxId === 'ch6' || checkboxId === 'ch9' || checkboxId === 'ch10' || checkboxId === 'ch11') {
      peakhours++;
    } else {
      normalhours++;
    }
  } else {
    if (checkboxId === 'ch4' || checkboxId === 'ch5' || checkboxId === 'ch6' || checkboxId === 'ch9' || checkboxId === 'ch10' || checkboxId === 'ch11') {
      peakhours--;
    } else {
      normalhours--;
    }
  }
  var totalhours = peakhours + normalhours;
  var duration = " (Normal Hours:" + normalhours + ",Peak Hours: " + peakhours + " )";
  document.getElementById('ctime').innerHTML = duration;
  document.getElementById('cdura').innerHTML = totalhours;

  const foreignerAdultTotal = (aduf * 10 * normalhours) + (aduf * peakhours * 13);
  const foreignerChildTotal = (childf * 5 * normalhours) + (childf * 8 * peakhours);
  const slAdultTotal = (ladult * 4 * normalhours) + (ladult * 6 * peakhours);
  const slChildTotal = (lchild * 2 * normalhours) + (lchild * 3 * peakhours);

  document.getElementById('fa').innerHTML = foreignerAdultTotal;
  document.getElementById('fc').innerHTML = foreignerChildTotal;
  document.getElementById('la').innerHTML = slAdultTotal;
  document.getElementById('lc').innerHTML = slChildTotal;

  localStorage.setItem("foreignerAdultTotal-storage", foreignerAdultTotal);
  localStorage.setItem("foreignerChildTotal-storage", foreignerChildTotal);
  localStorage.setItem("slAdultTotal-storage", slAdultTotal);
  localStorage.setItem("slChildTotal-storage", slChildTotal);

  localStorage.setItem("tim", duration);
  localStorage.setItem("totalhours", totalhours);

  const totalCharges = foreignerAdultTotal + foreignerChildTotal + slAdultTotal + slChildTotal;
  document.getElementById('ctotal').innerHTML = totalCharges;
  localStorage.setItem("totalsum", totalCharges);

}
function getinfo() {
  document.getElementById('fa').innerHTML = localStorage.getItem("foreignerAdultTotal-storage");
  document.getElementById('fc').innerHTML = localStorage.getItem("foreignerChildTotal-storage");
  document.getElementById('la').innerHTML = localStorage.getItem("slAdultTotal-storage");
  document.getElementById('lc').innerHTML = localStorage.getItem("slChildTotal-storage");
  document.getElementById('ctime').innerHTML = localStorage.getItem("tim");
  document.getElementById('cdura').innerHTML = localStorage.getItem("totalhours");
  document.getElementById('ctotal').innerHTML = localStorage.getItem("totalsum");

}
function calculateCharges() {
  const foreignerAdultTotal = (aduf * 10 * normalhours) + (aduf * peakhours * 13);
  const foreignerChildTotal = (childf * 5 * normalhours) + (childf * 8 * peakhours);
  const slAdultTotal = (ladult * 4 * normalhours) + (ladult * 6 * peakhours);
  const slChildTotal = (lchild * 2 * normalhours) + (lchild * 3 * peakhours);

  localStorage.setItem('foreignerAdultTotal', 'foreignerAdultTotal');
  localStorage.setItem('foreignerChildTotal', 'foreignerChildTotal');
  localStorage.setItem('slAdultTotal', 'slAdultTotal');
  localStorage.setItem('slChildTotal', 'slChildTotal');

  document.getElementById('fa').innerHTML = localStorage.getItem("foreignerAdultTotal");
  document.getElementById('fc').innerHTML = localStorage.getItem("foreignerChildTotal");
  document.getElementById('la').innerHTML = localStorage.getItem("slAdultTotal");
  document.getElementById('lc').innerHTML = localStorage.getItem("slChildTotal");

  const totalCharges = foreignerAdultTotal + foreignerChildTotal + slAdultTotal + slChildTotal;
  localStorage.setItem("totalCharges", totalCharges);
  document.getElementById('ctotal').innerHTML = localStorage.getItem("totalCharges");
}


function detailstorage() {
  const namedetails = document.getElementById('name').value;
  const emaildetails = document.getElementById('email').value;
  const genderdetails = document.querySelector('input[name="gender"]:checked').value;
  const phonedetails = document.getElementById('phone').value;

  localStorage.setItem("info1", namedetails);
  localStorage.setItem("info2", emaildetails);
  localStorage.setItem("info3", genderdetails);
  localStorage.setItem("info4", phonedetails);

}


function final() {
  document.getElementById('cname').innerHTML = localStorage.getItem("info1");
  document.getElementById('cemail').innerHTML = localStorage.getItem("info2");
  document.getElementById('cgender').innerHTML = localStorage.getItem("info3");

  document.getElementById('cmob').innerHTML = localStorage.getItem("info4");


}