function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}
module.exports.moduloCalculaIMC=calcularIMC;