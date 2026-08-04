// ========================================
// SIGIB 03 - DATOS
// PARTE 1
// PERSONAL + MODULOS + INICIO INVENTARIO
// ========================================


// ========================================
// PERSONAL SIGIB 03
// ========================================

const personal = [

{
legajo:"72",
nombre:"RIFO Raul",
funcion:"Jefe de cuerpo",
areas:["TODAS"]
},

{
legajo:"78",
nombre:"ZUNIGA Domingo",
funcion:"2° Jefe de cuerpo",
areas:["TODAS"]
},

{
legajo:"76",
nombre:"SCHOUA Gabriel",
funcion:"Subcomandante",
areas:["TODAS"]
},

{
legajo:"73",
nombre:"DE ANTUENO Ignacio",
funcion:"Subcomandante",
areas:["TODAS"]
},

{
legajo:"31",
nombre:"CURIÑANCO Jorge",
funcion:"Subcomandante",
areas:["TODAS"]
},

{
legajo:"94",
nombre:"GONZALEZ Eduardo",
funcion:"Encargado Materiales",
areas:["TODAS"]
},

{
legajo:"95",
nombre:"SALAZAR Luis",
funcion:"Encargado Capacitacion",
areas:["CAP"]
},

{
legajo:"100",
nombre:"MUNOZ Patricio",
funcion:"Encargado Automotores",
areas:["AUT"]
},

{
legajo:"99",
nombre:"SPINELLI Leonardo",
funcion:"Of. Ayte.",
areas:[]
},

{
legajo:"137",
nombre:"KULJKO Facundo",
funcion:"Encargado Equipos a explosion",
areas:["EXP"]
},

{
legajo:"103",
nombre:"LOPEZ Cecilia",
funcion:"Encargada Trauma",
areas:["TR"]
},

{
legajo:"150",
nombre:"ORTIZ Ruben",
funcion:"Encargado Incendios Forestales",
areas:["IF"]
},

{
legajo:"131",
nombre:"SESTO Carlos",
funcion:"Cabo 1°",
areas:[]
},

{
legajo:"113",
nombre:"OCARES Dario",
funcion:"Encargado Comunicaciones",
areas:["COM"]
},

{
legajo:"149",
nombre:"OVANDO Claudio",
funcion:"Cabo 1°",
areas:[]
},

{
legajo:"127",
nombre:"SALAZAR Diego",
funcion:"Encargado Rescate acuatico",
areas:["RA"]
},

{
legajo:"130",
nombre:"BRAVO Daniela",
funcion:"Cabo 1°",
areas:["CAP"]
},

{
legajo:"157",
nombre:"SANCHEZ Franco",
funcion:"Encargado Cadetes",
areas:["CAD"]
},

{
legajo:"129",
nombre:"GODOY Walter",
funcion:"Cabo",
areas:["IF"]
},

{
legajo:"134",
nombre:"HERRERA Damian",
funcion:"Encargado Intendencia",
areas:["INT"]
},

{
legajo:"145",
nombre:"CORIA Joaquin",
funcion:"Encargado Incendios Estructurales",
areas:["IE"]
},

{
legajo:"167",
nombre:"VIDAL Marcelo",
funcion:"BV",
areas:["ERA","EXP"]
},

{
legajo:"171",
nombre:"MELLADO Karen",
funcion:"BV",
areas:["RA"]
},

{
legajo:"174",
nombre:"BARROSO Paola",
funcion:"BV",
areas:["IE"]
},

{
legajo:"176",
nombre:"BIANCHI Jose",
funcion:"Auxiliar",
areas:[]
},

{
legajo:"126",
nombre:"MUÑOZ Eduardo",
funcion:"Auxiliar",
areas:[]
},

{
legajo:"183",
nombre:"MANSILLA Maria Josefina",
funcion:"BV",
areas:["INT"]
},

{
legajo:"193",
nombre:"HUENUFIL Hector",
funcion:"Auxiliar",
areas:[]
},

{
legajo:"197",
nombre:"PAILACURA Romina",
funcion:"BV",
areas:["INT"]
},

{
legajo:"199",
nombre:"ROSEMBLUN Rocio",
funcion:"BV",
areas:["RV","CAD"]
},

{
legajo:"200",
nombre:"SARAVIA Enzo",
funcion:"Encargado Rescate Vehicular",
areas:["RV","TR"]
},

{
legajo:"201",
nombre:"KUCNER Lara",
funcion:"Encargada Inventarios",
areas:["INV","IE"]
},

{
legajo:"202",
nombre:"BRUNO Juan",
funcion:"Encargado ERA",
areas:["ERA"]
},

{
legajo:"204",
nombre:"VIVEROS Moira",
funcion:"BV",
areas:["TR"]
},

{
legajo:"205",
nombre:"GODOY Micaela",
funcion:"BV",
areas:["IF"]
},

{
legajo:"207",
nombre:"ROCHA Sergio",
funcion:"Encargado GRIMP",
areas:["GRIMP","ERA"]
},

{
legajo:"165",
nombre:"DIAZ Lucas",
funcion:"Auxiliar",
areas:[]
},

{
legajo:"208",
nombre:"BARROS Romina",
funcion:"BV",
areas:["ROP"]
},

{
legajo:"209",
nombre:"POBLETE Luciano",
funcion:"Encargado Roperia",
areas:["ROP"]
},

{
legajo:"124",
nombre:"PEREZ Ramiro",
funcion:"BV",
areas:["TR","CAP"]
},

{
legajo:"210",
nombre:"MUÑOZ Enzo",
funcion:"BV",
areas:["IF"]
},

{
legajo:"211",
nombre:"ROMERO Walter",
funcion:"BV",
areas:["GRIMP"]
},

{
legajo:"212",
nombre:"AGOSTO Ailen",
funcion:"BV",
areas:["TR"]
},

{
legajo:"213",
nombre:"PAREDES Brisa",
funcion:"BV",
areas:["ERA","GRIMP"]
},

{
legajo:"215",
nombre:"HUENUFIL Tiziano",
funcion:"Auxiliar",
areas:[]
}

];


