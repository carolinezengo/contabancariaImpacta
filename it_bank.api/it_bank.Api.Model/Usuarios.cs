using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace it_bank.Api.Model
{
    public class Usuarios : Model
    {
        public string? Email {get; set;}
        public string? Password { get; set; }
       
         public string? Nome { get; set; }
        public virtual ICollection<Contas>? Contas { get; set; } = new List<Contas>();
    }
}