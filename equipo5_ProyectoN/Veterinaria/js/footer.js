
var footer = document.getElementById("partefooter");
footer.innerHTML = `<div class="container py-4" >
<div class="row gy-4 gx-5">
<div class="col-lg-4 col-md-6">
    <h5 class="h1 text-white">Acerca de nuestro trabajo</h5>
    <p class="small text-muted">.</p>
    <p class="small text-muted mb-0">&copy; <a class="text-primary"
            href="https://github.com/AnaYelitzaCT/equipo5_ProyectoN">Nuestra página de proyecto</a>
    </p>
</div>
<div class="col-lg-2 col-md-6">
    <h5 class="text-white mb-3">Nuestras páginas más visitadas</h5>
    <ul class="list-unstyled text-muted">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="QuienesSomos.html">¿Quienes somos?</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="productos.html">Tienda</a></li>
        <li><a href="formulario.html">Registro de productos</a></li>

    </ul>
</div>
<div class="col-lg-2 col-md-6">
    <img class="perrito" src="./src/perrito.png" alt="" width="100px" height="100px">
</div>
<div class="col-lg-4 col-md-6">
    <h5 class="text-white mb-3">Promociones</h5>
    <p class="small text-muted"></p>
    <form action="#">
        <div class="input-group mb-3">
            <input class="form-control" type="text" placeholder="ingresa producto a buscar"
                aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-primary" id="button-addon2" type="button"><i
                    class="fas fa-paper-plane"></i></button>
        </div>
    </form>
</div>
</div>
</div>`;
