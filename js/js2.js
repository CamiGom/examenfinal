//declaracion de arreglos //

let equipos = ["hp 102","dell inspirion","sony vaio"];

console.log(equipos);

// imprimir el segundo equipo//
console.log(`El segundo equipo es: ${equipos[1]}`);

//imprimir el total de quipos//
console.log(`total de equipos ${equipos.length}`);

//imprimir el ultimo equipo//
console.log(`ultimo equipo: ${equipos[equipos.length-1]}`);

// crear un objeto literal//
let video={
    id:12,
    url: "Youtube.com/watch?v=12",
    visitas:1,
    comentarios: ["mal video", "mal audio"]
};

let equipos2 = {
    0:"hp 102",
    1:"dell inspirion",
    2:"sony vaio"};

console.log(video);

//imprimir el url del video//
console.log(`url del video: ${video.url}`);

//imprimir el primer comentario del video//
console.log(`el primer comentario es: ${video.comentarios[0]}`);

//Ejemplo if: escribir un programa que mande a la pantalla el nombre del boton de youtube que le corresponda a un canal tomando en cuenta la cantidad de suscriptores. plata, oro, diamante, rubi//
let suscriptores=1;

if(suscriptores>=100_000 && suscriptores <=99_999){
    console.log("plata");
}
else if(suscriptores>=1_000_000 && suscriptores <=999_999){
    console.log("Oro");
}
else if (suscriptores>=10_000_000 && suscriptores <=99_999_999){
    console.log("Diamante");
}
else if(suscriptores>=100_000_000){
    console.log("Rubi");
}
else{
    console.log("No hay nada para ti");
}

// switch //
let calificacion=20;

switch(calificacion){
    case 68:
        calificacion+= 2;
        break
    case 98:
        calificacion+=2;
        break
    case 10:
    case 20:
    case 30:
    case 40:
        calificacion+=1;
        break
}

console.log(calificacion);

// ejemplo for imprimir 20 veces la palabra javascript en el documento como marquesina//
for (let i=1; i <=20; i++){
    document.write("<marquee>Javascript</marquee>");
}

//crear 10 articulos que tengan como contenido un h2 y una imgen/
for (let i=1; i<=10; i++){
    document.write(`
        <article>
            <h2>titulo imagen</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/320px-Unofficial_JavaScript_logo_2.svg.png">
        </article>
    `);
}

//creacion de funciones///
function sumar(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let suma= num1 + num2;
    document.getElementById("resultado").value=suma;
}