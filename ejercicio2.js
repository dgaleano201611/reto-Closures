crearContador = () => {
    let numero = 0;

    nested = () => {
        numero = numero + 1
        console.log(numero)
    }
    return nested
}

const contar = crearContador()
contar();//1
contar();//2
contar();//3
contar();//4

