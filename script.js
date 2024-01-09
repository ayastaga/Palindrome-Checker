// Retrieve text
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const display = document.getElementById("display");

// Focus on the text
textInput.focus();

// Checks for palindromes
const palindrome = (str) => {
  if (str === str.split("").reverse().join("")) {
    return true;
  }
  return false;
};

// Displays
const displayResult = (text) => {
  if (palindrome(text)) {
    message = `"<span style="color: green;">${textInput.value}</span>" is a palindrome`;
  } else {
    message = `"<span style="color: red;">${textInput.value}</span>" is not a palindrome`;
  }
  result.innerHTML = message;
};

// Checks input
const check = () => {
  textInput.focus();
  // Checks if there is an input
  if (textInput.value === "") {
    alert("Please input a value");
    return null;
  }

  // Ignores non-alphanumeric characters
  const text = textInput.value.replace(/[^a-zA-Z0-9]/g, "");

  // Displays the result
  displayResult(text.toLowerCase());
};

// Event listener to check for button press or enter key on button
checkBtn.addEventListener("click", check);
checkBtn.addEventListener("keypress", function (e) {
  if (e.key === "Event") {
    check();
  }
});