// ========================================
// MODULOS SIGIB 03
// ========================================

const modulos=[


{
nombre:"🚒 Incendio estructural",
codigo:"IE",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"IE-DEP"},
{nombre:"🚒 Movil 32",codigo:"IE-32"},
{nombre:"🚒 Movil 38",codigo:"IE-38"},
{nombre:"🚒 Movil 40",codigo:"IE-40"}

]
},


{
nombre:"🌲 Incendio forestal",
codigo:"IF",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"IF-DEP"},
{nombre:"🚒 Movil 26",codigo:"IF-26"},
{nombre:"🚒 Movil 36",codigo:"IF-36"},
{nombre:"🚒 Movil 42",codigo:"IF-42"}

]
},


{
nombre:"🚗 Rescate vehicular",
codigo:"RV",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"RV-DEP"},
{nombre:"🚒 Movil 41",codigo:"RV-41"}

]
},


{
nombre:"🩺 Trauma",
codigo:"TR",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"TR-DEP"},
{nombre:"🚒 Movil 32",codigo:"TR-32"},
{nombre:"🚒 Movil 41",codigo:"TR-41"}

]
},


{
nombre:"🌊 Rescate acuatico",
codigo:"RA",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"RA-DEP"},
{nombre:"🧰 Cajones 1° intervencion",codigo:"RA-CAJ"}

]
},


{
nombre:"🪢 G.R.I.M.P.",
codigo:"GRIMP",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"GRIMP-DEP"},
{nombre:"🚒 Movil 32",codigo:"GRIMP-32"},
{nombre:"🚒 Movil 41",codigo:"GRIMP-41"}

]
},


{
nombre:"🫁 E.R.A.",
codigo:"ERA",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"ERA-DEP"},
{nombre:"🚒 Movil 26",codigo:"ERA-26"},
{nombre:"🚒 Movil 32",codigo:"ERA-32"},
{nombre:"🚒 Movil 38",codigo:"ERA-38"}

]
},


{
nombre:"👕 Roperia",
codigo:"ROP",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"ROP-DEP"}

]
},


{
nombre:"⚙️ Equipos a explosion",
codigo:"EXP",
subdivisiones:[

{nombre:"📦 Deposito",codigo:"EXP-DEP"}

]
}

];



// ========================================
// INVENTARIO SIGIB 03
// INICIO
// INCENDIO ESTRUCTURAL
// ========================================


