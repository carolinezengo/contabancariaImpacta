import { Contas } from '@/domain/models';
import { InsertConta}  from '../api/ContaServices';

export async function ConverterFormData( 
     formData: FormData, idUser:string) {
           try{     
            const idUserConvertido = Number(idUser) ;
            const formDataConta= Object.fromEntries(formData.entries()) as { nomeConta: string, tipoConta: string, valor:string };;
          const conta = new Contas(formDataConta.nomeConta, idUserConvertido,formDataConta.tipoConta, formDataConta.valor)
           await InsertConta(conta) ;
  
  } catch (error)
   {
    //erro do redirecionamento
   
      throw error;
    }}
    
     
            
      