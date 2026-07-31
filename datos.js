// ========================================
// SIGIB 03 - DATOS
// PARTE 1: PERSONAL
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
    },

    {
        legajo: "99",
        nombre: "SPINELLI Leonardo",
        funcion: "Of. Ayte."
    },

    {
        legajo: "137",
        nombre: "KULJKO Facundo",
        funcion: "Encargado Equipos a explosión"
    },

    {
        legajo: "103",
        nombre: "LOPEZ Cecilia",
        funcion: "Encargada Trauma"
    },

    {
        legajo: "150",
        nombre: "ORTIZ Ruben",
        funcion: "Encargado Incendios Forestales"
    },

    {
        legajo: "131",
        nombre: "SESTO Carlos",
        funcion: "Cabo 1°"
    },

    {
        legajo: "113",
        nombre: "OCARES Dario",
        funcion: "Encargado Comunicaciones"
    },

    {
        legajo: "149",
        nombre: "OVANDO Claudio",
        funcion: "Cabo 1°"
    },

    {
        legajo: "127",
        nombre: "SALAZAR Diego",
        funcion: "Encargado Rescate acuático"
    },

    {
        legajo: "130",
        nombre: "BRAVO Daniela",
        funcion: "Cabo 1°"
    },

    {
        legajo: "157",
        nombre: "SANCHEZ Franco",
        funcion: "Encargado Cadetes"
    },

    {
        legajo: "129",
        nombre: "GODOY Walter",
        funcion: "Cabo"
    },

    {
        legajo: "134",
        nombre: "HERRERA Damian",
        funcion: "Encargado Intendencia"
    },

    {
        legajo: "145",
        nombre: "CORIA Joaquin",
        funcion: "Encargado Incendios Estructurales"
    },

    {
        legajo: "167",
        nombre: "VIDAL Marcelo",
        funcion: "BV"
    },

    {
        legajo: "171",
        nombre: "MELLADO Karen",
        funcion: "BV"
    },

    {
        legajo: "174",
        nombre: "BARROSO Paola",
        funcion: "BV"
    },

    {
        legajo: "176",
        nombre: "BIANCHI Jose",
        funcion: "Auxiliar"
    },

    {
        legajo: "126",
        nombre: "MUÑOZ Eduardo",
        funcion: "Auxiliar"
    },

    {
        legajo: "183",
        nombre: "MANSILLA Maria Josefina",
        funcion: "BV"
    },

    {
        legajo: "193",
        nombre: "HUENUFIL Hector",
        funcion: "Auxiliar"
    },

    {
        legajo: "197",
        nombre: "PAILACURA Romina",
        funcion: "BV"
    },

    {
        legajo: "199",
        nombre: "ROSEMBLUN Rocio",
        funcion: "BV"
    },

    {
        legajo: "200",
        nombre: "SARAVIA Enzo",
        funcion: "Encargado Rescate Vehicular"
    },

    {
        legajo: "201",
        nombre: "KUCNER Lara",
        funcion: "Encargada Inventarios"
    },

    {
        legajo: "202",
        nombre: "BRUNO Juan",
        funcion: "Encargado ERA"
    },

    {
        legajo: "204",
        nombre: "VIVEROS Moira",
        funcion: "BV"
    },

    {
        legajo: "205",
        nombre: "GODOY Micaela",
        funcion: "BV"
    },

    {
        legajo: "207",
        nombre: "ROCHA Sergio",
        funcion: "Encargado GRIMP"
    },

    {
        legajo: "165",
        nombre: "DIAZ Lucas",
        funcion: "Auxiliar"
    },

    {
        legajo: "208",
        nombre: "BARROS Romina",
        funcion: "BV"
    },

    {
        legajo: "209",
        nombre: "POBLETE Luciano",
        funcion: "Encargado Ropería"
    },

    {
        legajo: "124",
        nombre: "PEREZ Ramiro",
        funcion: "BV"
    },

    {
        legajo: "210",
        nombre: "MUÑOZ Enzo",
        funcion: "BV"
    },

    {
        legajo: "211",
        nombre: "ROMERO Walter",
        funcion: "BV"
    },

    {
        legajo: "212",
        nombre: "AGOSTO Ailen",
        funcion: "BV"
    },

    {
        legajo: "213",
        nombre: "PAREDES Brisa",
        funcion: "BV"
    },

    {
        legajo: "215",
        nombre: "HUENUFIL Tiziano",
        funcion: "Auxiliar"
    }

];
// ========================================
// PARTE 2: MÓDULOS SIGIB 03
// ========================================