const inventario={


// ========================================
// INCENDIO ESTRUCTURAL
// MOVIL 32
// ========================================

"IE-32":[

{
nombre:"Cinta de peligro",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Caja de guantes talle M",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Linternas",
cantidad:3,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Guantes dielectricos",
cantidad:2,
estado:"Bueno",
observaciones:"Pares - Cabina delantera"
},

{
nombre:"Guia Ciquime",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Camara termica",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Equipos ERA completos",
cantidad:4,
estado:"Bueno",
observaciones:"Cabina trasera - 7 mascaras disponibles"
},

{
nombre:"Collarin Philadelphia",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Cabezales",
cantidad:4,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Botiquin",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Llaves compartimentos pequeños",
cantidad:2,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Cilindros ERA repuesto",
cantidad:3,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Collarin",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Reflector",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Cilindros ERA repuesto",
cantidad:2,
estado:"Bueno",
observaciones:"Compartimento pequeño lado acompañante - arriba"
},

{
nombre:"Agua",
cantidad:1,
estado:"Bueno",
observaciones:"Compartimento pequeño lado acompañante - abajo"
},

{
nombre:"Torre de iluminacion",
cantidad:1,
estado:"Bueno",
observaciones:"Compartimento pequeño lado chofer - arriba"
},

{
nombre:"Hacha de mano multiproposito",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Masa",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Corta pernos",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Hidrante",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Tijera de poda",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Pala corazon",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Manga 45 Storz",
cantidad:1,
estado:"Bueno",
observaciones:"Estibada con bifurcador 45 a 38 Storz"
},

{
nombre:"Entrada abastecimiento 63 Storz",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Salida agua 45 y 38 Storz",
cantidad:2,
estado:"Bueno",
observaciones:"Persiana acompañante 1"
},

{
nombre:"Lanza Protek 38 Storz combinada",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Lanza Leader 45 Storz combinada",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Lanza chorro pleno 38 Storz",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Bifurcador 63 a 45-45 Storz",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Reduccion 45 a 38 Storz",
cantidad:3,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Propak",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Mangas 38 Storz",
cantidad:2,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Mangas 45 Storz",
cantidad:2,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Mangas 63 Storz",
cantidad:2,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
},

{
nombre:"Control bomba",
cantidad:1,
estado:"Bueno",
observaciones:"Persiana acompañante 2"
}

],
    // ========================================
// INCENDIO ESTRUCTURAL
// MOVIL 38
// ========================================

"IE-38":[

{
nombre:"Linternas",
cantidad:2,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Guantes dielectricos",
cantidad:2,
estado:"Bueno",
observaciones:"Pares - Cabina delantera"
},

{
nombre:"Chaleco reflectario",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Botiquin",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Barbijos",
cantidad:2,
estado:"Bueno",
observaciones:"Bolsas - Cabina delantera"
},

{
nombre:"Llave de acople francesa",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Llave bomba municipal",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Llaves de acople",
cantidad:3,
estado:"Bueno",
observaciones:"Puerta chofer"
},

{
nombre:"Cinta de peligro",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Guia Ciquime",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Birome y anotador",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Lote de salvamento",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Torre de iluminacion",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina delantera"
},

{
nombre:"Extintor triclase",
cantidad:1,
estado:"Bueno",
observaciones:"Debajo asiento acompañante"
},

{
nombre:"Equipos ERA completos",
cantidad:4,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Cilindros ERA repuesto",
cantidad:2,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Mascaras ERA",
cantidad:4,
estado:"Bueno",
observaciones:"Cabina trasera"
},

{
nombre:"Guantes nitrilo",
cantidad:4,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Guantes latex",
cantidad:1,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Vendas 10 cm",
cantidad:2,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Venda elastica 10 cm",
cantidad:1,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Baja lenguas",
cantidad:9,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Gasas 30x30",
cantidad:5,
estado:"Bueno",
observaciones:"Paquetes - Botiquin"
},

{
nombre:"Cinta hipoalergenica",
cantidad:1,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Vendas cambric 20 cm",
cantidad:2,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Caladryl",
cantidad:1,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Hipoglos",
cantidad:1,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Polvo cicatrizante",
cantidad:1,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Crema quemaduras",
cantidad:1,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Solucion fisiologica",
cantidad:2,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Toallas humedas",
cantidad:1,
estado:"Bueno",
observaciones:"Paquete - Botiquin"
},

{
nombre:"Apositos grandes",
cantidad:7,
estado:"Bueno",
observaciones:"Botiquin"
},

{
nombre:"Pañal triangulo evacuacion",
cantidad:1,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Arneses",
cantidad:2,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Cintas tubulares azules",
cantidad:3,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Cintas tubulares rojas",
cantidad:3,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Cubre cuerda",
cantidad:2,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Mosquetones rojos",
cantidad:6,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Poleas plateadas",
cantidad:2,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Ocho de rescate Courant",
cantidad:1,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Anillo ventral",
cantidad:1,
estado:"Bueno",
observaciones:"Lote de salvamento"
},

{
nombre:"Cuerda 30 metros",
cantidad:1,
estado:"Bueno",
observaciones:"Lote de salvamento"
},
    ],
// ========================================
// INCENDIO ESTRUCTURAL
// MOVIL 40
// ========================================

"IE-40":[

{
nombre:"Manga 63 Storz",
cantidad:1,
estado:"Bueno",
observaciones:"Caja de herramientas lado acompañante"
},

{
nombre:"Acople 63 Storz a 70 Frances",
cantidad:1,
estado:"Bueno",
observaciones:"Caja de herramientas lado acompañante"
},

{
nombre:"Llave de acople",
cantidad:1,
estado:"Bueno",
observaciones:"Caja de herramientas lado acompañante"
},

{
nombre:"Extintor",
cantidad:1,
estado:"Bueno",
observaciones:"Caja de herramientas lado acompañante"
},

{
nombre:"Crique",
cantidad:1,
estado:"Bueno",
observaciones:"Caja de herramientas lado acompañante"
},

{
nombre:"Llave bomba municipal",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina"
},

{
nombre:"Base",
cantidad:1,
estado:"Bueno",
observaciones:"Cabina"
},

{
nombre:"Manguerote de succion 63 Frances",
cantidad:1,
estado:"Bueno",
observaciones:"Parte superior"
}

],
    // ========================================
// INCENDIO ESTRUCTURAL
// DEPOSITO
// ========================================

"IE-DEP":[

{
nombre:"Mangas 20mm Storz",
cantidad:3,
estado:"Bueno",
observaciones:"Depósito Incendio Estructural"
},

{
nombre:"Mangas 38mm Storz",
cantidad:7,
estado:"Bueno",
observaciones:"Depósito Incendio Estructural"
},

{
nombre:"Mangas 63mm Storz",
cantidad:49,
estado:"Bueno",
observaciones:"Depósito Incendio Estructural"
},

{
nombre:"Mangas 63mm Storz empaquetadas",
cantidad:20,
estado:"Bueno",
observaciones:"Depósito Incendio Estructural"
},

{
nombre:"Mangas 63mm Storz de tela",
cantidad:4,
estado:"Bueno",
observaciones:"Depósito Incendio Estructural"
},

{
nombre:"Lanza Leader 38mm Storz",
cantidad:1,
estado:"Bueno",
observaciones:"40-400 L/minuto. 6 Bar. Posee llave de corte, selector de caudal y selector de chorro"
},

{
nombre:"Lanza Leader 45mm Storz",
cantidad:1,
estado:"Bueno",
observaciones:"0-500 L/minuto. 8 Bar. Posee llave de corte, selector de caudal y selector de chorro"
},

{
nombre:"Lanza Viper 38mm rosca fina",
cantidad:1,
estado:"Bueno",
observaciones:"7 Bar - 16 Bar máximo. Posee llave de corte y selector de chorro"
},

{
nombre:"Monitor de pie",
cantidad:1,
estado:"Bueno",
observaciones:"Acoples 63mm y 45mm Storz"
},

{
nombre:"Acople reductor 63mm a 45mm Storz",
cantidad:1,
estado:"Bueno",
observaciones:"Depósito Incendio Estructural"
}

]

};
    // ========================================
