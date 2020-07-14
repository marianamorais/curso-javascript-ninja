/* 1 - 2 - 3 */

function soma1 (x , y) {
    return x + y
}

var soma1 = (5, 6) + 5
var soma2 = soma1;
console.log("O valor atualizado é:" + " " + soma2)

/* 4 - 5 - 6 - 7*/

var variavel;

function updatevariavel () {
    variavel = 20;
    return 'O novo VALOR da variavel agora é: ' + variavel;
}

console.log(updatevariavel());

/* 8 - 9 - 10 - 11 - 12 */

function gatoFofo (a, b, c) {
    if (a === undefined && b === undefined && c === undefined) {
        return 'Preencha todos os valores corretamente!';
    }
    return ( a * b * c ) + 2; 
}

gatoFofo (2 , 3);

gatoFofo (2, 3 , 5);


/* 13 */
function batataPalha (x, y, z) {
    if (x !== undefined && y === undefined && z === undefined ) {
        return x;
    } else if (x !== undefined && y !== undefined && z === undefined) {
        return x + y;
    } else if (x !== undefined && y !== undefined && z !== undefined) {
        return ( x + y ) / z;
    } else if (x === undefined && y === undefined && z === undefined) {
        return false;
    } else {
        return null;
    }
}

/* 14 */
batataPalha(); //false
batataPalha(1); //1
batataPalha(1, 2); //3
batataPalha(1, 2, 3); //1

console.log(batataPalha())