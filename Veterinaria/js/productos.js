
function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


addItem({'id':'1','categoría':'Alimento','Nombre':'Royal Canin','Descripción':'Alimento para gato','Precio':'$235.00',
    'img':'./src/royal.png"',})

addItem({'id':'2','categoría':'Alimento','Nombre':'NUCAT','Descripción':'Alimento para gato 13 kg','Precio':'$100.00',
    'img':'./src/2.png',})

addItem({'id':'3','categoría':'Alimento','Nombre':'Whiskas','Descripción':'Alimento para gato carne 3 kg','Precio':'$184.67',
    'img':'./src/3.png',})

addItem({'id':'4','categoría':'Alimento','Nombre':'Purina felix','Descripción':'Purina felix','Precio':'$89.63',
    'img':'./src/4.png',})

addItem({'id':'5','categoría':'Alimento','Nombre':'Fancy Feast','Descripción':'Alimento para gato en lata sabor pollo','Precio':'$99.00',
    'img':'./src/5.png',})

addItem({'id':'6','categoría':'Juguetes','Nombre':'Kit Cat"','Descripción':'Alimento para gato en lata, sabor atún','Precio':'$74.50',
    'img':'./src/6.png',})

addItem({'id':'7','categoría':'Juguetes','Nombre':'Ratón de tela','Descripción':'Alimento para gato 13 kg','Precio':'$100.00',
    'img':'./src/7.png',})

addItem({'id':'8','categoría':'Juguetes','Nombre':'Juguete para mascota','Descripción':'Juguete pasa mascota de tela suave en colores verde y amarillo','Precio':'$60.20"',
    'img':'./src/8.png',})

addItem({'id':'9','categoría':'Juguetes','Nombre':'Balón para mascota','Descripción':'Juguete pasa mascota de tela suave en forma de balón','Precio':'$45.70',
    'img':'./src/9.png',})

addItem({'id':'10','categoría':'Alimento','Nombre':'Rascador para mascota','Descripción':'Rascador para gato tamaño mediano','Precio':'$130.10',
    'img':'./src/10.png',})

