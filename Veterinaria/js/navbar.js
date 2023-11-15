var navbar = document.getElementById("parteNavbar");
navbar.innerHTML = `        


<header class="header">
    <div class="header__container">
        <div class="header__logo;">
            <a href="index.html" class="logo__link">
            <img src="./src/fon_do.png" alt="">  
            </a>
        </div>

        <div>
            
        <nav class="navbar navbar-expand-lg header__nav__menu " >
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                   


                    <ul class="navbar-nav mx-auto">
                      <li class="menu__list"><a class="header__menu-link" href="index.html">Inicio</a></li>
                      <li class="menu__list"><a class="header__menu-link" href="QuienesSomos.html">Nosotras</a></li>
                      <li class="menu__list"><a class="header__menu-link" href="servicios.html"> Servicios</a></li>
                      <li class="menu__list"><a class="header__menu-link" href="productos.html">Tienda</a></li>
                      <li class="menu__list"><a class="header__menu-link" href="cuidados.html">Cuidados</a></li>
                      <li class="menu__list"><a class="header__menu-link" href="contacto.html">Contacto</a></li>
                      <li class="menu__list">
                        <a href="registro.html" class="header__menu-link"><iconify-icon icon="openmoji:dog-face" width="40"></iconify-icon></a>
                      </li>
                      <li class="menu__list">
                        <a href="" class="header__menu-link"><iconify-icon icon="openmoji:cat-face" width="40"></iconify-icon></iconify-icon></a>
                      </li>
                      <li class="menu__list">
                        <a href="registro.html" class="header__menu-link"><iconify-icon icon="ph:user-duotone" style="color: black;" width="40"></iconify-icon></a>
                      </li>
                      <li class="menu__list">
                        <a href="productos.html" class="header__menu-link"><iconify-icon icon="basil:shopping-cart-solid" style="color: black;" width="40"></iconify-icon></a>
                      </li>
                      <div class="d-lg-none py-3">
                        <li class="nav-item_redes">
                            <a href=""><iconify-icon icon="icon-park:facebook"  width="20"></iconify-icon></a>
                            <a href=""><iconify-icon icon="skill-icons:instagram"  width="20"></iconify-icon></a>
                            <a href=""><iconify-icon icon="logos:whatsapp-icon"  width="20"></iconify-icon></a>
                          </li>
                      </div>
                  </ul>
                </div>
              </nav>
        </div>
        
    </div>
</header>`;