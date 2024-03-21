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
class Size {
    constructor(width = 800, height=600) {
        this.width = width;
        this.height = height;
    }
}