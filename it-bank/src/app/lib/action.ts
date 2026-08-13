
import { Contas, Depositos, Transferencia} from "@/domain/models";
import ApiServices from "../api/ApiServices";
import { AlterConta } from "../api/ContaServices";
import { redirect } from 'next/navigation';
import { InsertTransicao } from "../api/TransicaoServices";



export async function actionTransferir(valorTrans:string,formData: FormData){
   
    try{     
         const dataAtual = new Date().toLocaleDateString('pt-BR', {
          timeZone:'America/Sao_Paulo'
         })
     
          
        const tipo = "Transferência"
        const formDataTransferir= Object.fromEntries(formData.entries()) as { nomeConta: string,  nomeDestino:string};
              console.log("formdata tratado nome  "+formDataTransferir.nomeDestino);
         const url = "http://localhost:5000/api/";
                
          const api = new ApiServices(url);
          const response : Contas[]= await api.get('contas');

            console.log("array conta" + JSON.stringify(response))

            console.log("Nome da conta de transferencia" + formDataTransferir.nomeConta);

            if (response != null){
                      
               const conta= response.find(a => a.nomeConta=== formDataTransferir.nomeConta);
               const id = conta?.id;
               console.log (" conta busca  action"+ JSON.stringify(conta))
                 if(conta?.nomeConta == formDataTransferir.nomeConta)
                    {

                     const contaValor: number = Number(conta?.valor);
                     const valorTransf: number = Number(valorTrans);
                                                 
                     const saldo = (contaValor - valorTransf)
                     if(id != undefined){
                         const transfencia = new Transferencia(
                              formDataTransferir.nomeDestino,
                                valorTrans,
                                dataAtual,
                                id,
                                tipo,
                              dataAtual);

                         console.log("objeto " + JSON.stringify(transfencia))
                     
                          await InsertTransicao(transfencia);

                          console.log("saldo" + saldo)
                         if(conta != undefined && id != undefined){
                          const resp=   await AlterConta(conta, saldo.toString(),"valor", id)
                                 console.log("retorno do nome da conta  apos alterar")
                                 if(resp?.sucess)
                                 redirect(`/statement?nomeConta=${resp.nome}`)
                    
                }
                        };
                        
               
              }
                          
        }
         
      
              } catch(error){
                
              if (error instanceof Error && error.message.startsWith('NEXT_REDIRECT')) {

                console.error("erro emetido  ",error.message)
                      throw error;
                }

              }
      
     
            }

export async function actionDeposit( formData: FormData){
    
      try{     
      
        const formDataConta= Object.fromEntries(formData.entries()) as { nomeConta: string,  valor:string, data:string, tipo:string };
              console.log("formdata tratado nome  "+formDataConta.nomeConta);
              console.log("formdata data"+formDataConta.data);
                const url = "http://localhost:5000/api/";
                
                    const api = new ApiServices(url);
                      const response : Contas[]= await api.get('contas');

                      console.log("array conta" + JSON.stringify(response))

                         console.log("Nome da conta de deposito" + formDataConta.nomeConta);

                       if (response != null){
                        
                          const conta= response.find(a => a.nomeConta === formDataConta.nomeConta);
                          const id = conta?.id;
                         console.log (" conta busca  action"+ JSON.stringify(conta))

                          if(conta?.nomeConta == formDataConta.nomeConta)
                            {

                          const contaValor: number = Number(conta?.valor);
                          const valorDeposit: number = Number(formDataConta.valor);
                                                 
                          const saldo = (contaValor + valorDeposit)
                         if(id != undefined){

                    const deposito = new Depositos(
                         formDataConta.valor,
                           formDataConta.data,
                            id,
                          formDataConta.tipo,
                          formDataConta?.data
                          );
                     
                          const response = await InsertTransicao(deposito);
                         };
                        
                       console.log("saldo" + saldo)
                      if(conta != undefined && id != undefined){
                      const resp=   await AlterConta(conta, saldo.toString(),"valor", id)
                       console.log("retorno do nome da conta  apos alterar"+resp?.nome)
                      if(resp?.sucess){
                   
                         await redirect(`/statement?nomeConta=${resp.nome}`)
                        }
                     
                       //   console.log(" resultado retronado " + resultadoResponse)
                             
                        }
                          
                          }
  
                          
                  }
                
                      
             
      } catch (error){
        //erro do redirecionamento
       
          throw error;
       }
        
}



 export async function actionWhithdraw( formData: FormData){
 

      try{     
          const formDataSaque= Object.fromEntries(formData.entries()) as { nomeConta: string,  valor:string, dataSaque:string,data:string, tipo:string };;
              
                const url = "http://localhost:5000/api/";
                
                    const api = new ApiServices(url);
                      const response : Contas[]= await api.get('contas');

                      console.log("array conta" + JSON.stringify(response))

                         console.log("saquenome" + formDataSaque.nomeConta);

                       if (response != null){
                        
                          const conta= response.find(a => a.nomeConta === formDataSaque.nomeConta);
                          const id = conta?.id;
                         console.log (" conta busca  action"+ JSON.stringify(conta))

                          if(conta?.nomeConta == formDataSaque.nomeConta)
                            {

                          const contaValor: number = Number(conta?.valor);
                          const valorSaque: number = Number(formDataSaque.valor);
                          

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
