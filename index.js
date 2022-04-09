validateForm = () => {
    // alert('hello world');
  var emailValid = validateEmail();
  var mobileValid = validateMobile();
  var destinationValid = validateDestination();
  

}

validateEmail = () => {
  const mail = document.getElementById("email").value;
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+.([a-z]+)?$/;
  if (regex.test(mail)) {
    return regex.test(mail);
  } else {
    return  document.getElementById("error1").innerHTML = "please enter a valid email";
  }
};

validateMobile = () => {
  const phone = document.getElementById("mobile").value;
  const regex = /^\d{10}$/;
  if (regex.test(phone)) {
    return regex.test(phone);
  } else {
    // alert('please enter a valid mobile number');
    return document.getElementById("error2").innerHTML = "please enter a valid mobile"
  }
};
validateDestination = () => {
  const destination = document.getElementById("destin").value;
  const origin = document.getElementById("orig").value;
  if (destination === origin)
    return false;
  // else proceed further
  else {
    return true;
  }
};
