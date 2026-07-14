using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Model;
using it_bank.Api.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace it_bank.Api.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private UsuariosService UsuarioService;
        public UsuarioController(UsuariosService usuarioService)
        {
              UsuarioService = usuarioService;
        }

        [HttpGet]
        [EnableCors]
        public async Task<IActionResult> Get()
        {

                var result = await UsuarioService.All();
                return Ok(result);

        }

        [HttpGet("{id}")]
        [EnableCors]
        public async Task<IActionResult> GetById(long id){

              var result = await UsuarioService.Single(id);
            return Ok(result);

        }
        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> Post(Usuarios usuarios)
        {
            var result = await UsuarioService.Add(usuarios);
            return Ok(result);
        }

        [HttpPut("{id}")]
        [EnableCors]
        public async Task<IActionResult> Put(Usuarios usuarios, long id)
        {
            var result = await UsuarioService.Replace(id, usuarios);
            return Ok(result);
        }
        [HttpDelete("{id}")]
        [EnableCors]
        public async Task<IActionResult> Delete(long id){

            await UsuarioService.Remove(id);
            return Ok();

        }


    }
}
