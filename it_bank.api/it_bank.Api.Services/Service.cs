using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Repository;

namespace it_bank.Api.Services
{
    public abstract class Service<TModel>
     where TModel : Model.Model
    {
        public Repository<TModel> Repository { get; set; }

        public Service(Repository<TModel> repository)

        {
            Repository = repository;
    }

    }
}