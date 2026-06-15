import {  LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";

export default function Singup(){
    return<div className="flex flex-col justify-center">
        <h1 className="text-3x1 font-bold text-center leading-10 pt-10 pb-10">Impacta Bank</h1>
        <div className="flex flex-col text-center m-5 spac-y-5 ">
            <h2 className=" text-2xl font-bold justify-center leading-5 pb-2">SingUp</h2>
            <h3 className="text-xl font-bold justify-center leading-5 pb-2">Prencha seu email e escolha sua senha</h3>
            <Input type="text" placeholder="email@domanin.com " name="email"/>
            <h3>Digite sua senha</h3>
            <Input type="password" placeholder="CC@HARF " name="password"/>
            <LinkButton btnSize="default" type="submit" btnType="default" href="/account">Criar</LinkButton>
            <LinkButton btnSize="default" type="button" btnType="destructive" href="/login">Cancelar</LinkButton>
           
        </div>
        <hr/>
        <span>Ao clicar em criar minha conta, vocÊ aceita nosso<span className="font-bold"> Termos Serviços</span></span>
         
    </div>
}