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
//3
class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size(0, 0); // Tamaño inicial por defecto
        this.position = new Position(0, 0); // Posición inicial por defecto
    }
}

class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
