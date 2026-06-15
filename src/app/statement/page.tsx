import Menu from "../ui/componets/menu.components";
import Image from 'next/image';
import Close from "@/app/assets/close.svg"
import Filter from "@/app/assets/filter.svg"



export default function Statement(){
    return (

 <div className="flex flex-col justify-center"    >

             <h1 className="text1 font-bold text-left leading-10 pt-10 pb-10 ml-5">
              Bem Vindo, Caroline
                </h1>
       
        <div className="flex flex-col justify-center m-5 space-y-5">
            <div className=" flex flex-row justify-center align-middle text-center m-2 space-y-2">
                  <h2 className="text-2x1 font-bold text-left col-span-6">

                    Saldo Disponivel
                    
                  </h2>
                 <span className="pl-2 col-span-2"> 
                 <Image src={Close} alt="Meu Ícone" width={20} height={20} className=" h-auto object-cover" />
                   </span>
               </div>

            <div className="flex flex-col border border-gray-400 border-solid p-5 rounded-lg" >
                   <div className="flex-1 flex flex-row justify-between mb-5">
                      <label className="font-bold text-x1">
                       Conta 123
                      </label>

                       <span className="font-bold text-lg"> 
                      <Image src={Filter} alt="Meu Ícone" width={20} height={20} /> 
                      </span>
                   </div>
                    
                    <table className="flex-1">
                        <thead>
                            <tr className="border-b border-solid border-gray-400 h-10 text-gray-400">
                                <th >Transicao</th>
                                <th >Data</th>
                                <th >Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-solid border-gray-500 h-10">
                               
                                <th>Deposito</th>
                                <th>01/11</th>
                                <th>100</th>
                            </tr>
                                <tr className="border-b border-solid border-gray-500 h-10">
                                
                                <th>Deposito</th>
                                <th>01/11</th>
                                <th>300</th>
                            </tr>
                             <tr className="border-b border-solid border-gray-500 h-10">
                                
                                <th>Saque</th>
                                <th></th>
                                <th>50</th>
                            </tr>
                        </tbody>

                    </table>
             </div>
        </div>
         <Menu/>
 </div>
    );
}