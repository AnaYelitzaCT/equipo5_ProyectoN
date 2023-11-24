let id = (id) => document.getElementById(id);
let preview = id("preview");
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  itemname =id("itemname");
  itemprice =id("itemprice");
  itemdesc =id("itemdesc");
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "este campo no puede registrarse vacío");
  engine(email, 1, "este campo no puede registrarse vacío");
  engine(password, 2, "este campo no puede registrarse vacío");
  engine(itemname, 3, "este campo no puede registrarse vacío");
  engine(itemprice, 4, "este campo no puede registrarse vacío");
  engine(itemdesc, 5, "este campo no puede registrarse vacío");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "" ) {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

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