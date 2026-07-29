/* ==========================================
   SIGIB 03
   DATOS DEL SISTEMA
========================================== */

/* ---------- USUARIO ACTIVO ---------- */

let usuarioActual = null;

/* ---------- LEGADOS ---------- */

const usuarios = {

72:{nombre:"RIFO Raúl",cargo:"Jefe de Cuerpo"},
78:{nombre:"ZUÑIGA Domingo",cargo:"2° Jefe de Cuerpo"},
76:{nombre:"SCHOUA Gabriel",cargo:"Subcomandante"},
73:{nombre:"DE ANTUENO Ignacio",cargo:"Subcomandante"},
31:{nombre:"CURIÑANCO Jorge",cargo:"Subcomandante"},
94:{nombre:"GONZALEZ Eduardo",cargo:"Encargado Materiales"},
95:{nombre:"SALAZAR Luis",cargo:"Encargado Capacitación"},
100:{nombre:"MUÑOZ Patricio",cargo:"Encargado Automotores"},
99:{nombre:"SPINELLI Leonardo",cargo:"Of. Ayudante"},
137:{nombre:"KULJKO Facundo",cargo:"Encargado Equipos a Explosión"},
103:{nombre:"LOPEZ Cecilia",cargo:"Encargada Trauma"},
150:{nombre:"ORTIZ Ruben",cargo:"Encargado Incendios Forestales"},
131:{nombre:"SESTO Carlos",cargo:"Cabo 1°"},
113:{nombre:"OCARES Dario",cargo:"Encargado Comunicaciones"},
149:{nombre:"OVANDO Claudio",cargo:"Cabo 1°"},
127:{nombre:"SALAZAR Diego",cargo:"Encargado Rescate Acuático"},
130:{nombre:"BRAVO Daniela",cargo:"Cabo 1°"},
157:{nombre:"SANCHEZ Franco",cargo:"Encargado Cadetes"},
129:{nombre:"GODOY Walter",cargo:"Cabo"},
134:{nombre:"HERRERA Damian",cargo:"Encargado Intendencia"},
145:{nombre:"CORIA Joaquin",cargo:"Encargado Incendios Estructurales"},
167:{nombre:"VIDAL Marcelo",cargo:"Bombero Voluntario"},
171:{nombre:"MELLADO Karen",cargo:"Bombero Voluntario"},
174:{nombre:"BARROSO Paola",cargo:"Bombero Voluntario"},
176:{nombre:"BIANCHI Jose",cargo:"Auxiliar"},
126:{nombre:"MUÑOZ Eduardo",cargo:"Auxiliar"},
183:{nombre:"MANSILLA Maria Josefina",cargo:"Bombero Voluntario"},
193:{nombre:"HUENUFIL Hector",cargo:"Auxiliar"},
197:{nombre:"PAILACURA Romina",cargo:"Bombero Voluntario"},
199:{nombre:"ROSEMBLUN Rocio",cargo:"Bombero Voluntario"},
200:{nombre:"SARAVIA Enzo",cargo:"Encargado Rescate Vehicular"},
201:{nombre:"KUCNER Lara",cargo:"Encargada Inventarios"},
202:{nombre:"BRUNO Juan",cargo:"Encargado ERA"},
204:{nombre:"VIVEROS Moira",cargo:"Bombero Voluntario"},
205:{nombre:"GODOY Micaela",cargo:"Bombero Voluntario"},
207:{nombre:"ROCHA Sergio",cargo:"Encargado GRIMP"},
165:{nombre:"DIAZ Lucas",cargo:"Auxiliar"},
208:{nombre:"BARROS Romina",cargo:"Bombero Voluntario"},
209:{nombre:"POBLETE Luciano",cargo:"Encargado Ropería"},
124:{nombre:"PEREZ Ramiro",cargo:"Bombero Voluntario"},
210:{nombre:"MUÑOZ Enzo",cargo:"Bombero Voluntario"},
211:{nombre:"ROMERO Walter",cargo:"Bombero Voluntario"},
212:{nombre:"AGOSTO Ailen",cargo:"Bombero Voluntario"},
213:{nombre:"PAREDES Brisa",cargo:"Bombero Voluntario"},
215:{nombre:"HUENUFIL Tiziano",cargo:"Auxiliar"}

};

/* ---------- ÁREAS ---------- */

const areas = {

"Incendios Estructurales":[
"Mangas",
"Lanzas",
"Bifurcadores",
"Escaleras",
"Equipamiento"
],

"Incendios Forestales":[
"Mangas",
"Herramientas",
"Mochilas",
"Equipamiento"
],

"Rescate Vehicular":[
"Hidráulicas",
"Estabilización",
"Accesorios"
],

"Trauma":[
"Tablas",
"Cuellos",
"Insumos",
"Oxigenoterapia"
],

"Rescate Acuático":[
"Trajes",
"Chalecos",
"Cascos",
"Accesorios"
],

"GRIMP":[
"Cuerdas",
"Arneses",
"Poleas",
"Descensores"
],

"ERA":[
"Equipos completos",
"Máscaras",
"Cilindros",
"Repuestos"
],

"Ropería":[
"Estructural",
"Forestal",
"Mamelucos",
"Gala",
"Fajina",
"Calzado"
],

"Equipos a Explosión":[
"Motosierras",
"Generadores",
"Motobombas"
]

};

/* ---------- BASES DE DATOS ---------- */

let inventario =
JSON.parse(localStorage.getItem("inventario")) || [];

let tareas =
JSON.parse(localStorage.getItem("tareas")) || [];

let movimientos =
JSON.parse(localStorage.getItem("movimientos")) || [];