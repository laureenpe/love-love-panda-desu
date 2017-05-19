var pictures = ["assets/img/a1.jpg", "assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"]
    //var bigPandas = ["assets/img/uno.jpg", "assets/img/dos.jpg"];

/*
document.getElementById("first-pictures").innerHTML = '<img src="' + bigPandas[0] + '">';
document.getElementById("last-picture").innerHTML = '<img src="' + bigPandas[1] + '">';
//document.getElementById("pandas").innerHTML = ;*/


pictures.forEach(function(el, i) {
    var container = document.getElementById('picture-container'); //Search for the class where i want to put my pictures
    var crearDiv = document.createElement('div'); //Crear el elemento div 
    crearDiv.setAttribute("class", "big-panda"); // Crear el atributo class y big-pagnda
    var creaFoto = document.createElement('img'); //Crear la etiqueta para la foto
    creaFoto.src = pictures[i]; //crea la ruta para la imagen
    creaFoto.id = 'a' + (i + 1);

    crearDiv.appendChild(creaFoto);
    container.appendChild(crearDiv);
});