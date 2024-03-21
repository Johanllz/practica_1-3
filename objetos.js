// Definir la clase Size
function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

// Método para cambiar el tamaño
Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
};

// Ejemplo de uso
const ventana = new Size(); // crea una ventana con dimensiones por defecto (80x60)
console.log("Dimensiones iniciales:", ventana.width, "x", ventana.height);

ventana.resize(100, 80); // cambia el tamaño de la ventana
console.log("Dimensiones después de cambiar:", ventana.width, "x", ventana.height);
