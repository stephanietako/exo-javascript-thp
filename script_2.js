// Un prompt s'affiche avec la question suivante
//let Number = prompt("De quel nombre veux-tu calculer la factorielle ?");
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché : 24

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let n = 1;
function factorial(number){

if (number == 0 ){
    return 1;
    }else{
    for(let i = number; i >= 1; i--){
       n = n * i; 
    }
    return n;      
    }
}
console.log(factorial(number));