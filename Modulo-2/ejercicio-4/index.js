function parOImpar(num){
    if (num % 2 === 0) return "Es par";
    return "Es impar";
}

console.log(parOImpar(16));
console.log(parOImpar(9));


const parOImparArrow = (num) => {
    return (num % 2 === 0) ? "Es par" : "Es impar"; 
};

console.log(parOImparArrow(16));
console.log(parOImparArrow(9));

const parOImparUnaLinea = (num) => (num % 2 === 0) ? "Es par" : "Es impar";
console.log(parOImparUnaLinea(16));
console.log(parOImparUnaLinea(9));