// SIGIB 03
// PARTE 2
// FORESTAL + RESCATE VEHICULAR + GRIMP + ERA
// ========================================



// ========================================
// INCENDIO FORESTAL
// ========================================


"IF-DEP":[

{
nombre:"Mangas",
cantidad:145,
estado:"Bueno",
observaciones:
"63 Sthor:71 | 63 Acople Frances:29 | 40 Acople Frances:4 | 38 Wilburt:7 | 40 rosca red incendio:2 | 38 Trandem:2 | 38 Sthor:8 | 20 Sthor:3 | 20 Wilburt:4"
},

{
nombre:"Herramientas forestales",
cantidad:50,
estado:"Bueno",
observaciones:
"Mc Leod:12 | Bate fuego:15 | Rosones grandes:10 | Rosones chicos:15 | Palas:2 | Machete:1"
},

{
nombre:"Lanzas",
cantidad:7,
estado:"Bueno",
observaciones:
"Combinada con corte 1 pulgada:1 | Chorro pleno 40:5 | Boca de pato 40:1"
},

{
nombre:"Accesorios forestales",
cantidad:25,
estado:"Bueno",
observaciones:
"Hidroyectores 70 a 40:4 | Filtros:2 | Acople 70 a 110:1 | Bifurcador 70 a salida 40-40:6 | Bifurcador 40 salida 20-20:5 | Mochilas de agua:6 | Manguerote con filtro amarillo:1 | Mochila transporte manga:1"
}

],



"IF-26":[

{
nombre:"Material cabina Movil 26",
cantidad:1,
estado:"Bueno",
observaciones:
"2 Palas | 2 Pulasky | 2 Mc Leod | Motosierra Stihl 381 con kit herramientas | Casco motosierra | Botiquin | Caja herramientas | Bomba espalda | Tabla | 2 cabezales | 2 llaves acople"
},

{
nombre:"Lanzas y accesorios Movil 26",
cantidad:15,
estado:"Bueno",
observaciones:
"Lanza chorro pleno francesa corte 40 | Lanza finlandesa 70 frances con corte | Lanzas 20 POK | Lanzas 40 Leader | Boca de pato | Lanzas forestales | Trifurcadores y bifurcadores"
}

],



"IF-36":[

{
nombre:"Material Movil 36",
cantidad:1,
estado:"Bueno",
observaciones:
"Manga 40 | Mochila forestal | Lanza pavo real | Manguera aire | Botiquin | Manguerote con filtro | Motobomba FEMA alta presion | Curva abastecimiento | Llave ruedas T | Linga acero | Flotante"
},

{
nombre:"Accesorios Movil 36",
cantidad:1,
estado:"Bueno",
observaciones:
"Bifurcador 40-20-20 | Bifurcador 70-40-40 | Trifurcador 40-40-20-20 | Acople 110-70 | Acople 63 Storz a 70 Frances | Acople 110 a 110 Frances | Estrangulador | Corte americano | Hidroyector | Filtro 110"
}

],



"IF-42":[

{
nombre:"Kit forestal ataque rapido",
cantidad:1,
estado:"Bueno",
observaciones:
"2 Palas | 1 Pulasky | 1 Mc Leod | 1 Chupon | 1 Bidon combustible | 7 Mangas de 1 pulgada | Lanza chorro pleno 1 pulgada | Lanza con corte 1 pulgada"
}

],





// ========================================
// RESCATE VEHICULAR
// ========================================


