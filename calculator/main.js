// practice with vanillaJS. It's written in such a way
// as to replicate how hardware works. Registers and all that.
// I don't know if this is the best "software" approach, but
// there you go.

var registerA = [],
  registerB = [],
  compareRegister = "",
  output = 0,
  display = "",
  number = document.getElementsByClassName("number"),
  operator = document.getElementsByClassName("operator")

function getOutput() {
  let number1 = 0,
    number2 = 0;
  if (registerA.length === 0) {
    number1 = 0
  } else {
    number1 = Number(registerA.join(""));
  }
  if (registerB.length === 0) {
    number2 = 0
  } else {
    number2 = Number(registerB.join(""));
  }

  switch (compareRegister) {
    case "":
    case "+":
      output = number1 + number2;
      break;
    case "-":
      output = number1 - number2;
      break;
    case "x":
      output = number1 * number2;
      break;
    case "÷":
      output = number1 / number2
      break;
  }
  document.getElementById("display").innerHTML = parseFloat(output.toString().slice(0, 9));
  registerA = [output];
  registerB = [];
}

document.getElementById("clear-all").addEventListener('click', function() {
  registerA = [];
  registerB = [];
  compareRegister = "";
  output = 0;
  document.getElementById("display").innerHTML = "";
})

document.getElementById("clear-last").addEventListener('click', function() {
  if (registerB.length > 0) {
    registerB = []
    document.getElementById("display").innerHTML = registerA.join("");
  } else {
    registerA = [];
    registerB = [];
    compareRegister = "";
    output = 0;
    document.getElementById("display").innerHTML = "";
  }

})

for (let x of number) {
  x.addEventListener("click", function() {
    if (registerA.length > 10) alert("Number too big")
    else {
      if (compareRegister === "") {
        registerA.push(x.innerHTML);
        document.getElementById("display").innerHTML = registerA.join("");
      } else {
        registerB.push(x.innerHTML);
        document.getElementById("display").innerHTML = registerB.join("");
      }
    }
  })
}

for (let x of operator) {
  x.addEventListener("click", function() {
    if (registerB.length > 0) {
      getOutput();
      compareRegister = x.innerHTML;
    } else if (registerA.length > 0) {
      compareRegister = x.innerHTML;
      document.getElementById("display").innerHTML = compareRegister
    }
  })
}

document.getElementById("equal").addEventListener("click", function(){getOutput()})
