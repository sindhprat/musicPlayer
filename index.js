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
    document.getElementById("error1").innerHTML = "please enter a valid email"
    return false;
  }
};

validateMobile = () => {
  const phone = document.getElementById("mobile");
  const regex = /^\d{10}$/;
  if (regex.test(phone.value)) {
    return true;
  } else {
    // alert('please enter a valid mobile number');
    return false;
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