"RV-41":[

{
nombre:"Caja trasera principal",
cantidad:1,
estado:"Bueno",
observaciones:
"Motor Holmatro doble via | Tacos escalonados 2 pares regular | Cuña grande | Taco plano x2 | Mangueras Holmatro azul y naranja | Puntales Holmatro | Bidon combustible solo nafta super | Haligan rescate | Soga | Cizalla"
},

{
nombre:"Cajon verde",
cantidad:1,
estado:"Bueno",
observaciones:
"Cuñas distintos tamaños x5 | Tijera cortaperno | Sierra de mano | Barreta de mano"
},

{
nombre:"Dentro cajon madera",
cantidad:1,
estado:"Bueno",
observaciones:
"Tijera multiproposito Holmatro | Ram Holmatro con extension"
},

{
nombre:"Caja Bosch negra",
cantidad:1,
estado:"Bueno",
observaciones:
"Sierra sable Bosch | 2 baterias Bosch Litio Ion 18V 4Ah | 3 hojas corte metal"
},

{
nombre:"Cajonera lado chofer",
cantidad:1,
estado:"Bueno",
observaciones:
"Film adhesivo para romper cristales | Sistema polea bloqueo aperturas: 1 simple negro y 1 doble polea celeste"
},

{
nombre:"Cajonera lado acompañante",
cantidad:1,
estado:"Bueno",
observaciones:
"Linga de 5 toneladas"
},

{
nombre:"Herramientas cabina",
cantidad:3,
estado:"Bueno",
observaciones:
"Rompecristales Holmatro tipo lapicera | Cortacinturon naranja | Martillo rompecristales"
}

],



// ========================================
// GRIMP
// ========================================


"GRIMP-DEP":[

{
nombre:"Arnes Pelvico N°1",
cantidad:1,
estado:"Bueno",
observaciones:
"Cordin verde | Polea Courant plateada | Descensor Spider naranja | Mosqueton Kong Oval naranja | 3 Mosquetones Courant rojos ovales | Bloqueador pecho Kong rojo | Puño Jumar Kong | 2 Cabos de vida"
},

{
nombre:"Arnes Integral N°2",
cantidad:1,
estado:"Bueno",
observaciones:
"Cordin verde | Polea ISC | Descensor Spider | 2 Mosquetones Kong naranja | Mosqueton Kong plateado | Mosqueton Courant rojo | Bloqueador pecho Kong | Puño Jumar verde | 2 Cabos de vida"
},

{
nombre:"Arnes Pelvico N°3",
cantidad:1,
estado:"Bueno",
observaciones:
"Cordin Courant | Descensor Spider naranja | Mosqueton Protecta negro | 2 Mosquetones Courant rojo | Mosqueton Kong naranja | Mosqueton Kong plateado | Bloqueador pecho Kong | Puño Jumar verde | Pedal | 2 Cabos de vida"
},

{
nombre:"Arnes Integral N°4",
cantidad:1,
estado:"Bueno",
observaciones:
"Cordin verde | Polea Serrano roja | Descensor Stop Petzl | Mosqueton Courant rojo | 3 Mosquetones Kong naranja | Bloqueador pecho Petzl | Puño Jumar Atlas verde | Pedal | 2 Cabos de vida"
},

{
nombre:"Arnes Pelvico N°5",
cantidad:1,
estado:"Bueno",
observaciones:
"Cordin verde | Descensor Spider naranja | 3 Mosquetones Kong naranja | Mosqueton Petzl plateado | Bloqueador pecho Kong rojo | Puño Jumar Atlas verde | 2 Cabos de vida"
}

],



// ========================================
// ERA
// ========================================


"ERA-38":[

{
nombre:"Tubos y arneses ERA Movil 38",
cantidad:6,
estado:"Bueno",
observaciones:
"Tubo 12 IJ346574 año 2012 | Tubo 15 IJ435406 año 2020 | Tubo 19 IJ449999 año 2024 | Tubo 17 IJ445853 año 2022 | Repuesto DG442327 año 2014 | Repuesto DG422342 año 2014"
}

],


"ERA-32":[

{
nombre:"Tubos ERA Movil 32",
cantidad:13,
estado:"Bueno",
observaciones:
"Tubos: 24 IJ450378 | 23 IJ450086 | 25 IJ451714 | 16 IJ435401 | 18 IJ445855 | 26 IG451840 | 11 IJ346878 | Laterales 20 IJ444906 | 21 IJ449946 | 22 IJ449862 | Puertita lateral 13 IJ394743 | 14 IJ394614"
}

],


"ERA-DEP":[

{
nombre:"Cilindros ERA deposito",
cantidad:9,
estado:"Bueno",
observaciones:
"WK521176 | DG230078 | DG117231 | DG116733 | WK117222 | WK521168 | DG116693 | DG117218 | DG116685"
}

],
    // ========================================
// TRAUMA
// ========================================


// ========================================
// MOVIL 41
// ========================================


