// ========================================
// SIGIB 03 - DATOS
// ========================================


// ========================================
// PERSONAL
// ========================================

const personal = [

{
legajo:"72",
nombre:"RIFO Raúl",
funcion:"Jefe de cuerpo"
},

{
legajo:"78",
nombre:"ZUÑIGA Domingo",
funcion:"2° Jefe de cuerpo"
},

{
legajo:"76",
nombre:"SCHOUA Gabriel",
funcion:"Subcomandante"
},

{
legajo:"73",
nombre:"DE ANTUENO Ignacio",
funcion:"Subcomandante"
},

{
legajo:"31",
nombre:"CURIÑANCO Jorge",
funcion:"Subcomandante"
},

{
legajo:"94",
nombre:"GONZALEZ Eduardo",
funcion:"Encargado Materiales"
},

{
legajo:"95",
nombre:"SALAZAR Luis",
funcion:"Encargado Capacitación"
},

{
legajo:"100",
nombre:"MUÑOZ Patricio",
funcion:"Encargado Automotores"
},

{
legajo:"99",
nombre:"SPINELLI Leonardo",
funcion:"Of. Ayte."
},

{
legajo:"137",
nombre:"KULJKO Facundo",
funcion:"Encargado Equipos a explosión"
},

{
legajo:"103",
nombre:"LOPEZ Cecilia",
funcion:"Encargada Trauma"
},

{
legajo:"150",
nombre:"ORTIZ Ruben",
funcion:"Encargado Incendios Forestales"
},

{
legajo:"131",
nombre:"SESTO Carlos",
funcion:"Cabo 1°"
},

{
legajo:"113",
nombre:"OCARES Dario",
funcion:"Encargado Comunicaciones"
},

{
legajo:"149",
nombre:"OVANDO Claudio",
funcion:"Cabo 1°"
},

{
legajo:"127",
nombre:"SALAZAR Diego",
funcion:"Encargado Rescate acuático"
},

{
legajo:"130",
nombre:"BRAVO Daniela",
funcion:"Cabo 1°"
},

{
legajo:"157",
nombre:"SANCHEZ Franco",
funcion:"Encargado Cadetes"
},

{
legajo:"129",
nombre:"GODOY Walter",
funcion:"Cabo"
},

{
legajo:"134",
nombre:"HERRERA Damian",
funcion:"Encargado Intendencia"
},

{
legajo:"145",
nombre:"CORIA Joaquin",
funcion:"Encargado Incendios Estructurales"
},

{
legajo:"167",
nombre:"VIDAL Marcelo",
funcion:"BV"
},

{
legajo:"171",
nombre:"MELLADO Karen",
funcion:"BV"
},

{
legajo:"174",
nombre:"BARROSO Paola",
funcion:"BV"
},

{
legajo:"176",
nombre:"BIANCHI Jose",
funcion:"Auxiliar"
},

{
legajo:"126",
nombre:"MUÑOZ Eduardo",
funcion:"Auxiliar"
},

{
legajo:"183",
nombre:"MANSILLA Maria Josefina",
funcion:"BV"
},

{
legajo:"193",
nombre:"HUENUFIL Hector",
funcion:"Auxiliar"
},

{
legajo:"197",
nombre:"PAILACURA Romina",
funcion:"BV"
},

{
legajo:"199",
nombre:"ROSEMBLUN Rocio",
funcion:"BV"
},

{
legajo:"200",
nombre:"SARAVIA Enzo",
funcion:"Encargado Rescate Vehicular"
},

{
legajo:"201",
nombre:"KUCNER Lara",
funcion:"Encargada Inventarios"
},

{
legajo:"202",
nombre:"BRUNO Juan",
funcion:"Encargado ERA"
},

{
legajo:"204",
nombre:"VIVEROS Moira",
funcion:"BV"
},

{
legajo:"205",
nombre:"GODOY Micaela",
funcion:"BV"
},

{
legajo:"207",
nombre:"ROCHA Sergio",
funcion:"Encargado GRIMP"
},

{
legajo:"165",
nombre:"DIAZ Lucas",
funcion:"Auxiliar"
},

{
legajo:"208",
nombre:"BARROS Romina",
funcion:"BV"
},

{
legajo:"209",
nombre:"POBLETE Luciano",
funcion:"Encargado Ropería"
},

{
legajo:"124",
nombre:"PEREZ Ramiro",
funcion:"BV"
},

{
legajo:"210",
nombre:"MUÑOZ Enzo",
funcion:"BV"
},

{
legajo:"211",
nombre:"ROMERO Walter",
funcion:"BV"
},

{
legajo:"212",
nombre:"AGOSTO Ailen",
funcion:"BV"
},

{
legajo:"213",
nombre:"PAREDES Brisa",
funcion:"BV"
},

{
legajo:"215",
nombre:"HUENUFIL Tiziano",
funcion:"Auxiliar"
}

];
// ========================================
// MÓDULOS SIGIB 03
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
    }// ========================================
// INVENTARIOS INICIALES SIGIB 03
// ========================================

const inventariosIniciales = {


    // 🚒 INCENDIO ESTRUCTURAL

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
        },

        {
            nombre: "Casco incendio",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // 🌲 INCENDIO FORESTAL

    "🌲 Incendio forestal_📦 Depósito": [

        {
            nombre: "Mochila forestal",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // 🚗 RESCATE VEHICULAR

    "🚗 Rescate vehicular_📦 Depósito": [

        {
            nombre: "Equipo hidráulico",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // 🩺 TRAUMA

    "🩺 Trauma_📦 Depósito": [

        {
            nombre: "Botiquín trauma",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // 🌊 RESCATE ACUÁTICO

    "🌊 Rescate acuático_📦 Depósito": [

        {
            nombre: "Equipo rescate acuático",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // 🪢 GRIMP

    "🪢 G.R.I.M.P._📦 Depósito": [

        {
            nombre: "Cuerdas técnicas",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // 🫁 ERA

    "🫁 E.R.A. (Equipos de Respiración Autónoma)_📦 Depósito": [

        {
            nombre: "Equipo ERA completo",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "Máscara ERA",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // 👕 ROPERÍA

    "👕 Ropería_📦 Depósito": [

        {
            nombre: "Chaquetones",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "Pantalones",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],



    // ⚙️ EQUIPOS A EXPLOSIÓN

    "⚙️ Equipos a explosión_📦 Depósito": [

        {
            nombre: "Motosierra",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "Generador",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ]


};

];
