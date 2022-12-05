
function Validation() {

    var FirstName =document.getElementById("fname").value;  
    var letters = /^[A-Za-z]+$/;

    // first name Validate is null 
    if (FirstName==""){
      
    alert('Name is reqiued');  
    form.firstName.focus();
    return false;}
  
// first name Validate must alphabets only 
else if(!letters.test(FirstName))  
        {alert('Name is incorrect must contain alphabets only');
        return false; } 

//gender Validate
else if (form.gender.value == "") {
    alert("Please choose the gender ");
        form.gender.focus();
        return;} 

// age Validate
 if (form.age.value < 0 || form.age.value >24) {
            alert("please Enter an age in Range 0-24 month ");
            form.age.focus();
            return;}

// package Validate function         
package();

// date Validate
if (form.date.value == "") {
    alert("Please Enter the booking date ");
        form.date.focus();
        return;} 

//time Validate
if (form.time.value == "") {
    alert("Please Enter the booking time");
    form.time.focus();
    return;
        }

// phone Validate function
 regex();
 Email1();

 //disscount Validate
if (form.discount.value == "") {
    alert("Please choose answer");
    form.discount.focus();
    return;
        }

} //end validation function

//function pacakge
function package(){

    var TypePackage1 = document.getElementById("TypePackage");

    // type of packge Validate
    if (TypePackage1.value == "") {
        alert("Please select an option!");
        return false;}
    
    else{
    return true;}
    
    }

//function regex
function regex() {
var phone = document.getElementById('tel').value;
var regexPhoneNumber = /^([0-9]{3})([0-9]{3})([0-9]{4})$/;

//phone Validate
if (phone.match(regexPhoneNumber)) {
    return true;} 

else {
    alert("Please Enter correct phone number");
    form.tel.focus();
    return false;
}

}

//function email
function Email1(){
    var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
// email Validate
if (form.email.value.match(email)) {
    return true;} 

else
 {
    alert("Please Enter correct email");
    form.email.focus();
    return false;
}
}
//--------------
//themes
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }