import { LinkButton } from "../ui/componets/button.component";
import { Input } from "../ui/componets/input.componet";

export default function Deposit(){

    return(
        <div className="flex flex-col justify-center">
            <h1 className=" text-x1  font-bold text-left leading-10 pt-10 pb-10 m-5">Bem Vindo, Carol</h1>
            <div className="flex flex-col justify-center align-middle text-center center m-2 space-y-2">
                <div className="flex flex-col justify-center m-5 space-y-5">
                    <h2 className=" font-bold text-center leading-5 pb-5">Digite o valor desejado para depositar</h2>
                    <div className="flex flex-col justify-center align-middle text-center center m-2 pb-3 ">
                    <Input type="number" placeholder="Digite o valor do Deposito"/>
                </div>
                </div>
                <div className="flex flex-col justify-center align-bottom text-center m-2 space-y-7">
                    <LinkButton type="submit" btnType="default" btnSize="default" href="/statement" key="depositarConta"   >
                       Depositar 
                    </LinkButton>
                         <LinkButton type="submit" btnType="destructive" btnSize="default" href="/statement" key="cancelarDeposito" >
                       Cancelar
                    </LinkButton>
                </div>
                
            </div>
        </div>
    );
}