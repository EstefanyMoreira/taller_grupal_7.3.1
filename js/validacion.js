
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


let boton = document.getElementById('regBtn');

boton.addEventListener ("click", function () {

let nombre = document.getElementById('nombre').value;
let apellido= document.getElementById('apellido').value;
let email= document.getElementById('email').value;
let password1= document.getElementById('password1').value;
let password2= document.getElementById('password2').value;
let terminos = document.getElementById('terminos');

 if (nombre == '' || apellido == '' || email =='' || password1 == '' || password2 == '' || !terminos.checked) {
    showAlertError();

} else if ( password1.length < 6 ) {

    showAlertError(); } 

    else if (password1 !== password2 ) {

    showAlertError();

} else { showAlertSuccess();
}}

)  


//function showAlertSuccess() {
// document.getElementById("alert-success").classList.add("show");
//}

//function showAlertError() {
//  document.getElementById("alert-danger").classList.add("show");
//}

//function checkPasswords() {
  //  const password1 = document.getElementById('password1').value;
   // const password2 = document.getElementById('password2').value;

 //   if (password1 !== password2) {
  //      "alert-danger";
  //  }
//}