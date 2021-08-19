// Utilisateur rentre un nombre (par ex 5)
nb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function pyramid(floors) {
    let i = 0;
    row = " ";
    while (i != floors) {
      row += " ";
      i++;
    }
    while (floors != 0) {
      row = row.substring(1);
      row += "X";
      console.log(row);
      floors -= 1;
    }
  }
  pyramid(nb);