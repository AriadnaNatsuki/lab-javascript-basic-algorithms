// Iteration 1: Names and Input

let name1 = "pablo";
let name2 = "elizabeth";
console.log(name2);

// Iteration 2: Conditionals


if (name1.length > name2.length) {
    console.log(`el nombre mas largo es ${name1} y tiene ${name1.length} caracteres`);
}
else if (name1.length < name2.length) {
    console.log(`el nombre mas largo es ${name2} y tiene ${name2.length} caracteres`);
}

else {
    console.log(`Los 2 nombres tienen los mismos caracteres`);

}


// Iteration 3: Loops
let name1 = "elizabeth";
let name2 = "pablo";
let masLargo = "";

if (name1.length > name2.length) {
    console.log(`el nombre mas largo es ${name1} y tiene ${name1.length} caracteres`);
    masLargo = name1;
}
else if (name1.length < name2.length) {
    console.log(`el nombre mas largo es ${name2} y tiene ${name2.length} caracteres`);
    masLargo = name2;

}

else {
    console.log(`Los 2 nombres tienen los mismos caracteres`);

}
console.log(masLargo.split("").join(" ").toUpperCase());

//Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet in leo sed pulvinar. Nam sagittis luctus urna id luctus. In eu nisi et nulla elementum sodales vel non purus. Suspendisse a sollicitudin mauris. Nulla finibus, velit quis tempor rhoncus, odio tortor imperdiet purus, non viverra tortor ante vel lacus. Aliquam dictum aliquam ligula posuere pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquet ipsum eget ipsum lobortis pharetra. Nam dictum sapien ac rhoncus auctor. Phasellus ut lectus laoreet, facilisis urna vel, dignissim nibh.
Proin ut posuere metus. Nulla ut dolor porta, sagittis mi quis, sodales erat. Nam posuere hendrerit blandit. Nunc vel risus fermentum, viverra lectus at, pretium neque. Mauris ullamcorper turpis ac tempor mollis. Ut imperdiet dolor erat, vitae ultrices sem tristique vitae. Pellentesque auctor mollis libero et elementum. Ut nec posuere lorem, non pellentesque neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus eu vulputate turpis, ac luctus turpis.
Fusce sit amet rutrum mi, et pulvinar augue. Sed a urna leo. Nunc eget egestas dolor. Nunc efficitur luctus eros, a consectetur quam volutpat quis. Integer magna turpis, consequat quis mattis a, ultricies ut neque. Vivamus in convallis elit, sed rutrum ex. Aliquam quam lorem, mattis vel rutrum consectetur, consectetur vel massa. In quis arcu feugiat, laoreet turpis quis, fringilla enim.`;
//Convertimos el string en un array (llamado array que reutilizaremos en el bonus) de palabras identifcidas por el separador " "
//implementado en el metodo split
let array = lorem.split(" ");
//Guardamos el numero de palabras, midiendo la longitud del array (que correponde con el numero de palabras)
let number_words = array.length;
console.log(number_words);

//Numero de veces que se repite la palabra "et"

let j = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 'et') {
        j++;
    }
}
console.log(j);