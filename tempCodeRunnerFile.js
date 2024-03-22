// Definir la clase Size usando constructor y la clase posicion
class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}

class Position {
    constructor(x = 250, y = 100) {
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}
//Clase ProgramWindow
//3
class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size(); // Tamaño inicial por defecto
        this.position = new Position(); // Posición inicial por defecto
    }

    resize(newSize) {
        // Limitar el tamaño mínimo a 1x1
        newSize.width = Math.max(newSize.width, 1);
        newSize.height = Math.max(newSize.height, 1);

        // Limitar el tamaño máximo al tamaño de la pantalla desde la posición actual de la ventana
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;
        newSize.width = Math.min(newSize.width, maxWidth);
        newSize.height = Math.min(newSize.height, maxHeight);

        // Redimensionar la ventana
        this.size = newSize;
    }
    move(newPosition){
        if( newPosition.x < 0 ){
            newPosition.x = 0;
        }
        if( newPosition.y < 0 ){
            newPosition.y = 0;
        }
        else{
            const maxValueX = (this.screenSize.width - this.position.x) + this.position.x;
            const maxValueY = (this.screenSize.height - this.position.y) + this.position.y;
            if( newPosition.x > maxValueX ){
                newPosition.x = maxValueX;
            }

            if( newPosition.y > maxValueY ){
                newPosition.y = maxValueY;
            }
        }
    }
}



const window = new ProgramWindow();
console.log("Tamaño actual:", window.size.width, "x", window.size.height);
window.resize(new Size(400, 500));
console.log("Tamaño después de redimensionar:", window.size.width, "x", window.size.height);
console.log("Posición actual:", window.position.x, ",", window.position.y);
window.resize(new Position(600, 200));
console.log("Posición después de mover la pantalla:", window.position.x, ",", window.position.y);