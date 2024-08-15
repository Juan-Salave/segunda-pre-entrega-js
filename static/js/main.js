// Tienda de frutas

let carritoDeCompras = [];

// class 
class Producto {
    constructor (nombre, precio){
        this.nombre  = nombre;
        this.precio  = precio;
    }
    formatearProducto() {
        return `=>  Se agrego al carrito: ${this.nombre} su precio es de: $${this.precio}  <=`      
    }
};

let frutas = []

const manzana   = new Producto ('Manzana', 180);
const frutilla  = new Producto ('Frutilla', 200);
const pera      = new Producto ('Pera', 200);
const banana    = new Producto ('Banana', 80);
const liomon    = new Producto ('Limon', 50);

frutas.push(manzana, frutilla, pera, banana, liomon);
console.log(frutas);

// CREAR UN ALER PARA INDICAR LA COMPRA
alert(`=> Para agregar al carrito de compras
    inserte el numero 1 y aceptar. Si no desea 
    agregar la fruta inserte cualquier numero 
    o letra.`);

for (let i = 0; i < frutas.length; i++){
    let agregar = prompt(`Agregar al carrito ${frutas[i].nombre}`)
    if (agregar == '1'){
        carritoDeCompras.push(frutas[i])        
        const valor = frutas[i].formatearProducto();
        console.warn(valor);
    } else {
        console.error(`No se agrego al carrito ${frutas[i].nombre}`)
    }
};

console.log(`Su carrito de compra contiene:`)
let total = 0
let totalConIva = 0

const pagar = () => {
    for (let f = 0; f < carritoDeCompras.length; f++){
        console.log(`| Articulo: ${carritoDeCompras[f].nombre} => Precio: $${carritoDeCompras[f].precio} |`)
    }
    for (let p = 0; p < carritoDeCompras.length; p++){        
        total = total + carritoDeCompras[p].precio
        
    }
    totalConIva = total * 1.21
    console.error(`Total sin IVA es de: $${total}`)
    console.warn(` Total mas IVA es de: $${totalConIva}`)
    
} 

pagar()
