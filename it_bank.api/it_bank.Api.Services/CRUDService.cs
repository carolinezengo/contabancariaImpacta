using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Repository;

namespace it_bank.Api.Services
{
    public abstract class CRUDService<TModel>(Repository<TModel> repository) : Service<TModel>(repository)
    where TModel:Model.Model
    {
        public async virtual Task<TModel> Add(TModel obj)
        {
            var result = await Repository.Insert(obj);
            return result ;

        }
        public async virtual Task<TModel> Replace(long id, TModel obj)
        {
            var result = await Repository.Update(id,obj);
            return result;

        }

         public async virtual Task<TModel> ReplaceItem(long id, TModel obj)
        {
            var result = await Repository.Update(id,obj);
            return result;

        }
        public async virtual Task Remove(long id)
        {
              await Repository.Delete(id);

        }

        public async virtual Task<TModel> Single(long id)
        {

            var result = await Repository.Find(id);
            return result;
        }

        public async virtual Task<TModel[]> All()
        {

            var result = await Repository.All();
            return result;
        }
    }
}