"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    // parameter 
    constructor(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    // constructor(firstName:string, lastName:string){
    //     this._firstname=firstName;
    //     this._lastname=lastName;
    // }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
}
exports.Customer = Customer;
