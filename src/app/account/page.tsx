import { AccountInfo } from "@/domain/models";
import Menu from "../ui/componets/menu.components";
import Link from "next/link";


function createRow(account: AccountInfo){
   
  return(

     <tr key={account.name} className="border-b border-solid border-gray-400 h-10">
      <td>{account.name}</td>
      <td>{account.type}</td>
      <td>{account.value}</td>
      <td><Link href="/statement">..</Link></td>
    </tr>
    
    )
}

export default async function Account(){
   async function getData():Promise<Array<AccountInfo>> {
    'use server'
    return[{name:'cc-1',type:"conta corrente", value:"50"},
      {name:'cc-2',type:"conta pouoanca", value:"50"}

    ];
    
   }
   const data = await getData();

    return <div className=" flex flex-col justify-center">
          <h1 className=" text-3x1 font-bold text-left m-5 leading-10 pt-10 pb-10"> Bem vindo, Carol</h1>
    <div className=" flex flex-col m-5 space-y-5 justify-center">
    <h2 className=" font-bold text-left leading-5 pb-2"> Selecione sua conta</h2>
    <table>
  <thead>
    <tr className="border-b border-solid border-gray-400 h10 h-10">
      <th className="text-left text-gray-400">Conta</th>
      <th className="text-left text-gray-400">Descrição</th>
      <th className="text-left text-gray-400" >Saida</th>
    </tr>
  </thead>
  <tbody>
   {data.map(ac=> createRow(ac))}
    </tbody>
    </table>

    </div>  
    <Menu/>
    </div>
}
