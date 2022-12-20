"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
let myShape = new Shape_1.Shape(2, 5);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(2, 4, 34);
console.log(myCircle.getInfo());
let myRect = new Rectangle_1.Rectangle(2, 5, 34, 23);
console.log(myRect.getInfo());
