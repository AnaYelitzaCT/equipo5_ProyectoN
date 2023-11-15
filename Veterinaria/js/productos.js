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
    'img':'https://o.remove.bg/downloads/838c8ec3-6250-4fb5-8436-0b948fc00d22/71PFsSR62jL._AC_SX679_-removebg-preview.png'});

addItem({'id':'2','categoría':'Alimento','Nombre':'NUCAT','Descripción':'Alimento para gato 13 kg','Precio':'$100.00',
    'img':'https://o.remove.bg/downloads/160413f0-8f5e-4121-a983-02a1f7bae11c/Nucat_720x-removebg-preview.png'});

addItem({'id':'3','categoría':'Alimento','Nombre':'Whiskas','Descripción':'Alimento para gato carne 3 kg','Precio':'$184.67',
    'img':'https://o.remove.bg/downloads/8f7f5dbc-cae7-4540-8cdf-616149f36965/71inuI93U_L._AC_SY300_SX300_-removebg-preview.png'});

addItem({'id':'4','categoría':'Alimento','Nombre':'Purina felix','Descripción':'Purina felix','Precio':'$89.63',
    'img':'https://o.remove.bg/downloads/a8f6554d-1976-4287-91b5-ed9b905c4786/latas-para-gato-sabor-filetes-de-pollo-y-salmon-en-salsa-removebg-preview.png'});

addItem({'id':'5','categoría':'Alimento','Nombre':'Fancy Feast','Descripción':'Alimento para gato en lata sabor pollo','Precio':'$99.00',
    'img':'https://o.remove.bg/downloads/228ecd20-213c-4e24-8a37-a832dae2fcd3/200_ffd2b73bc88dba7533ae3e529378390c-removebg-preview.png'});

addItem({'id':'6','categoría':'Juguetes','Nombre':'Kit Cat','Descripción':'Alimento para gato en lata, sabor atún','Precio':'$74.50',
    'img':'https://o.remove.bg/downloads/9cb143b4-7ac3-4dc0-8f7d-e83c371633f3/atunclasicsalsalata_1_900x-removebg-preview.png'});

addItem({'id':'7','categoría':'Juguetes','Nombre':'Ratón de tela','Descripción':'Alimento para gato 13 kg','Precio':'$100.00',
    'img':'https://o.remove.bg/downloads/f925d7c1-c504-40a9-8f20-a3efaf74b8d7/817XusPzyIL-removebg-preview.png'});

addItem({'id':'8','categoría':'Juguetes','Nombre':'Juguete para mascota','Descripción':'Juguete pasa mascota de tela suave en colores verde y amarillo','Precio':'$60.20"',
    'img':'https://o.remove.bg/downloads/07724b2d-e93a-4bf9-92ac-2d9d58fccd28/kong-wrangler-avocato-kong.fvz-removebg-preview.png'});

addItem({'id':'9','categoría':'Juguetes','Nombre':'Balón para mascota','Descripción':'Juguete pasa mascota de tela suave en forma de balón','Precio':'$45.70',
    'img':'https://o.remove.bg/downloads/b0d2b4da-aff7-46de-ab0e-837cca35a4f2/bola-de-tela-para-gato-removebg-preview.png'});

addItem({'id':'10','categoría':'Alimento','Nombre':'Rascador para mascota','Descripción':'Rascador para gato tamaño mediano','Precio':'$130.10',
    'img':'https://o.remove.bg/downloads/5f9ea01b-e4f0-4c34-a65d-172827bb6e7e/1102615022-removebg-preview.png'});