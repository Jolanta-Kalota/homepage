const name = "Jola";
const age = 21;

alert("Cześć! Jestem Jola :)");
console.log("Witaj w konsoli!");
console.log(name);
console.log(age);
console.log(`Hejka nazywam się ${name} i mam ${age} lat.`);

const JS_paragraph = document.querySelector(`.week-note__description--JS`)  
console.log(JS_paragraph) 
JS_paragraph.innerHTML = `nic`

function helloWorld(age, name){
    console.log(
        `Hejka nazywam się ${name} i mam ${age} lat.`
        );
}

helloWorld(age, name)