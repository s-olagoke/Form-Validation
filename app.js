// Form blur event listeners
  document.getElementById('name').addEventListener('blur', validateName);
  document.getElementById('zip').addEventListener('blur', validateZip);
  document.getElementById('email').addEventListener('blur', validateEmail);
  document.getElementById('phone').addEventListener('blur', validatePhone);
  document.getElementById('password').addEventListener('blur', validatePassword);
  document.getElementById('c-password').addEventListener('blur', validateConfirmPassword);



// add click even on the button
document.getElementById('submit').addEventListener('click', (e) => {
  
  e.preventDefault();
});


// Create all function
function validateName () {
  const name = document.getElementById('name');
  const re = /^[A-Za-z]{2,10}$/;
  
  console.log(re.test(name.value))
  
  if(!re.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
    
  }
  
}

function validateZip () {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{6}$/;
  
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
    zip.classList.add('is-valid')
  }
}

function validateEmail () {
  const email = document.getElementById('email');
  const re = /(^[A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
    
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid')
  }
}

function validatePhone () {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[\W]?$/;
  // 
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
    
  }
}

function validatePassword () {
  const password = document.getElementById('password');
  const re = /^([A-Z])$/;
  
  if (!re.exec(password.value)) {
    password.classList.add('is-invalid');
  } else {
    password.classList.remove('is-invalid');
    password.classList.add('is-valid');
  }
}

function validateConfirmPassword () {
  
}