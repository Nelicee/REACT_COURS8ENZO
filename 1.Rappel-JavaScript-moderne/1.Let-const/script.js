/* 
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/* 
    1. let & const sont block-scoped, var est function-scoped.
*/

if (true) {
  var test = "Hello world";
  let test2 = "Test2";
  const test3 = "Test3";
}

function foo() {
    var number = 10;
    let number2 = 99;
}
/* 
    2. On ne peut pas déclarer de const vide, contrairement à let ou var.
*/
var animal
let lion
const cat = 10
// console.log(lion)


/*
   3. On peut redéclarer des variables var sans provoquer d'erreurs.
*/
var dog="coco"
var dof="Tobi"

/* 
    4. Une variable var se fait hoisted et peut être utilisée avant sa déclaration, car elle est initialisée à undefined.
    Let & const sont hoisted mais pas initialisées.
    
    Hoisting JavaScript
    Les déclarations de fonctions et de variables sont hissées en JavaScript. Cela signifie qu'elles sont stockées dans la mémoire du VO(Variables Object) du contexte d'exécution actuel et rendues disponibles dans le contexte d'exécution avant même que l'exécution du code ne commence.
*/
 var test = "test"
/* 
    5. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const peuvent se faire enregistrer globalement, mais sans être accessibles comme propriétés directes de window, elles sont inscrites dans l'environnement lexical de l'objet global (l'ensemble des déclarations accessibles par ce dernier).
*/ var userName = "Julia"
console.log(window)
