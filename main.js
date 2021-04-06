// const firstName = document.getElementById('first-name');
// const form = document.getElementById('login-form');
// const claim = document.getElementById('claim');

// function saveFirstName()  {
//     const name = document.getElementById('first-name').value;
//     document.getElementById("alert-first-name").innerText = name;
//   }

// function checkValidFirstname(firstName) {
//     if ((firstName.value) === "") {
//         document.getElementById('alert-first-name').innerHTML = "Please enter firstname.";
//     } else {
//         document.getElementById('alert-first-name').innerHTML = "ok";
//     }
// }

// checkValidFirstname(firstName);

// firstName.addEventListener('onchange',alert('a'));


// function saveFirstName()  {
//     const name = document.getElementById('first-name').value;
//     document.getElementById("alert").innerHTML = name;
//   }

// saveFirstName();

// firstName.addEventListener('onkeyup',saveFirstName());

// submit.addEventListener('click',checkValidFirstname(firstName));

// function checkFirstname(firstName) {
//     if ((firstName.value) =="") {
//         alert('이름을 입력하세요');
//         firstName.focus();
//     } else{
//         alert('hi');
//     }
// }

claim.addEventListener('click', function (event) {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const pw = document.getElementById('pw');
    const form = document.getElementById('login-form');
    const claim = document.getElementById('claim');
    event.preventDefault();
    if ((firstName.value) == "") {
        alert('이름을 입력하세요');
        document.getElementById('alert-first-name').innerHTML = "Please enter firstname.";
        firstName.focus();
    } 
    if ((lastName.value) == "") {
        alert('성을 입력하세요');
        document.getElementById('alert-last-name').innerHTML = "Please enter lastname.";
        lastName.focus();
    }
    if ((email.value) == "") {
        alert('이메일을 입력하세요');
        document.getElementById('alert-email').innerHTML = "Please enter email.";
        lastName.focus();
    }
    if ((pw.value) == "") {
        alert('패스워드를 입력하세요');
        document.getElementById('alert-pw').innerHTML = "Please enter password.";
        lastName.focus();
    }
    // return alert('가입성공');
});