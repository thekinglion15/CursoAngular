//Gabriel Alexander De León Lizardo
//Función para calcular el IMC
const calcularIMCArrow = (pesoKg: number, alturaM: number): string => {
    const imc = pesoKg / (alturaM * alturaM);

    if (imc < 15.5)
        return "Peso bajo";
    else if (imc >= 18.5 && imc < 24.9)
        return "Peso normal";
    else if (imc >= 25 && imc < 29.9)
        return "Sobrepeso";
    else if (imc >= 30 && imc < 34.9)
        return "Obesidad grado 1"
    else if (imc >= 35 && imc < 39.9)
        return "Obesidad grado 2"
    else
        return "Obesidad grado 3"
}

console.log(calcularIMCArrow(70, 1.75));
