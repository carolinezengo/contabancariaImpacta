import { Contas} from "@/domain/models";
import ApiServices from "../api/ApiServices";
import { AlterConta } from "../api/ContaServices";
import { redirect } from 'next/navigation';
import { boolean } from "zod/v4";


 export async function actionWhithdraw( formData: FormData){
 

      try{     
         type tuplaResposta = [boolean, string];
               
                const formDataConta= Object.fromEntries(formData.entries()) as { nomeConta: string,  valor:string, dataSaque:string,data:string, tipo:string };;
              
                const url = "http://localhost:5000/api/";
                
                    const api = new ApiServices(url);
                      const response : Contas[]= await api.get('contas');

                      console.log("array conta" + JSON.stringify(response))

                         console.log("saquenome" + formDataConta.nomeConta);

                       if (response != null){
                        
                          const conta= response.find(a => a.nomeConta === formDataConta.nomeConta);
                          const id = conta?.id;
                         console.log (" conta busca  action"+ JSON.stringify(conta))

                          if(conta?.nomeConta == formDataConta.nomeConta)
                            {

                          const contaValor: number = Number(conta?.valor);
                          const valorSaque: number = Number(formDataConta.valor);
                          

                        if(contaValor > valorSaque){

                          const saldo = (contaValor - valorSaque)

                          console.log("saldo" + saldo)
                      if(conta != undefined && id != undefined){
                      const resp=   await AlterConta(conta, saldo.toString(),"valor", id)
                       console.log("retorno do nome da conta  apos alterar"+resp?.nome)
                      if(resp?.sucess){
                          redirect(`/statement?nomeConta=${resp.nome}`)
                        }
                         
                           

                       //   console.log(" resultado retronado " + resultadoResponse)
                             
                        }
                          
                          }

                        
                  
                      
                         
                          
                  }
                }else{
                  console.log("Não existe essa conta")
                }
                      
                          
                         
              
      
      } catch (error){
        //erro do redirecionamento
       
          throw error;
       }
        
}