"TR-41":[

{
nombre:"Compartimiento lado conductor",
cantidad:1,
estado:"Bueno",
observaciones:
"3 juegos de cabezales | Mochila azul oxigeno: tubo oxigeno, mascara adulto y pediatrica, bigotera adulto y pediatrica, AMBU adulto y pediatrico | DEA bolso amarillo"
},

{
nombre:"Interior caja",
cantidad:1,
estado:"Bueno",
observaciones:
"Luz de escena roja"
},

{
nombre:"Compartimiento lado acompañante",
cantidad:1,
estado:"Bueno",
observaciones:
"BOA | 3 cajas guantes S M L | Chaleco extricacion | Bolso negro collarines: 5 adultos planos y 3 pediatricos planos"
},

{
nombre:"Mochila azul trauma",
cantidad:1,
estado:"Bueno",
observaciones:
"Ferula semirigida SAM x1 | Ferula semirigida SAM chica x2 | AMBU adulto x1 | Cintas hipoalergenicas x4 | Apositos grandes x4 | Sobres gasa chica x6 | Bolso naranja con canulas x1 | Sachet solucion salina x1"
},

{
nombre:"Bolso negro",
cantidad:1,
estado:"Bueno",
observaciones:
"Glucometro x1 | Tensiometro manual x1 | Tensiometro pediatrico x1 | Estetoscopio x1"
},

{
nombre:"Bolso rojo",
cantidad:1,
estado:"Bueno",
observaciones:
"Gasas x10 | Apositos x4 | Vendas x5 | Tijeras x2"
},

{
nombre:"Bolsillo izquierdo",
cantidad:1,
estado:"Bueno",
observaciones:
"Solucion fisiologica sachet x2 | Solucion fisiologica individual x4"
},

{
nombre:"Bolsillo derecho",
cantidad:1,
estado:"Bueno",
observaciones:
"Ferulas con elastico x2 | Gasas grandes x3 | Vendas Cambric 20 mm x3"
},

{
nombre:"Bolsillo delantero",
cantidad:1,
estado:"Bueno",
observaciones:
"Mantas termicas x2 | Torniquetes x2 | Kit examinador x1 | Tijera trauma x1 | Barbijos N95 x8"
}

],



// ========================================
// MOVIL 32
// ========================================


"TR-32":[

{
nombre:"Bolso rojo 3er persiana lado conductor",
cantidad:1,
estado:"Bueno",
observaciones:
"Collarin Frances talle S x1 | Collarin pediatrico x2 | Collarin regulable adultos x2 | Solucion fisiologica x1 | Mascara Pocket RCP x1 | Cinta hipoalergenica x2 | Gasa rollo x2 | Gasa compresion paquete x8 | Manta termica x2 | Ferulas SAM chicas x2 | Sobres apositos x3 | Tubo oxigeno x1 | Mascara reservorio adulto x1 | Mascara reservorio pediatrica x1 | Bigoteras oxigeno x2 | Chaleco extricacion x1"
},

{
nombre:"Persiana trasera",
cantidad:2,
estado:"Bueno",
observaciones:
"Tablas"
},

{
nombre:"Interior movil",
cantidad:2,
estado:"Bueno",
observaciones:
"Juegos de cabezales"
},

{
nombre:"Botiquin interior",
cantidad:1,
estado:"Bueno",
observaciones:
"Caja guantes nitrilo talle S x1 | Caja guantes nitrilo talle M x1 | Paquete apositos x4 | Guantes quirurgicos sobres x2 | Respirador descartable x1 | Gasa en rollo x1"
}

],



// ========================================
// MOVIL 26
// ========================================


"TR-26":[

{
nombre:"Botiquin movil 26",
cantidad:1,
estado:"Bueno",
observaciones:
"Guantes x7 | Vendas 10 cm x3 | Venda elastica 10 cm x1 | Paquetes gasa 30x30 x7 | Bajalengua x1 | Bolsa termosellable x2 | Cinta tela x1 | Paquetes gasa grandes x3 | Sachet solucion fisiologica x1 | Hipoglos x1 | Apositos grandes x3 | Venda 20 cm x1 | Crema quemaduras x1 | Caladryl x1 | Talco cicatrizante x1 | Toallas humedas x1 | Tijera trauma x1"
}

],



// ========================================
// MOVIL 38
// ========================================


"TR-38":[

{
nombre:"Botiquin movil 38",
cantidad:1,
estado:"Bueno",
observaciones:
"Guantes nitrilo x4 | Guante latex x1 | Vendas 10 cm x2 | Tijera trauma x1 | Bajalengua x9 | Paquetes gasa 30x30 x5 | Solucion fisiologica individual x4 | Venda Cambric 20 cm x2 | Caladryl x1 | Hipoglos x1 | Polvo cicatrizante x1 | Crema quemaduras x1 | Toallas humedas x1 | Pinza x1 | Apositos grandes x2"
}

],
    // ========================================
// DEPOSITO TRAUMA
// ========================================


