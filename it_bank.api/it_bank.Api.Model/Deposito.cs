using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace it_bank.Api.Model
{
    public class Deposito : Model
    {
        
        public string? Valor { get; set; }
  
         public string? DataDeposito { get; set; }
       public long? idConta { get; set; }

       [JsonIgnore]
       public virtual Contas? Conta { get; set; } // Propriedade de navegação
    
        
    }
}