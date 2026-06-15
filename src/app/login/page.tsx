
'use client';


import { useRouter } from 'next/navigation';
import { Button, LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";
import { FormEvent } from 'react'


 
export default function Login(){

 const router = useRouter();

 async function   onSubmit(event:FormEvent<HTMLFormElement>){
    
        event.preventDefault();  
        const formData= new FormData(event.currentTarget);
     
             console.log(formData.get('email'));
        
          const email=  formData.get('email');
             const password=  formData.get('senha');

             const response = await fetch('api/auth',{
             method: 'post',
              body: JSON.stringify({email,password})
              

             });
             if(response.ok){
               router.push('/account'); 
              }
              else{
                alert('Não autorizado,verificar email e senha')
              }


    }

    return<div className="flex flex-col justify-center">
        <h1 className="text-3x1 font-bold text-center leading-10 pt-10 pb-10">Impacta Bank</h1>
        <div className="flex flex-col text-center m-5 spac-y-5 ">
            <h2 className=" text-2xl font-bold justify-center leading-5 pb-2">Login</h2>
            <h3 className="text-xl font-bold justify-center leading-5 pb-2">Digite seu e-mail</h3>
          <form onSubmit={onSubmit} className="flex flex-col justify-center space-y-5">
            <Input type="text" placeholder="email@domanin.com " name="email"/>
            <h3>Digite sua senha</h3>
            <Input type="password" placeholder="CC@HARF " name="password"/>
            <Button btnSize="default" type="submit" btnType="default" >
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