"TR-DEP":[


{
nombre:"Chalecos de extricacion",
cantidad:6,
estado:"Bueno",
observaciones:
"Spencer verde x1 completo | Amarillos x2 completos | Rojos x2 falta almohada | Verde oscuro con bolsa naranja x1 falta almohada"
},


{
nombre:"Tablas",
cantidad:9,
estado:"Bueno",
observaciones:
"Plastica roja x2 completa | Plastica amarilla x3 completa | Pediatricas acolchonadas x2 (1 sin cabezales) | Madera x1 | Tabla corta plastica amarilla x1"
},


{
nombre:"Cabezales",
cantidad:23,
estado:"Bueno",
observaciones:
"Rojos cordura acolchonados x5 OK | Rojos plasticos macizos x16 OK | Amarillos macizos x2 OK"
},


{
nombre:"Collares cervicales",
cantidad:8,
estado:"Bueno",
observaciones:
"Frances verde talle L x4 | Frances talle S x2 | Filadelfia talle L x2"
},


{
nombre:"Collares planos",
cantidad:14,
estado:"Bueno",
observaciones:
"Pediatricos planos x7 | Adultos regulables nuevos x7"
},


{
nombre:"Accesorios tablas",
cantidad:12,
estado:"Bueno",
observaciones:
"Velcros tablas nuevos x4 pares | Velcros usados x5 pares | Araña x1 | Cintas sujeta cabezales verdes y negro nuevas x2 | Simples negras x2 | Cintas naranjas x2"
},


{
nombre:"Oxigenoterapia",
cantidad:28,
estado:"Bueno",
observaciones:
"Bigoteras x11 | Mascarillas pediatricas con manguera y reservorio x6 | Mascarillas adultos x7 | Manguera dosificadora x1 | Tubo oxigeno verde aluminio cargado x1 | Tubos acero diferentes tamaños fuera de servicio x3"
},


{
nombre:"AMBU",
cantidad:5,
estado:"Bueno",
observaciones:
"AMBU adulto x2 | AMBU adulto en caja sin mascara x1 | AMBU pediatricos x2 + 1 mascarita"
},


{
nombre:"Guantes nitrilo",
cantidad:12,
estado:"Bueno",
observaciones:
"Cajas cerradas x10: talle S x3 | talle M x2 | talle L x1 | Cajas individuales: talle L x6 | talle S x1"
},


{
nombre:"Instrumental",
cantidad:0,
estado:"Bueno",
observaciones:
"Estetoscopios x5 OK | Tensiometros: 3 fuera de servicio, 1 manual en estuche verde OK, 1 automatico OK | Glucometro fuera de servicio con tiras vencidas"
},


{
nombre:"DEA",
cantidad:0,
estado:"Fuera de servicio",
observaciones:
"DEA Frances x1 fuera de servicio | Baterias x4 fuera de servicio | Cargador x1 fuera de servicio | Simulador x1 fuera de servicio | Parches x15 fuera de servicio | DEA Frances chico bolso con parches fuera de servicio | DEA americano fuera de servicio sin pilas | Parches pediatricos x3 | Parches adultos x3 | Parche abierto x1"
},


{
nombre:"Cintas adhesivas",
cantidad:17,
estado:"Bueno",
observaciones:
"Cintas chicas"
},


{
nombre:"Mantas termicas",
cantidad:4,
estado:"Bueno",
observaciones:
"Nuevas y usadas"
},


{
nombre:"Insumos varios",
cantidad:0,
estado:"Bueno",
observaciones:
"Polvo cicatrizante FARMX x1 | Muchas muestras medicas individuales | Salbutral aerosol inhalacion x4 | Spray nasal x8 | Yodopovidona x1"
},


{
nombre:"Gasas y apositos",
cantidad:145,
estado:"Bueno",
observaciones:
"Gasa 30x30 caja x1 | Gasa 10x10 sobres x8 | Gasas 15x15 sobres x42 | Apositos grandes 10x10 x77 | Apositos grandes 15x15 x11"
},


{
nombre:"Solucion fisiologica",
cantidad:36,
estado:"Bueno",
observaciones:
"Individuales x18 | Sachet plasticos x18"
},


{
nombre:"Cremas quemaduras",
cantidad:22,
estado:"Bueno",
observaciones:
"Crema quemaduras tamaños varios x18 | Platsul sobres x55 cajas de 5 | Platsul 300 gr x2 | Platsul 200 gr x2"
},


{
nombre:"Vendas Cambric",
cantidad:59,
estado:"Bueno",
observaciones:
"10 cm x3 mts x54 | 7 cm x3 mts x1 | 20 cm x3 mts x2 | Grandes x2"
},


{
nombre:"Colchones de vacio",
cantidad:4,
estado:"Bueno",
observaciones:
"Grandes x2 | Chicos x2 | Bolso azul con ferulas de vacio x1"
},


{
nombre:"Guantes especiales",
cantidad:6,
estado:"Bueno",
observaciones:
"Guantes dialecticos x3 pares | Guantes nitrilo plus x3 pares"
},


{
nombre:"Trajes aproximacion",
cantidad:14,
estado:"Bueno",
observaciones:
"Chemax 1: talle M x2 | Amarillos talle L x1 | Amarillos talle XL x8 | Chemax 3 grises talle XL x4 | Blancos talle L x3"
},


{
nombre:"Bolsos y capacitacion",
cantidad:0,
estado:"Bueno",
observaciones:
"Bigoteras administracion oxigeno x10 | Caja mascarillas adulto y pediatrico oxigeno x1 | Campos quirurgicos x5 | Bolso rosa ferulas inflables entre 80 y 90 unidades de diferentes tamaños | Bolso verde capacitacion: set hemorragia, vendas, cinta, solucion fisiologica, gasas | Oximetro x1 | Estetoscopio x1 | Bolso verde AMBU set intubacion completo | Bolso azul set vias pediatrico | Canulas nasofaringeas x8"
}

],
    // ========================================
// RESCATE ACUATICO
// ========================================


