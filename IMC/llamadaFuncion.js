const modulo=require("./calcularIMC.js");

const pesoUsuario= 80;
const alturaUsuario = 1.55;
const imcUsuario = modulo.moduloCalculaIMC(pesoUsuario,alturaUsuario);

//imcUsuario.toFixed(2);

if (imcUsuario < 18.5) {
    console.log('Tu IMC se considera con un peso insuficiente: '+imcUsuario.toFixed(2));
}else if (imcUsuario >= 18.5 && imcUsuario<=24.9) {
        console.log('Tu IMC se considera saludable: '+imcUsuario.toFixed(2));
    }else if (imcUsuario >= 25 && imcUsuario<=29.9) {
            console.log('Tu IMC se considera sobrepeso: '+imcUsuario.toFixed(2));
        }else if (imcUsuario >= 30 && imcUsuario<=39.9) {
                console.log('Tu IMC se considera obesidad: '+imcUsuario.toFixed(2));
            }else if (imcUsuario && 40) {
                    console.log('Tu IMC se considera obesidad extrema: '+imcUsuario.toFixed(2));
                }