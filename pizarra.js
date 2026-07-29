function cargarPizarra() {
    document.getElementById("app").innerHTML = `
        <div style="padding:20px;font-family:Arial,sans-serif">
            <h1>🚒 SIGIB 03</h1>
            <p>Sistema de Gestión de Inventario Bomberos</p>

            <hr>

            <button onclick="alert('Inventario')">📦 Inventario</button>
            <button onclick="alert('Movimientos')">🔄 Movimientos</button>
            <button onclick="alert('Reportes')">📊 Reportes</button>

            <p style="margin-top:20px;color:green;">
                ✅ SIGIB funcionando correctamente
            </p>
        </div>
    `;
}
