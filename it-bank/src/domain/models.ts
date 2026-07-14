export class UserModel{
    
    nome:string
    email:string
    password:string
    
    constructor(nome:string,email:string, password:string){
        this.nome =nome
        this.email = email
        this.password = password
       
    }
}

export class AccountInfo{
    constructor(public name:string, public type:string, public value: string){};
}

export class Contas{
   tipoConta:string
    nomeConta:string
    valor:string
    constructor(tipoConta:string, nomeConta:string, valor:string){
        this.tipoConta = tipoConta
        this.nomeConta= nomeConta
        this.valor = valor
    }
}