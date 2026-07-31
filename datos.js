// ========================================
// SIGIB 03 - DATOS
// ========================================


// ========================================
// PERSONAL
// ========================================

const personal = [

    {
        legajo: "72",
        nombre: "RIFO Raúl",
        funcion: "Jefe de cuerpo"
    },

    {
        legajo: "78",
        nombre: "ZUÑIGA Domingo",
        funcion: "2° Jefe de cuerpo"
    },

    {
        legajo: "76",
        nombre: "SCHOUA Gabriel",
        funcion: "Subcomandante"
    },

    {
        legajo: "73",
        nombre: "DE ANTUENO Ignacio",
        funcion: "Subcomandante"
    },

    {
        legajo: "31",
        nombre: "CURIÑANCO Jorge",
        funcion: "Subcomandante"
    },

    {
        legajo: "94",
        nombre: "GONZALEZ Eduardo",
        funcion: "Encargado Materiales"
    },

    {
        legajo: "95",
        nombre: "SALAZAR Luis",
        funcion: "Encargado Capacitación"
    },

    {
        legajo: "100",
        nombre: "MUÑOZ Patricio",
        funcion: "Encargado Automotores"
    }

];



// ========================================
// MÓDULOS SIGIB
// ========================================

const modulos = [

    {
        nombre: "🚒 Incendio estructural",
        subdivisiones: [
            "📦 Depósito",
            "🚒 Móvil 32",
            "🚒 Móvil 38",
            "🚒 Móvil 40"
        ]
    },


    {
        nombre: "🌲 Incendio forestal",
        subdivisiones: [
            "📦 Depósito",
            "🚒 Móvil 26",
            "🚒 Móvil 36"
        ]
    },


    {
        nombre: "🚗 Rescate vehicular",
        subdivisiones: [
            "📦 Depósito",
            "🚒 Móvil 41"
        ]
    },


    {
        nombre: "🩺 Trauma",
        subdivisiones: [
            "📦 Depósito",
            "🚒 Móvil 32",
            "🚒 Móvil 41"
        ]
    },


    {
        nombre: "🌊 Rescate acuático",
        subdivisiones: [
            "📦 Depósito"
        ]
    },


    {
        nombre: "🪢 G.R.I.M.P.",
        subdivisiones: [
            "📦 Depósito",
            "🚒 Móvil 32",
            "🚒 Móvil 41"
        ]
    },


    {
        nombre: "🫁 E.R.A. (Equipos de Respiración Autónoma)",
        subdivisiones: [
            "📦 Depósito",
            "🚒 Móvil 26",
            "🚒 Móvil 32",
            "🚒 Móvil 38"
        ]
    },


    {
        nombre: "👕 Ropería",
        subdivisiones: [
            "📦 Depósito"
        ]
    },


    {
        nombre: "⚙️ Equipos a explosión",
        subdivisiones: [
            "📦 Depósito"
        ]
    }

];



// ========================================
// INVENTARIO INICIAL
// ========================================

const inventariosIniciales = {


    "🚒 Incendio estructural_📦 Depósito": [

        {
            nombre: "Chaquetón estructural",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "Pantalón estructural",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    "🫁 E.R.A. (Equipos de Respiración Autónoma)_📦 Depósito": [

        {
            nombre: "Equipo ERA",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    "👕 Ropería_📦 Depósito": [

        {
            nombre: "Chaquetones",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ]


};
