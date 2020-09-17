export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar por marca

export function calcularPorMarca(marca){
    let incremento;

    switch(marca){
        case 'europe':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
            
        default:
            break;
    }

    return incremento;
}

export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}