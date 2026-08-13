'use client'
import { useRef } from "react";
import { Button, LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";
import { useRouter } from 'next/navigation'; 

export default function Transfer(){

  const inputRef = useRef<HTMLInputElement>(null);
  
   const router = useRouter();
  const handleEnviar = () => {
    
    const valor = inputRef.current?.value|| '';// Pega o valor direto do DOM

  console.log("valor na funcao onclick" + valor)

    router.push(`/transfer-finalize?valor=${encodeURIComponent(valor)}`);
  };



    return(
        <div className="flex flex-col justify-center">
            <h1 className=" text-x1  font-bold text-left leading-10 pt-10 pb-10 m-5">Bem Vindo, Carol</h1>
            <div className="flex flex-col justify-center align-middle text-center center m-2 space-y-2">
                <div className="flex flex-col justify-center m-5 space-y-5">
                    <h2 className=" font-bold text-center leading-5 pb-5">Digite o valor desejado para transferencia</h2>
                    <div className="flex flex-col justify-center align-middle text-center center m-2 pb-3 ">
                    <Input ref ={inputRef} type="number" placeholder="Digite o valor da Transferencia"/>
                </div>
                </div>
                <div className="flex flex-col justify-center align-bottom text-center m-2 space-y-7">
                    <Button   onClick={handleEnviar} type="submit" btnType="default" btnSize="default"  key="transferir" >
                       Tranferir valor 
                    </Button>
                         <LinkButton type="submit" btnType="destructive" btnSize="default" href="/statement" key="cancelarDeposito">
                       Cancelar
                    </LinkButton>
                </div>
                
            </div>
        </div>
    );
}