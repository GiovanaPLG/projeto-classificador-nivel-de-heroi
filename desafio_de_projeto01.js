let heroname = "Mystic";
let xp = 8756;
let ranking;

if (xp < 1000){
    ranking = "Ferro"; 
}
else if (1001 <= xp && xp <= 2000){
    ranking = "Bronze";
}
else if (2001 <= xp && xp<= 5000){
    ranking = "Prata";
}
else if (5001 <= xp && xp <= 7000){
    ranking = "Ouro";
}
else if (7001 <= xp && xp <= 8000){
    ranking = "Platina";
}
else if (8001 <= xp && xp <= 9000){
    ranking = "Ascendente";
}
else if (9001 <= xp && xp <= 10000){
    ranking = "Imortal";
}
else if (xp >= 10001){
    ranking = "Radiante";
}

console.log("O herói de nome " + heroname + " está no nível de " + ranking);