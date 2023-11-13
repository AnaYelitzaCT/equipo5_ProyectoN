function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.Nombre+'</h5>\n' +
        '        <p class="card-text">'+item.Descripción+'</p>\n' +
        '    </div>\n' +
        '        <a href="#" class="btn btn-primary configBtn">Agregar</a>\n' +
        '</div>\n' +
        '<br/>';

    const itemsContainer = document.getElementById("list-items");
     itemsContainer.innerHTML += itemHTML;
}


addItem({'id':'1','categoría':'Alimento','Nombre':'Royal Canin','Descripción':'Alimento para gato','Precio':'$235.00',
    'img':'https://m.media-amazon.com/images/I/71PFsSR62jL._AC_SX679_.jpg'});

addItem({'id':'2','categoría':'Alimento','Nombre':'NUCAT','Descripción':'Alimento para gato 13 kg','Precio':'$100.00',
    'img':'https://www.petstop.mx/wp-content/uploads/2020/08/Nucat_720x.png'});

addItem({'id':'3','categoría':'Alimento','Nombre':'Whiskas','Descripción':'Alimento para gato carne 3 kg','Precio':'$184.67',
    'img':'https://m.media-amazon.com/images/I/71inuI93U+L._AC_SY300_SX300_.jpg'});

addItem({'id':'4','categoría':'Alimento','Nombre':'Purina felix','Descripción':'Purina felix','Precio':'$89.63',
    'img':'https://croquetero.com/cdn/shop/products/latas-para-gato-sabor-filetes-de-pollo-y-salmon-en-salsa.png?v=1665603423'});

addItem({'id':'5','categoría':'Alimento','Nombre':'Fancy Feast','Descripción':'Alimento para gato en lata sabor pollo','Precio':'$99.00',
    'img':'https://m.media-amazon.com/images/I/31Ox0p-GdvL.__AC_QL70_FMwebp_.jpg'});

addItem({'id':'6','categoría':'Juguetes','Nombre':'Kit Cat','Descripción':'Alimento para gato en lata, sabor atún','Precio':'$74.50',
    'img':'https://kitcat.es/cdn/shop/products/atunclasicsalsalata_1_900x.jpg?v=1676449405'});

addItem({'id':'7','categoría':'Juguetes','Nombre':'Ratón de tela','Descripción':'Alimento para gato 13 kg','Precio':'$100.00',
    'img':'https://m.media-amazon.com/images/I/817XusPzyIL.png'});

addItem({'id':'8','categoría':'Juguetes','Nombre':'Juguete para mascota','Descripción':'Juguete pasa mascota de tela suave en colores verde y amarillo','Precio':'$60.20"',
    'img':'https://farmaciaveterinariazamora.com/pub/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/k/o/kong-wrangler-avocato-kong.fvz.jpeg'});

addItem({'id':'9','categoría':'Juguetes','Nombre':'Balón para mascota','Descripción':'Juguete pasa mascota de tela suave en forma de balón','Precio':'$45.70',
    'img':'https://palevlasprotectora.es/wp-content/uploads/2018/03/bola-de-tela-para-gato.png'});

addItem({'id':'10','categoría':'Alimento','Nombre':'Rascador para mascota','Descripción':'Rascador para gato tamaño mediano','Precio':'$130.10',
    'img':'https://ss345.liverpool.com.mx/xl/1102615022.jpg'});