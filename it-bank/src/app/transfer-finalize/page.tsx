
import Menu from "../ui/componets/menu.components";
import { Input } from "../ui/componets/input.componet";
import { Button, LinkButton } from "../ui/componets/button.component";


import { auth } from "../../../auth";

import ApiServices from "../api/ApiServices";
import { Contas } from "@/domain/models";
import { actionTransferir } from "../lib/action";




async function onSubmit(dadoValor:string, formData:FormData) {
      "use server"
        String( formData.get('nomeConta'));
            console.log("verificar nome conta: "+formData.get('nomeConta'))
       
             String(formData.get('nomeDestino'))
              console.log("verificar nome conta: "+formData.get("nomeDestino"))

              if(dadoValor != undefined)
             await  actionTransferir(dadoValor,formData)
    
      }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createRow(contas: any,dadoValor:string){
  const actionWithId = onSubmit.bind(null, dadoValor);

  return(
     <tr key={contas?.nomeConta} className="border-b border-solid border-gray-400 h-10 text-gray-400">
     <td colSpan={3} className="p-0">
      < form action={actionWithId} className="flex w-full items-center" >

       <div className="flex-1 -ml-18  px-2 py-2">
        <Input type="hidden" 
        name='nomeConta' 
       value={contas?.nomeConta} />
       {contas?.nomeConta}
     
       </div>
      
     <div className="flex-1 -ml-20 px-2 py-2" >
      <Input type="hidden" 
       name='nomeDestino' 
      value={contas?.nomeUsuario} />
      {contas?.nomeUsuario}
      </div>
      <div className="right">
   
      <Button btnType="secudary" btnSize="icon" type="submit"  > 
       ...
      </Button>

      </div>   
      
      </form>         
       </td>  
    </tr>
    
    )
}


export default async function Tranfer({searchParams}:{
     searchParams: Promise<{ [key: string]: string | undefined }>;
}){
      const params = await searchParams;

  const dado = params.valor
    console.log("dado vindo transferir" + dado)
    if(dado != undefined){
      const dadoValor= dado
    

     
const session =await auth();
const user= session?.user 


 const url ="http://localhost:5000/api/"
    const api = new ApiServices(url);
    const responseContas : Contas[]= await api.get('contas');
          const contasComNome = responseContas.map((conta: Contas) => ({
    ...conta,
    nomeUsuario: user?.name || 'Usuário Desconhecido',
  }));



return(

  <div>
    <div className="flex flex-col justify-center">

      <h1 className="text-3x1 font-bold text-center leading-10 pt-10 pb-10" suppressHydrationWarning>
              Bem Vindo, {user?.name}
                </h1>
       
        <div className="flex flex-col justify-center m-5 space-y-5">
            <div className=" flex flex-col justify-center align-middle text-center m-2 space-y-2">
                  <h2 className="text-2x1 font-bold text-left col-span-6">
                 Selecione destino
                   
                  </h2>
           
                             
                  <table className="flex-1 min-w-full">
                        <thead>
                            <tr className="border-b border-solid border-gray-400 h-10 text-gray-400">
                                <th >Conta</th>
                                <th >Favorecido</th>
                                <th className="right w-10">Photo</th>
                            </tr>
                        </thead>
                         <tbody>
                          
                            {contasComNome.map(ac=> createRow(ac,dadoValor) )}
                      
                        </tbody>

                    </table>
              
                    <LinkButton  btnSize="default" btnType="default" href="/statement">Cancelar</LinkButton>
                    
                  </div>
                  
               
             
              </div>
               
        </div>
         <Menu/>
 </div  >


    )};}

