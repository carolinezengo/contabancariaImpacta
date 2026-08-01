"use client"; 

import { Button, LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";
import { ConverterFormData}  from '../lib/converterForData';
import { FormEvent } from "react";
import Session from "../lib/session";

 

export  default  function CadAccount(){
   async function onSubmit(event:FormEvent<HTMLFormElement>){
         
            event.preventDefault();  
            const formData= new FormData(event.currentTarget);
              
              console.log(formData.get('nomeConta'));
              String(formData.get('nomeConta'));

           console.log(formData.get('tipoConta'));
            
               String(formData.get('tipoConta'));
             console.log(formData.get('valor'));
           String(formData.get('valor'));
             const sessionId =  await Session();
             console.log("idSession page" + sessionId);
             if(sessionId != undefined)
            await ConverterFormData(formData,sessionId);
   
          }
         

     return(
        <div className="flex flex-col justify-center">
               <h1 className="text-[30px] font-bold text-center leading-10 pt-10 pb-8">Impacta Bank</h1>
                <div className="flex flex-col text-center m-5 spac-y-5 ">
               <h2 className=" text-xl font-bold justify-center leading-5 pb-2 pt-2">Cadastrar Nova Conta</h2>

             <form onSubmit={onSubmit} className="flex flex-col justify-center space-y-5">  
 
                 <h3 className="text-[15px] text-left font-bold  leading-5  pt-3">Nome Conta:</h3>
                 <Input type="text" 
                 placeholder="Conta "
                 name="nomeConta"
                 autoComplete="current-username"
                 />

                <h3 className="text-[15px] text-left font-bold  leading-5 pt-3">Tipo de Conta:</h3>
                <Input type="text"
                 placeholder="Poupança ou Corrente"
                 name="tipoConta"
                  autoComplete="current-password"
                   />
                  <h3 className="text-[15px] text-left font-bold justify-left leading-5 pt-3">Valor:</h3>
                <Input type="text"
                 placeholder="Valor do saldo Inicial"
                 name="valor"
                  autoComplete="current-password"
                  />               
                <Button  btnSize="default" type="submit" btnType="default"  >
                Entrar
                 </Button>
             </form>
          
             <LinkButton btnSize="default" type="button" btnType="destructive" href="/account">
              Voltar
              </LinkButton>
           
        </div>
        <hr/>
        <span>Conheça nossa política de privacidade</span>
         
    </div>
    );
}