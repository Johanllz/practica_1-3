console.log("Posición después de usar changeWindow:", window.position.x, ",", window.position.y);
console.log("Tamaño después de usar changeWindow:", window.size.width, "x", window.size.height);

//Apartado Final.
const size = new Size(1080,764);
console.log(size.width);
console.log(size.height);
size.resize(1920,1080);
console.log(size.width);
console.log(size.height);



const point = new Position();
console.log(point.x);