const modulos = [

    {
        nombre: "🚒 Incendio estructural",
        codigo: "IE",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "IE-DEP"
            },
            {
                nombre: "🚒 Móvil 32",
                codigo: "IE-32"
            },
            {
                nombre: "🚒 Móvil 38",
                codigo: "IE-38"
            },
            {
                nombre: "🚒 Móvil 40",
                codigo: "IE-40"
            }
        ]
    },

    {
        nombre: "🌲 Incendio forestal",
        codigo: "IF",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "IF-DEP"
            },
            {
                nombre: "🚒 Móvil 26",
                codigo: "IF-26"
            },
            {
                nombre: "🚒 Móvil 36",
                codigo: "IF-36"
            }
        ]
    },

    {
        nombre: "🚗 Rescate vehicular",
        codigo: "RV",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "RV-DEP"
            },
            {
                nombre: "🚒 Móvil 41",
                codigo: "RV-41"
            }
        ]
    },

    {
        nombre: "🩺 Trauma",
        codigo: "TR",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "TR-DEP"
            },
            {
                nombre: "🚒 Móvil 32",
                codigo: "TR-32"
            },
            {
                nombre: "🚒 Móvil 41",
                codigo: "TR-41"
            }
        ]
    },

    {
    nombre: "🌊 Rescate acuático",
    codigo: "RA",
    subdivisiones: [
        {
            nombre: "📦 Depósito",
            codigo: "RA-DEP"
        },
        {
            nombre: "🧰 Cajones 1° intervención",
            codigo: "RA-CAJ-1"
        }
    ]
},

    {
        nombre: "🪢 G.R.I.M.P.",
        codigo: "GRIMP",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "GRIMP-DEP"
            },
            {
                nombre: "🚒 Móvil 32",
                codigo: "GRIMP-32"
            },
            {
                nombre: "🚒 Móvil 41",
                codigo: "GRIMP-41"
            }
        ]
    },

    {
        nombre: "🫁 E.R.A. (Equipos de Respiración Autónoma)",
        codigo: "ERA",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "ERA-DEP"
            },
            {
                nombre: "🚒 Móvil 26",
                codigo: "ERA-26"
            },
            {
                nombre: "🚒 Móvil 32",
                codigo: "ERA-32"
            },
            {
                nombre: "🚒 Móvil 38",
                codigo: "ERA-38"
            }
        ]
    },

    {
        nombre: "👕 Ropería",
        codigo: "ROP",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "ROP-DEP"
            }
        ]
    },

    {
        nombre: "⚙️ Equipos a explosión",
        codigo: "EXP",
        subdivisiones: [
            {
                nombre: "📦 Depósito",
                codigo: "EXP-DEP"
            }
        ]
    }

];
// ========================================
// PARTE 3: INVENTARIO SIGIB 03
// ========================================

const inventario = {

    // 🚒 INCENDIO ESTRUCTURAL

    "IE-DEP": [

        {
            nombre: "MANGAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "LANZAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "REDUCTORES",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "HIDRANTES",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "MATERIAL DE VENTILACIÓN",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],


    "IE-32": [

        {
            nombre: "MANGAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "LANZAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "HERRAMIENTAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],


    "IE-38": [

        {
            nombre: "MANGAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "LANZAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "HERRAMIENTAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ],


    "IE-40": [

        {
            nombre: "MANGAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "LANZAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        },

        {
            nombre: "HERRAMIENTAS",
            cantidad: 0,
            estado: "Bueno",
            observaciones: ""
        }

    ]

};
