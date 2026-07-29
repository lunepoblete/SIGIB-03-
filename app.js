function abrirModulo(nombre) {

    if (nombre === "🚒 Equipamiento estructural") {

        mostrarEquipamiento();

    } else {

        alert("Módulo en desarrollo: " + nombre);

    }

}


function mostrarEquipamiento() {

    let contenido = "<h2>🚒 Equipamiento estructural</h2>";

    contenido += "<table>";

    contenido += `
    <tr>
        <th>Elemento</th>
        <th>Cantidad</th>
        <th>Estado</th>
        <th>Ubicación</th>
    </tr>
    `;

    equipamientoEstructural.forEach(item => {

        contenido += `
        <tr>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.estado}</td>
            <td>${item.ubicacion}</td>
        </tr>
        `;

    });

    contenido += "</table>";

    document.querySelector("main").innerHTML = contenido;

}
