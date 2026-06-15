import Link from "next/link";
import Menu from "../ui/componets/menu.components";
import { Input } from "../ui/componets/input.componet";
import { LinkButton } from "../ui/componets/button.component";
import Image from 'next/image';
import person from "../person.svg"



export default function Tranfer(){
return(

  <div>
    <div className="flex flex-col justify-center"    >

             <h1 className="text-3x1 font-bold text-center leading-10 pt-10 pb-10 ">
              Bem Vindo, Caroline
                </h1>
       
        <div className="flex flex-col justify-center m-5 space-y-5">
            <div className=" flex flex-col justify-center align-middle text-center m-2 space-y-2">
                  <h2 className="text-2x1 font-bold text-left col-span-6">
                 Selecione destino
                   
                  </h2>
               
              
            <div className=" flex flex-col justify-center align-middle text-center m-2 pb-3" >
                  <Input type="text" placeholder="procurar" className="mb-10"/>
                  
                    
                    <table className="flex-1 min-w-full">
                        <thead>
                            <tr className="border-b border-solid border-gray-400 h-10 text-gray-400">
                                <th >Conta</th>
                                <th >Favorecido</th>
                                <th className="right w-10">Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-solid border-gray-500 h-14">
                               
                                <th>CC-2</th>
                                <th>Joana</th>
                                <th><Link href="/statement"> <Image src={person} alt="Meu Ícone" width={20} height={20} className=" h-auto object-cover" /></Link></th>   
                             
                            </tr>
                                <tr className="border-b border-solid border-gray-500 h-10">
                                
                                <th>CC-4</th>
                                <th>PEDRO</th>
                           <th className="right"><Link href="/statement"> <Image src={person} alt="Meu Ícone" width={20} height={20} className=" h-auto object-cover" /></Link></th>   
                                
                            </tr>
                           
                         
                        </tbody>

                    </table>

                    <LinkButton btnSize="default" btnType="default" href="/statement">Cancelar</LinkButton>
                     </div>
             </div>
              </div>
        </div>
         <Menu/>
 </div  >


);
}