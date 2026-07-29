function cargarPizarra() {

    const app = document.getElementById("app");

    app.innerHTML = `

    <div class="contenedor">

        <h1>🚒 SIGIB 03</h1>

        <h2>Sistema de Gestión de Inventario Bomberos</h2>

        <div class="menu">

            <button onclick="abrirInventario()">
                📦 Inventario
            </button>

            <button onclick="buscarMaterial()">
                🔎 Buscar material
            </button>

            <button onclick="agregarMaterial()">
                ➕ Agregar material
            </button>

            <button onclick="verMovimientos()">
                📋 Movimientos
            </button>

            <button onclick="verReportes()">
                📊 Reportes
            </button>

        </div>

        <p class="estado">
            SIGIB 03 - Módulo operativo
        </p>

    </div>

    `;

}


// Carga inicial
cargarPizarra();
