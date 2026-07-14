  import ApiServices from "./ApiServices";
  import { Contas } from '@/domain/models';
 
  
 export async function InsertConta(conta:string): Promise<Boolean|undefined> {
          console.log("chegou aqui");
     try{
    const url = "http://localhost:5000/api/";
    const api = new ApiServices(url);
    const response = await api.post('contas',conta);
   
        console.log("teste responset getuse "+response);
   
         return true;  
     
}catch(error)

{
console.error("Erro ocorrido: " +error);

throw new Error ('Erro na conta cadastrada');
 return false;   
}

}
        
    