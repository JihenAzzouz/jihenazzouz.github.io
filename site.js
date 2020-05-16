

$(document).ready(function(){
  
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    
    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
    
        window.location.hash = hash;
      });
    } 
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

/*********************FORMS VALIDATION ********************************/


function block_msg (id) {
  document.getElementById(id).style.display = "block";
}


function hide_msg (id) {
  document.getElementById(id).style.display = "none";
}


function pswd_validation() {
  let password = document.querySelector("#pwd");

  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number= document.getElementById("number");
  let length = document.getElementById("length");
  let lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
  } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }


  let upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
  } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
  }


  let numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
  } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
  }


  if (password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
  } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
  }
}


function checkName() {


  let name = document.querySelector('#fname');
  let name_msg=document.querySelector('#name-msg')    

  if (name.value.length >= 5 && name.value != "" && isNaN(parseInt(name.value))) {
      name_msg.classList.remove("invalid");
      name_msg.classList.add("valid");
      return true
  } else {
      name_msg.classList.remove("valid");
      name_msg.classList.add("invalid");
      return false
  }


}
function checkID(){
  let pat=/[!@#$%^&*(),.?":{}|<>]/;
  let user = document.querySelector('#user_name');
  let user_msg=document.querySelector('#user-msg')    

  if (user.value.length >= 5 && user.value != "" && !pat.test(user.value) ){
      user_msg.classList.remove("invalid");
      user_msg.classList.add("valid");
      return true
  } else {
      user_msg.classList.remove("valid");
      user_msg.classList.add("invalid");
      return false
  }

}

function checkEmail() {
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let email = document.querySelector('#femail')
   let email_msg=document.querySelector('#email-msg')   

  if (pattern.test(email.value)&&email.value!="") {
      email_msg.classList.remove("invalid");
      email_msg.classList.add("valid");
      return true
  } else {
      email_msg.classList.remove("valid");
      email_msg.classList.add("invalid");
      return false
  }

}
function checkConfirm() {

  let fpwd = document.querySelector('#pwd');
  let fpwd2 = document.querySelector('#pwdC')
  let pwdC_msg=document.querySelector('#pwdC-msg') 
  

  if (fpwd.value == fpwd2.value && fpwd2.value != '') {
      pwdC_msg.classList.remove("invalid");
      pwdC_msg.classList.add("valid");
      return true
  } else {
      pwdC_msg.classList.remove("valid");
      pwdC_msg.classList.add("invalid");
      return false
  }

}

function validate_all(){
if(checkName()&&checkID()&&checkEmail()&&checkConfirm())
alert("successfully sumbited")
else
alert("you have some invalid inputs");
}


