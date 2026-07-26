using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Schema;
using Microsoft.EntityFrameworkCore;

namespace it_bank.Api.Repository
{
    public abstract class Repository<TModel>
    where TModel: Model.Model
    {
        protected ItbankContext Db { get; set; }
        protected DbSet<TModel> DbSet { get; set; }

       protected Repository(ItbankContext db)
        {
            Db = db;
            DbSet = Db.Set<TModel>();

        }
        public virtual async Task<TModel> Insert(TModel obj)
        {
            await DbSet.AddRangeAsync(obj);
            await Db.SaveChangesAsync();
            return obj;

        }
        public async virtual Task<TModel> Update(long id, TModel obj)
        {
            var curModel = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
            if (curModel != null)
            {
                Db.Entry(curModel).CurrentValues.SetValues(obj);
                await Db.SaveChangesAsync();
            }
            return obj;
        }
   
        public async virtual Task Delete(long id)
        {
            var curModel = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
            if (curModel != null)
            {
                DbSet.Remove(curModel);
            }
            await Db.SaveChangesAsync();
        }
        public virtual async  Task<TModel[]> All(){
           
            return await Task.Run(()=>
            {
                var allEllementos = DbSet.AsEnumerable();
                var result = allEllementos.ToArray();
                return result;
            });
        }

        public async virtual Task<TModel> Find(long id )
        {
            var curModel = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
            if (curModel.Id == id)
            {
            return curModel;
            }
             return curModel;

        }

        

    }

}