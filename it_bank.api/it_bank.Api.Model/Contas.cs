using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace it_bank.Api.Model
{
    public class Contas :Model
    {

        public string? NomeConta { get; set; }
        public string? TipoConta { get; set; }
        public string? Valor { get; set; }
         public long IdUsuario { get; set; }
        public virtual Usuarios  Usuario { get; set; }

  
        public virtual ICollection<Deposito> Depositos { get; set; } = new List<Deposito>();
         public  virtual ICollection<Transferir> Transferir { get; set; } = new List<Transferir>();
    }
}