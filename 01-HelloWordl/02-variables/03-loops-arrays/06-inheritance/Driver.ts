import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let myShape = new Shape(2, 5);
console.log(myShape.getInfo());

let myCircle = new Circle(2, 4, 34);
console.log(myCircle.getInfo());

let myRect = new Rectangle(2, 5, 34, 23);
console.log(myRect.getInfo());


