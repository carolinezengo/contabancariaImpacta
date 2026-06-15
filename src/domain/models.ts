export class User{
    email:string
    password:string
    constructor(email:string, password:string){
        this.email = email;
        this.password = password
    }
}

export class AccountInfo{
    constructor(public name:string, public type:string, public value: string){};
}