 
import ApiServices from "./ApiServices";
  import { Depositos , Transferencia} from '../../domain/models';
 

 export async function InsertTransicao(dados: Depositos|Transferencia): Promise<string|undefined> {
          console.log("chegou aqui");
     try{
    const url = "http://localhost:5000/api/";
    const api = new ApiServices(url);

    console.log("qual dado chegou",JSON.stringify(dados))

    if(dados.tipo == "Deposito"){
      const response = await api.post('deposito',dados);
      console.log("teste responset getuse "+JSON.stringify(response));


    }else {
       const response = await api.post('transferir',dados);
      console.log("teste responset getuse "+JSON.stringify(response));

    }
   

         return ''; 
  
}catch(error)

{
console.error("Erro ocorrido: " +error);

throw new Error ('Erro na conta cadastrada');
 return '';   
}

}
