
import ApiServices from "./ApiServices";
  import { Contas } from '@/domain/models';
 
  
 export async function InsertConta(conta:Contas): Promise<string|undefined> {
          console.log("chegou aqui");
     try{
    const url = "http://localhost:5000/api/";
    const api = new ApiServices(url);
    const response = await api.post('contas',conta);

    
     
      console.log("teste responset getuse "+JSON.stringify(response));
      
         return ''; 
  
}catch(error)

{
console.error("Erro ocorrido: " +error);

throw new Error ('Erro na conta cadastrada');
 return '';   
}

}

  
 export async function AlterConta(conta:Contas, item:string, itemAlterado:string, id:number): Promise <{nome:string; sucess: boolean}|undefined>{
          console.log("chegou aqui");
     try{
    const url = "http://localhost:5000/api/";
    const api = new ApiServices(url);
     if(itemAlterado == "valor")
     {
     const contaAtualizada = {
           ...conta,
            valor: item
};
        console.log("contaAtualizada" + JSON.stringify(contaAtualizada)) 

               await api.put('contas',contaAtualizada, id);
        
        

           const contaAlterada:Contas[] =  await api.get('contas')
            
           const nomeConta = contaAlterada.find(c => c.nomeConta== contaAtualizada.nomeConta)?.nomeConta;
           
         
           console.log("teste responset updateuse "+ JSON.stringify(contaAlterada));
           if (nomeConta != null )
            return {nome:nomeConta, sucess: true};

        
     }
  
}catch(error)

{
console.error("Erro ocorrido: " +error);
  
throw new Error ('Erro na conta cadastrada');
 
}

}


export async function getTodasContas(): Promise<Contas []> {
        
     try{
    const url = "http://localhost:5000/api/";
    const api = new ApiServices(url);
   
            const contas: Contas[] =   await api.get('contas');
  
            return contas;
     
  
}catch(error)

{
console.error("Erro ocorrido: " +error);
  
throw new Error ('Erro na conta cadastrada');
 
}

}
       
        
    