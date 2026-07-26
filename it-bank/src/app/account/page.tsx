
import {  Contas } from "@/domain/models";
import Menu from "../ui/componets/menu.components";

import ApiServices from "../api/ApiServices";
import { auth } from "../../../auth";
import Link from "next/link";


  


function createRow(contas: Contas ){
   
  return(

     <tr key={contas?.nomeConta} className="border-b border-solid border-gray-400 h-10">
      <td>{contas?.nomeConta}</td>
      <td>{contas?.tipoConta}</td>
      <td>{contas?.valor}</td>
    <td><Link href={{pathname: "/statement", query:{nomeConta: contas?.nomeConta}} }>
      ...
      </Link></td>
    </tr>
    
    )
}

 

export default async function Account({
  
}:{
    contas:Contas

}){
//   async function getData():Promise<Array<AccountInfo>> {
  //  'use server'
    //return[{name:'cc-1',type:"conta corrente", value:"50"},
    //  {name:'cc-2',type:"conta pouoanca", value:"50"}

    //];
    
   //}

   //const data = await getData();
  
   const url = "http://localhost:5000/api/"
   const api = new ApiServices(url);

    const data:Contas[] = await api.get('Contas');
  
    const session = await auth();
    const user= session?.user.name;
   

   return <div className=" flex flex-col justify-center">
          <h1 className=" text-3x1 font-bold text-left m-5 leading-10 pt-10 pb-10"> Bem vindo, {user}</h1>
                    
           <div className=" flex flex-col m-5 space-y-5 justify-center">
            <div className=" text-[10px] m-5  leading-10 text-right text-blue-600">  
              <Link href="/cadAccount"    >
            
               Nova Conta
            </Link></div>
           
           
    <h2 className=" font-bold text-left leading-5 pb-2"> Selecione sua conta</h2>
     
    <table>
  <thead>
    <tr className="border-b border-solid border-gray-400 h10 h-10">
      <th className="text-left text-gray-400">Conta</th>
      <th className="text-left text-gray-400">Descrição</th>
      <th className="text-left text-gray-400" >Saldo</th>
    </tr>
  </thead>
  <tbody>
   {data.map(ac=> createRow(ac) )}
    </tbody>
    </table>
    </div>  
    <Menu/>
    </div>
}