"RA-DEP":[


{
nombre:"Trajes de neoprene",
cantidad:23,
estado:"Bueno",
observaciones:
"Talle S x1 | Talle M x8 | Talle L x8 | Talle XL x3 | Talle XXL x3"
},


{
nombre:"Capuchas neoprene",
cantidad:12,
estado:"Bueno",
observaciones:
"Talle universal x12"
},


{
nombre:"Chalecos de rescate",
cantidad:12,
estado:"Bueno",
observaciones:
"Talle universal x12"
},


{
nombre:"Cascos",
cantidad:17,
estado:"Bueno",
observaciones:
"Universales con orejeras x5 | Universales en servicio x12"
},


{
nombre:"Mascaras Full Face",
cantidad:3,
estado:"Bueno",
observaciones:
"1 sin tubo"
},


{
nombre:"Linternas",
cantidad:3,
estado:"Bueno",
observaciones:
"Frontales"
},


{
nombre:"Bolsas de rescate",
cantidad:27,
estado:"Bueno",
observaciones:
"En servicio x17 | Repuestos x6 | Fuera de servicio x4"
}

],



"RA-CAJ":[

{
nombre:"Cajones 1° intervencion",
cantidad:0,
estado:"Bueno",
observaciones:"Sin detalle cargado"
}

],



// ========================================
// ROPERIA
// ========================================


"ROP-DEP":[


{
nombre:"Ropa estructural",
cantidad:0,
estado:"Bueno",
observaciones:
"Cascos x26: amarillos x5, blancos x1, rojo x2, F1 x18 | Monjas x9 | Sacones x27 | Pantalones x12 | Equipos completos x10 | Guantes incendio x20 | Guantes rescate nuevos x19 usados x7 | Botas HAIX nuevas talle 37 y 40 x2 | Botas usadas talle 38 y 39 x2"
},


{
nombre:"Ropa forestal",
cantidad:0,
estado:"Bueno",
observaciones:
"Cascos x33: amarillos x2, rojos x24, blancos x7, naranjas x2 | Borseguies nuevos talles 43,45,45 x3 | Borseguies usados varios talles x6 | Chaquetas | Pantalones | Camisas"
},


{
nombre:"Ropa de gala",
cantidad:0,
estado:"Bueno",
observaciones:
"Camisas x5: talle 38 x3, talle 40 x2 | Oficiales x2: talle 40 y 46 | Pantalones x8: talle 38 x2, talle 40 x4, talle 44 x2 | Corbatas x3 | Cinturones x4 | Gorras x16 | Tricotas x4: XS x1, M x1, L x2 | Zapatos x10: talle 40 x2, 42 x2, 43 x2, 45 x2, mujer talle 36 x1"
},


{
nombre:"Otros ropa",
cantidad:0,
estado:"Bueno",
observaciones:
"Mamelucos x15: S x2, M x2, L x5, XL x2, XXL x4 | Escudos sueltos x65 | Campera | Pantalon media gala | Polar | Pantalon grafa | Bermudas | Camisa grafa | Cinturones franceses | Tiradores | Pantalones franceses | Chaquetas francesas | Guantes de baqueta x15"
}

],



// ========================================
// EQUIPOS A EXPLOSION
// ========================================


"EXP-DEP":[


{
nombre:"Motobombas y equipos",
cantidad:18,
estado:"Bueno",
observaciones:
"Motobomba Stihl WP600 TP050024010185709 Movil 17 operativo | Motobomba Honda WT30X BN16004050154 Deposito fuera de servicio service | Grupo electrogeno Honda GX160 BN16004040034 Deposito fuera de servicio service | Motobomba Homelite 51457A Deposito fuera de servicio service | Motobomba Robin EY200 EI200DD8560 Deposito fuera de servicio service | Motobomba Briggs Stratton Aquafast 89042405 Deposito fuera de servicio service | Motobomba Stihl WP230 83072889 Movil 26 operativo | Motobomba Stihl WP600 951616198 Movil 26 operativo | Motosierra Stihl MS250 N2 11237911011 Movil 36 operativo | Motosierra Stihl MS381 N4 11197911002 Movil 26 operativo"
},


{
nombre:"Motores y generadores",
cantidad:10,
estado:"Bueno",
observaciones:
"Motor equipo hidraulico Briggs Stratton Quantum XM50 4012059 Movil 32 operativo | Stihl TS420 197465971 Movil 32 operativo | Motosierra Stihl MS250 N3 1123791107 Movil 32 operativo | Motor equipo hidraulico Honda GX100 16B26A20063042 Movil 41 operativo | Grupo electrogeno Niwa YD385D BP001 pañol operativo | Grupo electrogeno Fema 5KW 220v pañol operativo | Grupo electrogeno Briggs Stratton 2.5KW Deposito fuera de servicio | Motobomba Honda GX270 kit forestal APN Movil 42 operativo | Motosierra Stihl MS250 N1 112302824X Movil 38 operativo | Motobomba GEN GDP20E 8044210 Movil 38 fuera de servicio | Motobomba FEMA 170F YB200719 Movil 36 operativo"
}

]


};


// ========================================
// FIN DATOS SIGIB 03
// ========================================
