var navbar = document.getElementById("parteNavbar");
navbar.innerHTML = `        


<header class="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid" >
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="./index.html"><img src="./src/fon_do.png " alt="" style="width: 13%;"> Mascotitas</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./QuienesSomos.html">¿Quiénes somos?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./servicios.html">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./productos.html">Tienda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cuidados</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contacto.html">Contacto</a>
              </li>
              
            </ul>

            <div >
            <a  href="./registroUsuarios.html"><iconify-icon icon="bxs:user" style="color: black;" width="40"></iconify-icon></a>
            <a  href="#"><iconify-icon icon="zondicons:shopping-cart" style="color: black;" width="40"></iconify-icon></a>
            
          
          

        </div>
            
            
          </div>
        </div>
      </nav>
    </header>`;