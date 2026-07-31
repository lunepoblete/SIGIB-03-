// ========================================
// SIGIB 03
// APP.JS - PARTE 1
// ========================================

let usuarioActivo = null;


// ================================
// INGRESO AL SISTEMA
// ================================

function ingresar() {

    const legajo = document.getElementById("legajo").value;

    const bombero = personal.find(p => p.legajo === legajo);

    if (!bombero) {

        alert("Legajo no registrado");
        return;

    }

    usuarioActivo = bombero;

    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";

    const titulo = document.querySelector("header p");

    if (titulo) {
        titulo.innerHTML =
            "Bienvenido " +
            bombero.nombre +
            " | " +
            bombero.funcion;
    }

}



// ================================
// ABRIR MÓDULOS
// ================================

function abrirModulo(modulo) {

    switch (modulo) {

        case "🚒 Equipamiento estructural":
            mostrarEquipamiento();
            break;

        default:
            alert("Módulo en desarrollo.");

    }

}
// ========================================
// APP.JS - PARTE 2
// MÓDULO EQUIPAMIENTO ESTRUCTURAL
// ========================================

function mostrarEquipamiento() {

    let html = `
        <h2>🚒 Equipamiento Estructural</h2>

        <input
            type="text"
            id="busqueda"
            placeholder="Buscar elemento..."
            onkeyup="buscarElemento()">

        <br><br>

        <button onclick="agregarElemento()">
            ➕ Agregar elemento
        </button>

        <br><br>

        <div id="listaEquipamiento">
    `;

    equipamientoEstructural.forEach((item, indice) => {

        html += `

        <div class="tarjeta">

            <h3>${item.nombre}</h3>

            <p><strong>Cantidad:</strong> ${item.cantidad}</p>

            <p><strong>Estado:</strong> ${item.estado}</p>

            <p><strong>Ubicación:</strong> ${item.ubicacion}</p>

            <p><strong>Observaciones:</strong> ${item.observaciones}</p>

            <button onclick="editarElemento(${indice})">
                ✏️ Editar
            </button>

            <button onclick="eliminarElemento(${indice})">
                🗑 Eliminar
            </button>

        </div>

        <hr>

        `;

    });

    html += "</div>";

    document.getElementById("panel").innerHTML = html;

}



// ================================
// BUSCADOR
// ================================

function buscarElemento() {

    const texto = document
        .getElementById("busqueda")
        .value
        .toLowerCase();

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(tarjeta => {

        if (tarjeta.innerText.toLowerCase().includes(texto)) {

            tarjeta.style.display = "block";

        } else {

            tarjeta.style.display = "none";

        }

    });

}
