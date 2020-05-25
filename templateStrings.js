'use strict'

//was bisher geschah
let [a,b,c] = ['IPSUM', 'AMET', 'ALIGUYAM'];
let oldString =
"Lorem " + a + " dolor sit " + b + ", consetetur sadipscing elitr, \
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna " +
c + ".";
console.log(oldString);

//template strings oder template literals, string interpolation
let templateString =
`Lorem ${a} dolor sit ${b}, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
${c}.`;
console.log(templateString);

//Wann greift das $ Zeichen?
let [d, e] = ['Flo', 10.99]
let order = `Hello ${d}, your order was $${e}`
console.log(order)

//Und wenn ich warum auch immer ein ` im Text anzeigen möchte?
let escapeTick = `I don\`t know what to use as an example`
console.log(escapeTick)

//tagged template strings
function uppercaseValues(strings, ...values) {
    let s = "";
    for (let i=0; i < strings.length; i++) {
        if (i > 0) {
            s += values[i-1].toUpperCase();
        }
        s += strings[i];
    }
    return s;
}

var name = "elements",
    classname = "tagged template strings";
console.log(
    uppercaseValues`Hi ${name}, welcome to the ${classname}!`
);

//be careful what you return
function ruinString(strings, values) {
    return `:(`
}
console.log(ruinString`Hi ${name}, welcome to the ${classname}!`)