using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Model;

namespace it_bank.Api.Repository
{
    public class DepositoRepository(ItbankContext db) : Repository<Deposito>(db)

    {
    }
}