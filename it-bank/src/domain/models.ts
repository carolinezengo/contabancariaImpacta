import { string } from "zod/v4"


export class UserModel{
    id:string
    id_number:number
    nome:string
    email:string
    password:string
    
    constructor(id:string,id_number:number,nome:string,email:string, password:string){
        this.id = id
        this.id_number=id_number
        this.nome =nome
        this.email = email
        this.password = password
       
    }
}

export class AccountInfo{
    constructor(public name:string, public type:string, public value: string){};
}



export class Contas{
     id?: number
    nomeConta:string
    tipoConta:string
    idUser: number
    valor:string
   depositos: Depositos[]
   transferir:Transferencia[] 
    constructor(id:number, nomeConta:string,idUser:number, tipoConta:string,valor:string, deposito:Depositos[], transfencia:Transferencia[]){
       this.id =id
        this.nomeConta= nomeConta
        this.idUser = idUser
        this.tipoConta = tipoConta
        this.valor = valor
        this.depositos=deposito
        this.transferir=transfencia

    }
}

    export class Depositos{
   
     valor :string
       dataDeposito :string
       idConta :number
       tipo: string 
       data:string
  
    constructor( valor:string, dataDeposito:string, idConta:number, deposito:string, data:string){
       
        this.valor = valor
          this.dataDeposito= dataDeposito
           this.idConta = idConta
          this.tipo = deposito
          this.data = data
      
       
      
    }}
    export class Transferencia{
   
    destino : string
     valor :string
    dataTransf: string
     tipo:string
     idConta : number
     data: string
   
    constructor( destino:string, valor:string, dataTransf: string, idConta:number, transferencia:string, data:string){
       
        this.destino= destino
        this.valor = valor
        this.dataTransf = dataTransf
        this.tipo = transferencia
        this.idConta = idConta
        this.data = data
    }}

     export class Saque{
   
      valor :string
      dataSaque: string
     tipo:string
     nomeConta: string
     data: string
   
    constructor(  valor:string, dataSaque: string, nomeConta:string, data:string, tipo:string){
       
        
        this.valor = valor
        this.dataSaque = dataSaque
        this.tipo = tipo
        this.nomeConta = nomeConta
        this.data = data
    }}
  
 