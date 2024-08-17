// Declaração de variáveis
let nivel;
let n = prompt("Informe a quantidade de heróis: ");

// criando o laço e estrutura de decisão
let i = 1
while(i <= n) {
    nome = prompt("Informe o nome do herói: ");
    xp = prompt("Informe a quantidade de experiência do herói: ");
    i += 1
    if (xp <= 1000) {
        nivel = "Ferro"
    } else if (xp > 1000 && xp <= 2000) {
        nivel = "Bronze"
    } else if (xp > 2000 && xp <= 5000) {
        nivel = "Prata"
    } else if (xp > 5000 && xp <= 7000) {
        nivel = "Ouro"
    } else if (xp > 7000 && xp <= 8000) {
        nivel = "Platina"
    } else if (xp > 8000 && xp <= 9000) {
        nivel = "Ascendente"
    } else if (xp > 9000 && xp <= 10000) {
        nivel = "Imortal"
    } else {
        nivel = "Radiante"
    }
    // Log to console
    console.log("O Herói de nome " + nome + " está no nível de " + nivel)
}