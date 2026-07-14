'use client'

//import { useRouter } from 'next/navigation';
import { Button, LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";

import { authenticate } from '../api/actions';
import { FormEvent } from "react";


//import { verificarEmailExistente } from '../api/UsuarioServices';

export default function Login(){
 

   async function onSubmit(event:FormEvent<HTMLFormElement>){
       
        event.preventDefault();  
        const formData= new FormData(event.currentTarget);
          
             console.log(formData.get('email'));
        
             String(formData.get('email'));
            console.log(formData.get('password'));
            String(formData.get('password'));

           await authenticate( formData);

         

            //try{
       // if(email && password)
        // const usuarioExiste = verificarEmailExistente(email,password);
              //if (!!usuarioExiste) {
                //    setMensagem('Aviso: Este e-mail já está cadastrado em nosso banco de dados.');
                  // router.push('/account'); 
                  //} else {
                //setMensagem('Sucesso: E-mail disponível para cadastro!');
             // Aqui você pode prosseguir com a lógica de salvar o usuário
                 //}
          //} 
             
           // catch (error) {
          //setMensagem('Erro ao verificar o e-mail. Tente novamente.');
         //}
 
   
      }

     

    return <div className="flex flex-col justify-center">
               <h1 className="text-3x1 font-bold text-center leading-10 pt-10 pb-10">Impacta Bank</h1>
                <div className="flex flex-col text-center m-5 spac-y-5 ">
               <h2 className=" text-2xl font-bold justify-center leading-5 pb-2">Login</h2>

             <form onSubmit={onSubmit} className="flex flex-col justify-center space-y-5">  
 
                 <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite seu e-mail</h3>
                 <Input type="text" 
                 placeholder="email@domanin.com "
                 name="email"
                 autoComplete="current-username"
           
                 />

                <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite sua senha</h3>
                <Input type="password"
                 placeholder="CC@HAR"
                 name="password"
                  autoComplete="current-password"
                                />
                <Button  btnSize="default" type="submit" btnType="default"  >
                Entrar
                 </Button>
             </form>
          
             <LinkButton btnSize="default" type="button" btnType="secudary" href="/singup">
              Criar sua conta
              </LinkButton>
           
        </div>
        <hr/>
        <span>Conheça nossa política de privacidade</span>
         
    </div>
    
}
