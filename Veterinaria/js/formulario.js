document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores de los campos
    const itemName = document.getElementById('itemname').value;
    const categoria = document.getElementById('validationTooltip04').value;
    const itemPrice = document.getElementById('itemprice').value;
    const itemDesc = document.getElementById('itemdesc').value;

    // Validaciones básicas
    if (!itemName || !categoria || !itemPrice || !itemDesc) {
      alert('Por favor, completa todos los campos.');
      return;
    }

   // Validación de precio como número decimal con máximo dos decimales
   if (!(/^\d+(\.\d{1,2})?$/.test(itemPrice))) {
    alert('Ingresa un precio válido con hasta dos decimales.');
    return;
  }

    // Validar que la descripción no exceda los 200 caracteres
    if (itemDesc.length > 200) {
      alert('La descripción no puede exceder los 200 caracteres.');
      return;
    }

    // Guardar datos en el localStorage
    const formData = {
      itemName,
      categoria,
      itemPrice,
      itemDesc
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Sus datos fueron recibidos con éxito! la información será procesada');

    // Puedes limpiar el formulario si deseas
    form.reset();
  });

  // Recuperar datos del localStorage si existen al cargar la página
  const savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    // Puedes utilizar los datos recuperados para lo que necesites en tu aplicación
    console.log(parsedFormData);
  }
});

// clouninary Section

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dginlkrcz',
  uploadPreset: 'tiendaMascotitas'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info.url); 
      preview.src= result.info.thumbnail_url;
    }//if
  }//error, result
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);