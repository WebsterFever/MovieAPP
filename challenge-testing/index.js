class CarritoCompras {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    calcularTotal() {
        return this.carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    }
    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        return total - descuento;
    }

}

module.exports = CarritoCompras;