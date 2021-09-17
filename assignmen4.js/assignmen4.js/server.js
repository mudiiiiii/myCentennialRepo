'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

function formValidation() {

    var fname = document.Registration.fname.value
    var lname = document.Registration.lname.value
    var address = document.Registration.address.value
    var city = document.Registration.city.value
    var pCode = document.Registration.postalcode.value
    var province = document.Registration.province.value
    var age = document.Registration.age.value
    var password = document.Registration.password.value
    var cPassword = document.Registration.confirm.value
    var email = document.Registration.email.value

    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    var posRegex = /^[A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d/;


    if (fname == "") {
        alert('Enter your first name!');
        document.Registration.fname.focus();
        return false;
    }
    if (lname == "") {
        alert('Enter your last name!');
        document.Registration.lname.focus();
        return false;
    }
    if (address == "") {
        alert('Enter your address!');
        document.Registration.address.focus();
        return false;
    }
    if (city == "") {
        alert('Enter your city!');
        document.Registration.city.focus();
        return false;
    }
    if (pcode == "") {
        alert('Enter your postal code!');
        document.Registration.postalcode.focus();
        return false;
    }
    else if (!posRegex.test(postalcode)) {
        alert('The postal code is in the wrong format e.g a0a0a0');
        document.Registration.postalcode.focus();
        return false;
    }
    if (province.value == "Default") {
        alert('Select your province');
        document.Registration.province.focus();
        return false;
    }
    if (age == "") {
        alert('Enter your age!');
        document.Registration.age.focus();
        return false;
    }
    if (age < "18") {
        alert('You have to be older than 18 to register!');
        document.Registration.age.focus();
        return false;
    }
    if (password == "") {
        alert('Enter your password!');
        document.Registration.password.focus();
        return false;
    }
    else if (!pwdRegex.test(password)) {
        alert('Passwords must have at least 6 characters and must contain at least one digit and one upper-case character!');
        document.Registration.password.focus();
        return false;
    }
    if (cPassword == "") {
        alert('Enter your confirm password!');
        document.Registration.confirm.focus();
        return false;
    }
    if (cPassword != password) {
        alert('Password doesnt match!');
        document.Registration.confirm.focus();
        return false;
    }
    if (email == "") {
        alert('Enter your email!');
        document.Registration.email.focus();
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Email is not valid!');
        document.Registration.email.focus();
        return false;
    }
    if (fname != '' && lname != '' && address != '' && city != '' && pCode != '' && province != '' && age != '' && password != '' && cPassword != '' && email != '') {
        document.getElementById('allPagge').innerHTML = "Thanks for registering with our website, your customer record was created succesfully"
    }
}

