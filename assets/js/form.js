let email = document.querySelector("#email");
let password = document.querySelector("#password");

function validate() {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert("Please provide a valid email address");
    email.focus;
    return false;
  }
  console.log("checking phone::", checkPhone());
  if (!checkPhone()) {
    return false;
  }
  return true;
}

function isGood(password) {
  var password_strength = document.getElementById("password-text");

  //TextBox left blank.
  if (password.length == 0) {
    password_strength.innerHTML = "";
    return;
  }

  //Regular Expressions.
  var regex = new Array();
  regex.push("[A-Z]"); //Uppercase Alphabet.
  regex.push("[a-z]"); //Lowercase Alphabet.
  regex.push("[0-9]"); //Digit.
  regex.push("[$@$!%*#?&]"); //Special Character.

  var passed = 0;

  //Validate for each Regular Expression.
  for (var i = 0; i < regex.length; i++) {
    if (new RegExp(regex[i]).test(password)) {
      passed++;
    }
  }

  //Display status.
  var strength = "";
  switch (passed) {
    case 0:
    case 1:
    case 2:
      strength =
        "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
      break;
    case 3:
      strength =
        "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
      break;
    case 4:
      strength =
        "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
      break;
  }
  password_strength.innerHTML = strength;
}

function checkPhone() {
  let phone = document.querySelector("#phone");
  var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!phone.value.match(phoneNum)) {
    alert(
      "Phone number is not a valid format. Expected formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX"
    );
    return false;
  }
  return true;
}
