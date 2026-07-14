using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Model;
using it_bank.Api.Repository;

namespace it_bank.Api.Services
{
    public class ContasService : CRUDService<Contas>
    {
        public ContasService(ContasRepository repository) : base(repository)
        {
        }
    }
}