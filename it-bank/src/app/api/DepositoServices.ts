 
import ApiServices from "./ApiServices";
  import { Depositos } from '../../domain/models';
 

 export async function InsertDeposito(deposito:Depositos): Promise<string|undefined> {
          console.log("chegou aqui");
     try{
    const url = "http://localhost:5000/api/";
    const api = new ApiServices(url);
    if(deposito.tipo = "Deposito"){
      const response = await api.post('deposito',deposito);
      console.log("teste responset getuse "+JSON.stringify(response));


    }else{
        console.log('Tipo de transicão errada!')
    }
   

         return ''; 
  
}catch(error)

{
console.error("Erro ocorrido: " +error);

throw new Error ('Erro na conta cadastrada');
 return '';   
}

}
