function calcular_iva(precio_total) {
    return precio_total * 1.21;
}

function descuentos(precio_total) {
    if (precio_total >= 50 && precio_total < 100) { // 6.Entre 50€ y 99,99€ -> 5%
        precio_total *= 0.95;
    } else if (precio_total >= 100 && precio_total < 200) { // 7.Entre 100€ y 199,99€ -> 10%
        precio_total *= 0.90;
    } else if (precio_total >= 200) { // 8.200€ o más -> 15%
        precio_total *= 0.85;
    }
    return precio_total;
}

function menor(gasto_menor, precio_total) {
    if (gasto_menor > precio_total) {
        gasto_menor = precio_total;
    }
    return gasto_menor;
}

function mayor(gasto_mayor, precio_total) {
    if (gasto_mayor < precio_total) {
        gasto_mayor = precio_total;
    }
    return gasto_mayor;
}

function gestion_compras() {
    let operacion = true;
    let num_operaciones = 0;
    let gasto_total = 0;
    let gasto_mayor = -Infinity;
    let gasto_menor = Infinity;

    while (operacion) { // 10.Si se indica que si, volver a realizar todo, sino terminar y salir
        num_operaciones++;
        // 1.Pedir al usuario el precio del producto
        let precio = parseFloat(window.prompt("Introduce el precio del producto:"));
        // 2.Pedir al usuario la cantidad de unidades
        let cantidad = parseInt(window.prompt("Introduce la cantidad:"));
        // 3.Calcular el importe de la compra
        let precio_total = precio * cantidad;

        // 4.Calcular un descuento según el importe:
        precio_total = descuentos(precio_total);
        // 5.Menos de 50€ -> sin descuento
        precio_total = calcular_iva(precio_total); // 9.Calcular IVA del 21% sobre el precio después del descuento
        gasto_total += precio_total;
        gasto_mayor = mayor(gasto_mayor, precio_total);
        gasto_menor = menor(gasto_menor, precio_total);
        operacion = window.confirm("¿Desea realizar otra operación?"); // 10. Al finalizar debe preguntar si se desea realizar otra operación
    }

    // 11.Una vez hayamos terminado y salido, debe mostrar un último mensaje por consola indicando el número de operaciones realizadas, 
    // el gasto total realizado, el gasto medio, el mayor y el menor.
    console.log(`Número de operaciones realizadas: ${num_operaciones} \n 
        Gasto total: ${gasto_total.toFixed(2)} \n
        Gasto medio: ${(gasto_total / num_operaciones).toFixed(2)} \n
        Gasto mayor: ${gasto_mayor.toFixed(2)} \n
        Gasto menor: ${gasto_menor.toFixed(2)}`);
}

gestion_compras();