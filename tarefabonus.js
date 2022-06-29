var salario = window.prompt ('quanto você ganha?');
window.alert("Seu salario é " + salario);
var tempo = window.prompt ('Quantos anos tem de empresa ? ');
window.alert("seu tempo de empresa é " + tempo);

if (tempo >= 5) {
    bonus = salario * 0.20;
    window.alert(`O bônus é de R$ ${bonus}.`);
} else {
    bonus = salario * 0.10;
    window.alert(`O bônus é de R$ ${bonus}.`);
}

