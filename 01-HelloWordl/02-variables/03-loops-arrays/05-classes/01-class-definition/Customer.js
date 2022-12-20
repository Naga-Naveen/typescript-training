var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }
    return Customer;
}());
var mycustomer = new Customer("Naveen", "Praveena");
// mycustomer.firstname="Naveen";
// mycustomer.lastname="Naga";
console.log(mycustomer.firstname);
console.log(mycustomer.lastname);
