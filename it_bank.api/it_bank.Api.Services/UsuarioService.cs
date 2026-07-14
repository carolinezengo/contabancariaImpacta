using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Model;
using it_bank.Api.Repository;

namespace it_bank.Api.Services
{
   
    public class  UsuariosService : CRUDService<Usuarios>
    {
        public UsuariosService(UsuariosRepository repository) : base(repository)
        {
        }

     
        public override async Task<Usuarios> Add(Usuarios obj)
        {

          
              var alunoModel = await base.Add(obj);



            var result = await base.Single(obj.Id);




            return result;
        }

    public async override Task<Usuarios> Replace(long id, Usuarios obj)
    {

      
      var usuarioModel = await base.Replace(id, obj);


      var result = await base.Single(usuarioModel.Id);




      return result;
    }
        
        
        

       
    }
}