let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

/******************************************************************* sideMenu */
let sideMenu = document.getElementById("sideMenu");

// Get the body element
let body = document.body;

// Get the width of the body element
// var bodyWidth = body.clientWidth;

// // Log the width to the console
// console.log("Body width:", bodyWidth);

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  if (body.clientWidth <= 940) {
    sideMenu.style.right = "-450px";
  }
}

/********************************************************** google sheet data */

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzhZGrmivdY6Kzaz-keKsoj_muNor39L4OQXTfnYG7XrhKdII_7G-GluKEr07y_o1o_/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })

    .catch((error) => console.error("Error!", error.message));
});
