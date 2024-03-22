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
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}
//Clase ProgramWindow
//3 y 4
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
        const maxWidth = (this.screenSize.width - this.position.x) + this.position.x;
        const maxHeight = (this.screenSize.height - this.position.y) + this.position.y;
        newSize.width = Math.min(newSize.width, maxWidth);
        newSize.height = Math.min(newSize.height, maxHeight);

        // Redimensionar la ventana
        this.size = newSize;
    }
    //5 Move window
    move(newPosition){
        // Comprueba que los valores de la posición no sean menores que 0
        if( newPosition.x < 0 ){
            newPosition.x = 0;
        }
        if( newPosition.y < 0 ){
            newPosition.y = 0;
        }
        // Ajusta los valores de la posición de acuerdo al tamaño de la ventana
        else{
            // Establece valores limites para x y
            const maxValueX = (this.screenSize.width - this.position.x);
            const maxValueY = (this.screenSize.height - this.position.y);

            // Si el nuevo valor de las posiciones es mayor al valor maximo se establece el valor máximo
            if( newPosition.x > maxValueX ){
                newPosition.x = maxValueX;
            }

            if( newPosition.y > maxValueY ){
                newPosition.y = maxValueY;
            }
        }
        //Mueve la ventana
        this.position = newPosition;
    }
}
//6 Change window
//Llama a las funciones size y move de la intancia de ProgramWindow para usar sus metodos
function changeWindow(windowInstance){
    windowInstance.size.resize(400,300);
    windowInstance.position.move(100,150);
}



const window = new ProgramWindow();
console.log("Tamaño actual:", window.size.width, "x", window.size.height);
window.resize(new Size(400, 300));
//Comprueba el movimiento de la ventana
console.log("Posición actual:", window.position.x, ",", window.position.y);
window.move(new Position(600, 200));
console.log("Posición después de mover la pantalla:", window.position.x, ",", window.position.y);

//Prueba changeWindow:
changeWindow(window);
console.log("Posición después de usar changeWindow:", window.position.x, ",", window.position.y);
console.log("Tamaño después de usar changeWindow:", window.size.width, "x", window.size.height);




//Apartado Final Aqui se Evalua lo ultimo_______________________________________________________________________________________________________________________________________________________
console.log(""); // Imprime un espacio en blanco

const size = new Size(1080,764);
console.log(size.width);
console.log(size.height);

console.log(""); // Imprime un espacio en blanco

size.resize(1920,1080);
console.log(size.width);
console.log(size.height);

console.log(""); // Imprime un espacio en blanco
//Mueve la ventana
const point = new Position();
console.log(point.x);
console.log(point.y);
point.move(100,200);
console.log(point.x);
console.log(point.y);

console.log(""); // Imprime un espacio en blanco

console.log(""); // Imprime un espacio en blanco
//Redimensiona la pantalla, la mueve y verifica el tamaño de esta
const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);

console.log(""); // Imprime un espacio en blanco

const newSize = new Size(600,400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
console.log(programWindow.size.height);

console.log(""); // Imprime un espacio en blanco

const newPosition = new Position(50,100);
programWindow.move(newPosition);
console.log(programWindow.position.x);
console.log(programWindow.position.y);

console.log(""); // Imprime un espacio en blanco

changeWindow(programWindow);
console.log(programWindow.size.width);