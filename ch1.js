const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b0 = document.getElementById("b0");
const bz = document.getElementById("bz");
const bd = document.getElementById("bd");
const bm = document.getElementById("bm");
const bp = document.getElementById("bp");
const be = document.getElementById("be");
const ac = document.getElementById("ac");
const s1 = document.getElementsByClassName("screen")[0];

b1.addEventListener("click", function () {
  s1.innerText += "1";
});
b2.addEventListener("click", function () {
  s1.innerText += "2";
});
b3.addEventListener("click", function () {
  s1.innerText += "3";
});
b4.addEventListener("click", function () {
  s1.innerText += "4";
});
b5.addEventListener("click", function () {
  s1.innerText += "5";
});
b6.addEventListener("click", function () {
  s1.innerText += "6";
});
b7.addEventListener("click", function () {
  s1.innerText += "7";
});
b8.addEventListener("click", function () {
  s1.innerText += "8";
});
b9.addEventListener("click", function () {
  s1.innerText += "9";
});
b0.addEventListener("click", function () {
  s1.innerText += "0";
});

bz.addEventListener("click", function () {
  s1.innerText += "*";
});
bd.addEventListener("click", function () {
  s1.innerText += "/";
});
bm.addEventListener("click", function () {
  s1.innerText += "-";
});
bp.addEventListener("click", function () {
  s1.innerText += "+";
});

be.addEventListener("click", function () {
  try {
    s1.innerText = eval(s1.innerText);
  } catch {
    s1.innerText = "Error";
  }
});
ac.addEventListener("click", function () {
  s1.innerText = "";
});
document.addEventListener("keydown", function (event) {
  if (event.key === "1") {
    s1.innerText += "1";
  } else if (event.key === "2") {
    s1.innerText += "2";
  } else if (event.key === "3") {
    s1.innerText += "3";
  } else if (event.key === "4") {
    s1.innerText += "4";
  } else if (event.key === "5") {
    s1.innerText += "5";
  } else if (event.key === "6") {
    s1.innerText += "6";
  } else if (event.key === "7") {
    s1.innerText += "7";
  } else if (event.key === "8") {
    s1.innerText += "8";
  } else if (event.key === "9") {
    s1.innerText += "9";
  } else if (event.key === "0") {
    s1.innerText += "0";
  } else if (event.key === "+") {
    s1.innerText += "+";
  } else if (event.key === "-") {
    s1.innerText += "-";
  } else if (event.key === "*") {
    s1.innerText += "*";
  } else if (event.key === "/") {
    s1.innerText += "/";
  } else if (event.key === "Backspace") {
    s1.innerText = "";
  } else if (event.key === "Enter" || event.key === "=") {
    try {
      s1.innerText = eval(s1.innerText);
    } catch {
      s1.innerText = "Error";
    }
  }
});
