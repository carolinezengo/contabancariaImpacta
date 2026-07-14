import Link from "next/link";
import Image  from "next/image";
import Home from "../../assets/home.svg";
import Depositar from "../../assets/Deposito.svg";
import Sacar from "../../assets/Saque.svg";
import Transferir from "../../assets/Tranferir.svg";


export default function Menu(){   

    return(
        <div className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-around bg-white py-3 shadow-t dark:bg-gray-950 lg:hidden ">
            <Link href="/account" className="flex flex-col items-center gap--1 text-xs font-medium text-gray-500 hover:text-gray-900">
             <Image src={Home} alt="Meu Ícone" width={25} height={25} className=" h-auto object-cover" />
            Contas
            </Link>  
             <Link href="/deposit"  className="flex flex-col items-center gap--1 text-xs font-medium text-gray-500 hover:text-gray-900">
            <Image src={Depositar} alt="Meu Ícone" width={25} height={25} className=" h-auto object-cover" />
             Depositar
            </Link> 
             <Link href="/whithdraw"  className="flex flex-col items-center gap--1 text-xs font-medium text-gray-500 hover:text-gray-900">
            <Image src={Sacar} alt="Meu Ícone" width={25} height={25} className=" h-auto object-cover" />
             Sacar
            </Link> 
             <Link href="/transfer"  className="flex flex-col items-center gap--1 text-xs font-medium text-gray-500 hover:text-gray-900">
            <Image src={Transferir} alt="Meu Ícone" width={25} height={25} className=" h-auto object-cover" />
             Tranferir
            </Link> 
           
             </div>
    );

}