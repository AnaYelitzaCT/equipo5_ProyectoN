
`use strict`;
const boton_subirFoto=  document.querySelector(`#upload_widget`);
let widget_cloudinary= cloudinary.createUploadWidget({
  cloudName: `dginlkrcz`,
  uploadPresent: `tiendaMascotitas`

}, (err, result) => {
  if (!err && result & result.event === `success`){
    console.log(`Imagen subida con éxito`, result.info);
  }

  

});
boton_subirFoto.addEventListener(`click`, ()=>{

});


// import "./styles.css"

// document.getElementById("app").innerHTML=`
// <h1>Upload Widget</h1>
// <div>
// <button 
// id="upload_widget"
// class="cloudinary-button">
// Upload files
// </button>
// </div>
// `;

// var myWidget = cloudinary.createUploadWidget(
//   {
//     cloudName: 'dginlkrcz', 
//     uploadPreset: 'tiendaMascotitas'
//   }, 
//   (error, result) => { 
//       if (!error && result && result.event === "success") { 
//         console.log('Done! Here is the image info: ', result.info); 
//       }
//     }
//   );
  
//    document.getElementById("upload_widget").addEventListener(
//     "click", 
//     function(){
//       myWidget.open();
//    },
//     false
//     );
  

