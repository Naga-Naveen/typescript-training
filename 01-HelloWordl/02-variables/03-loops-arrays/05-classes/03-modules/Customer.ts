export class Customer{

    // parameter 
    constructor(private _firstname: string,   private _lastname: string ){

    }

    // constructor(firstName:string, lastName:string){
    //     this._firstname=firstName;
    //     this._lastname=lastName;
    // }

    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }


}


