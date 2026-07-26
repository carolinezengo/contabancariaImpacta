'use client'
import { FormEvent } from "react";
import {  Button, LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";
import { actionWhithdraw } from "../lib/action";
import Menu from "../ui/componets/menu.components";


export default  function Whithdraw(){

    async function onSubmit(event:FormEvent<HTMLFormElement>){
      event.preventDefault();  
          const formData= new FormData(event.currentTarget);
            
               console.log(formData.get('nomeConta'));
          
               String(formData.get('nomeConta'));
              console.log(formData.get('valor'));
              String(formData.get('valor'));

           await actionWhithdraw(formData)
  
 
        }

  
 
     return(
        <div className="flex flex-col justify-center">
            <h1 className=" text-x1  font-bold text-left leading-10 pt-10 pb-10 m-5">Bem Vindo, Carol</h1>
          
            <div className="flex flex-col justify-center align-middle text-center center m-2 space-y-2">
                <div className="flex flex-col justify-center m-5 space-y-5">
                    
               <form onSubmit={onSubmit} className="flex flex-col justify-center space-y-5">  
 
                 <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite a conta</h3>
                 <Input type="text" 
                 placeholder="nome da conta "
                 name="nomeConta"
                 autoComplete="current-username"
           
                 />

                <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite o valor do Saque</h3>
                <Input type="number"
                 placeholder="122"
                  name="valor"
                  autoComplete="current-password"
                                />
                <Button  btnSize="default" type="submit" btnType="default"  >
               Saque
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

