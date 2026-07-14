using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace it_bank.Api.Model
{
    public class Transferir : Model
    {
        public string Destino { get; set; }
        public string Valor { get; set; }
        public string DataTransf{get; set;}

        public long idConta { get; set; }

         public virtual Contas Conta { get; set; }
    }

   
}