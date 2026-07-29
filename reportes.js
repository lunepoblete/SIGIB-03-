/* ==========================================
   SIGIB 03
   MÓDULO REPORTES
========================================== */

function mostrarReportes() {

    let totalMateriales = inventario.length;

    let operativos = inventario.filter(
        m => m.estado && m.estado.includes("Operativo")
    ).length;

    let mantenimiento = inventario.filter(
        m => m.estado && m.estado.includes("Mantenimiento")
    ).length;

    let fueraServicio = inventario.filter(
        m => m.estado && m.estado.includes("Fuera")
    ).length;

    let tareasPendientes = tareas.filter(
        t => t.estado == "Pendiente"
    ).length;

    let tareasFinalizadas = tareas.filter(
        t => t.estado == "Finalizada"
    ).length;

    let totalMovimientos = movimientos.length;

    document.getElementById("app").innerHTML = `

    <div class="contenedor">

        <h2>📊 Reportes</h2>

        <div class="card">
            <h3>📦 Inventario</h3>

            Materiales: <b>${totalMateriales}</b><br>
            🟢 Operativos: <b>${operativos}</b><br>
            🟡 Mantenimiento: <b>${mantenimiento}</b><br>
            🔴 Fuera de servicio: <b>${fueraServicio}</b>
        </div>

        <div class="card">
            <h3>📋 Pizarra</h3>

            Pendientes: <b>${tareasPendientes}</b><br>
            Finalizadas: <b>${tareasFinalizadas}</b>
        </div>

        <div class="card">
            <h3>🔄 Movimientos</h3>

            Total: <b>${totalMovimientos}</b>
        </div>

        <button onclick="cargarPizarra()">
            ⬅ Volver al menú
        </button>

    </div>

    `;

}

window.mostrarReportes = mostrarReportes;
