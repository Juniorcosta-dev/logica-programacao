let nomeDoHeroi = "Super Dev";
let xpHeroi = 10000;

let nivel= " ";

if (xpHeroi <= 1000) {
  nivel = "ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 6000) {
  nivel = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log("O Herói do nome " + nomeDoHeroi + " está no nível de " + nivel);
