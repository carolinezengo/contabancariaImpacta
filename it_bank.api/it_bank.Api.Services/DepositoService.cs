using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Model;
using it_bank.Api.Repository;

namespace it_bank.Api.Services
{
    public class DepositoService : CRUDService<Deposito>
    {
        public DepositoService(DepositoRepository repository) : base(repository)
        {
        }
    }
}