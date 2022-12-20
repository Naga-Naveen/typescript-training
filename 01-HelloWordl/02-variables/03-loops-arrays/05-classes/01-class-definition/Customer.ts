class Customer{


    firstname:string;
    lastname:string;

    constructor(firstName:string, lastName:string){
        this.firstname=firstName;
        this.lastname=lastName;
    }

}

let mycustomer = new Customer("Naveen", "Praveena");

// mycustomer.firstname="Naveen";
// mycustomer.lastname="Naga";

console.log(mycustomer.firstname);
console.log(mycustomer.lastname);
