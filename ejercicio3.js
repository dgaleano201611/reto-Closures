//in progress
//crear un numero aleatorio
//ingresar un numero como argumento de una funcion
//condicion si numero aleatorio = argumento de la funcion entonces imprimir felicitaciones 
//sinumero aleatorio < argumento => muy alto
// si aleatorio > argumento => muy bajo



//clousure

//una funcion


const createGame = () => {
    
    const min = 1;
    const max = 10;

    let x = Math.floor(Math.random()*(max - min)+min);

    const nested = (numero) => {
        if(numero === x){
            console.log(`congratulation!!, adivinaste ${x}`)
        }else if(numero > x){
            console.log("muy alto!!")
        }else {
            console.log("Muy bajo!!")
        }
    }

    return nested;
}

const guess = createGame()

guess(3);
