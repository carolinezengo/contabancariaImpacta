import Menu from "../ui/componets/menu.components";
import Image from 'next/image';
import Close from "@/app/assets/close.svg"
import Filter from "@/app/assets/filter.svg"
import { Contas} from "@/domain/models";
import ApiServices from "../api/ApiServices";
import { auth } from "../../../auth";




async function createRow(contas: Contas){
 
 contas.depositos = contas.depositos.map(item => ({
  ...item,
  data: item.dataDeposito,
  tipo: "Depósito"
}));

contas.transferir = contas?.transferir.map(item => ({
  ...item,
  data: item.dataTransf,
  tipo: "Transferência"
}));

const todasTransicoes = [
  ...(contas?.depositos?? []),
  ...(contas?.transferir ?? [])
];


     console.log("todas transicoes "+ JSON.stringify(todasTransicoes))
   return(
    <tbody>
        {todasTransicoes.map((item) => ( 
     <tr key={item?.idConta} className="border-b border-solid border-gray-400 h-10">
       <td>{item?.tipo}</td>
      <td>{item?.data}</td>
      <td>{item?.valor}</td>

    </tr>
     ))}
    
    </tbody>
     
    )
}

export default async function Statement({searchParams}:{
     searchParams: Promise<{ [key: string]: string | undefined }>;
}){
   
 const params = await searchParams;
  const nomeConta = params.nomeConta;

   

  console.log("nome conta "+nomeConta);

    const url = "http://localhost:5000/api/"
       const api = new ApiServices(url);

       const session = await auth();
       const nomeUserSession = session?.user.name;
    
        const data:Contas[] = await api.get('Contas');
       const dadosContaEscolhida : Contas[]= data.filter(a => a.nomeConta === nomeConta);
   
        return (

 <div className="flex flex-col justify-center"    >

             <h1 className="text1 font-bold text-left leading-10 pt-10 pb-10 ml-5">
              Bem Vindo, {nomeUserSession}
                </h1>
       
        <div className="flex flex-col justify-center m-5 space-y-5">
            <div className=" flex flex-row justify-center align-middle text-center m-2 space-y-2">
                  <h2 className="text-2x1 font-bold text-left col-span-6">

                    Saldo Disponivel        {dadosContaEscolhida.map(d=> d.valor)}
                    
                  </h2>
                 <span className="pl-2 col-span-2"> 
                 <Image src={Close} alt="Meu Ícone" width={20} height={20} className=" h-auto object-cover" />
                   </span>
               </div>

            <div className="flex flex-col border border-gray-400 border-solid p-5 rounded-lg" >
                   <div className="flex-1 flex flex-row justify-between mb-5">
                      <label className="font-bold text-x1">
                       {nomeConta}
                      </label>

                       <span className="font-bold text-lg"> 
                      <Image src={Filter} alt="Meu Ícone" width={20} height={20} /> 
                      </span>
                   </div>
                    
                    <table className="flex-1">
                        <thead>
                            <tr className="border-b border-solid border-gray-400 h-10 text-gray-400">
                            
                         <th className="text-left text-gray-400">Transição</th>
                         <th className="text-left text-gray-400">Data</th>
                         <th className="text-left text-gray-400" >Valor</th>
                          </tr>
                        </thead>
                       
                         {await dadosContaEscolhida.map(ac => createRow(ac))}
                      
                    </table>
             </div>
        </div>
         <Menu/>
 </div>
    );
}