function myfun(){
    //get the value from text-boxes
    var uname = document.getElementById('uname') //here .value remove
    var email = document.getElementById('email')  //here .value remove
    var pwd  = document.getElementById('pwd')     //here .value remove

    var status = true //global

    //errors
     var uname_err = document.getElementById('uname_err')
     var email_err = document.getElementById('email_err')
     var pwd_err = document.getElementById('pwd_err')
     
     //Bootstrap-icons
     var wrong = `<i class="bi bi-patch-exclamation-fill"></i>`
     var right = `<i class="bi bi-patch-check-fill"></i>`

    //user validation
   if(uname.value == undefined || uname.value == "")  //here .value added
   {
    document.getElementById('uname_err').innerHTML=`${wrong}Enter Username` //innerText replace with innerHTML
    uname.style.border="1px solid #c22e1d"
      status=false;  //modify to false
   }
   else{
       uname_err.innerHTML=`${right} Thank you` //not mandatory
       uname.style.border="1px solid #1d9130"
       uname_err.className="text-success"

   }

   // email validation
   if(email.value == undefined || email.value == "")  //here .value added
   {
    document.getElementById('email_err').innerHTML= `${wrong}Enter valid email`
    email.style.border="1px solid #c22e1d"

    status=false;
   }
   else{
    email_err.innerHTML=`${right} Thank you` //not mandatory
    email.style.border="1px solid #1d9130"
    email_err.className="text-success"


   }
    // pwd validation
    if(pwd.value == undefined || pwd.value == "")   //here .value added
   {
    document.getElementById('pwd_err').innerHTML= `${wrong}Enter Password`
    pwd.style.border="1px solid #c22e1d"
    status=false;
   }
   else{
    pwd_err.innerHTML=`${right} Thank you` //not mandatory
    pwd.style.border="1px solid #1d9130"
    pwd_err.className="text-success"


   }
   return status
    
    
}