'use server'
import { Button, LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";
import Menu from "../ui/componets/menu.components";

import { Contas } from "@/domain/models";

import { getTodasContas } from "../api/ContaServices";

import { actionDeposit } from "../lib/action";



   export async function onSubmit(formData:FormData) {
     
              String( formData.get('nomeConta'));
      console.log("verificar nome conta: "+formData.get('nomeConta'))
     console.log("verificar2: "+formData.getAll('valor'))
     String(formData.get('valor'))
       String(formData.get('data'))
         String(formData.get('valor'))
    
    // Call the server action like a normal async function
    await actionDeposit(formData); 
  }


export default async function Deposit(){

          
        const todasContas:Contas[] = await getTodasContas();

     return( <div className="flex flex-col justify-center">
            <h1 className=" text-x1  font-bold text-left leading-10 pt-10 pb-10 m-5">Bem Vindo, Carol</h1>
          
            <div className="flex flex-col justify-center align-middle text-center center m-2 space-y-2">
                <div className="flex flex-col justify-center m-5 space-y-5">
                    
               <form action={onSubmit} className="flex flex-col justify-center space-y-5">  
    
                 <h3 className="text-xl font-bold justify-center leading-5 pb-2">Escolha a conta</h3>
                 <select id="tecnologias" name="nomeConta" multiple size={3}>
        {todasContas.map((item) => (
          <option key={item.id} >
            {item.nomeConta}
          </option>
        ))}
      </select>
    
                 <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite o valor do Deposito</h3>
                      <Input type="number"
                 placeholder="122"
                  name="valor"
                  autoComplete="current-password"
                />    
                         <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite o valor do Deposito</h3>
                      <Input type="text"
                 placeholder="122"
                  name="data"
                  autoComplete="current-password"
                />     
                         <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite o valor do Deposito</h3>
                      <Input type="text"
                 placeholder="122"
                  name="tipo"
                  autoComplete="current-password"
                />       
              
                
             
                <Button  btnSize="default" type="submit" btnType="default"  >
             Depositar
                 </Button>
             </form>
          
                         <LinkButton type="submit" btnType="destructive" btnSize="default" href="/statement" key="cancelarSaque">
                       Cancelar
                    </LinkButton>
                </div>
             <Menu/> 
            </div>
           
        </div>
    );
}

