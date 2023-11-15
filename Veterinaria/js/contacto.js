emailjs.init('lWoM7i5rmAA-HDtbS')
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
  let name = document.getElementById('name');// es el componente nombre pero no es el valor del campo nombre
  let numtel = document.getElementById('phone');// es el componente nombre pero no es el valor del campo nombre
  // comienzan validaciones
  if(/[\d]/.test(name.value)===true){
    alert('Porfavor coloque un nombre sin numeros ');
    //enviamos la variable que hace referencia al componente
    cleanAndFocus(name);
   // document.getElementById("name").value = "";
    //document.getElementById("name").focus();
  }
  else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(name.value)===true){
    alert('Porfavor coloque un nombre sin caracteres especiales ');
    cleanAndFocus(name);
  }else if(numtel.value.length !=10){
    alert('Porfavor coloque un número de telefono valido');
    cleanAndFocus(numtel);
  }
  else{
    btn.value = 'Enviando mensaje...';
    const serviceID = 'default_service';
    const templateID = 'template_n7cj7q6';
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Mensaje enviado gracias por contactarnos!');
       document.getElementById('form').reset();
     }, (err) => {
       btn.value = 'Send Email';

       alert(JSON.stringify(err));
     });
    
  }
   
});

function cleanAndFocus(component){
  component.value ="";
  component.focus();
}