const btn = document.getElementById('button');
document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();


let email = document.getElementById("email");
let password = document.getElementById("password");

let user=new Array();
user=JSON.parse(localStorage.getItem("Usuarios"))?JSON.parse(localStorage.getItem("Usuarios")):[];
console.log(user);
if(user.some((v)=>{return v.Email==email.value && v.Contraseña==password.value}))
{
  alert("Login Pass");
//   let current_user=user.filter((v)=>{return v.email==email && v.psw==password})[0]
//  localStorage.setItem('name',current_user.name);
//  localStorage.setItem('email',current_user.email);
  window.location.href="index.html"
}
else
{
  alert('Login Fail');
}
  });