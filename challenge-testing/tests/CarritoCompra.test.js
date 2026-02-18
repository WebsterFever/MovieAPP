const CarritoCompras = require("../index");

const newProduct = { id: 1, nombre: "computador", precio: 1800 };
const newProduct2 = { id: 2, nombre: "coche", precio: 20000 };

describe("Clase CarritoCompras", () => {
    it("Debe exisitir la clase", () => {
        expect(CarritoCompras).toBeDefined();
        expect(typeof CarritoCompras).toBe("function");
    });
});

//Constructor
//Inicializa el carrito como un array vacio.

describe("Metodo Construtor", () => {
    it("El carrito debe ser un array vacio", () => {
        const carritoCompra = new CarritoCompras();
        expect(carritoCompra.carrito).toEqual([]);
    });
});

//AgregarProduto
//Recibe un objeto representando un produto y lo agrega al carrito de compras (array productos).
describe("Metodo agregarProducto", () => {  
    it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
        const carritoCompra = new CarritoCompras();

        carritoCompra.agregarProducto(newProduct);
        expect(carritoCompra.carrito.length).toBe(1);
        expect(carritoCompra.carrito[0]).toEqual(newProduct);
        expect(carritoCompra.carrito[0].nombre).toEqual(newProduct.nombre); 
        expect(carritoCompra.carrito[0].precio).toEqual(newProduct.precio);
    });
});

//calcular total
//calcula el total de la compra sumando el precio de todos los productos en el carrito.
describe("Metodo calcularTotal", () => {
    it("calcula el total de la compra sumando el precio de todos los productos en el carrito", () => {
        const carritoCompra = new CarritoCompras(); 
        carritoCompra.agregarProducto(newProduct);
        carritoCompra.agregarProducto(newProduct2);
        expect(carritoCompra.calcularTotal()).toBe(21800);
    });
});

//Aplicar descuento 
//Aplica un descuento al total de la compra segun el porcentaje especificado

describe("Metodo aplicarDescuento", () => {
    it("Aplica un descuento al total de la compra segun el porcentaje especificado", () => {
        const carritoCompra = new CarritoCompras();
        carritoCompra.agregarProducto(newProduct);
        carritoCompra.agregarProducto(newProduct2);
        const totalConDescuento = carritoCompra.aplicarDescuento(10);
        expect(totalConDescuento).toBe(19620);
        expect(carritoCompra.aplicarDescuento(20)).toBe(17440);
        expect(carritoCompra.aplicarDescuento(0)).toBe(21800);
        expect(carritoCompra.aplicarDescuento(100)).toBe(0);
    });
});
