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
    public class ContasController : ControllerBase
    {
         private ContasService ContasService;
        public ContasController(ContasService contasService)
        {
              ContasService = contasService;
        }

        [HttpGet]
        [EnableCors]
        public async Task<IActionResult> Get()
        {

                var result = await ContasService.All();
                return Ok(result);

        }

        [HttpGet("{id}")]
        [EnableCors]
        public async Task<IActionResult> GetById(long id){

              var result = await ContasService.Single(id);
            return Ok(result);

        }
        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> Post(Contas contas)
        {
            var result = await ContasService.Add(contas);
            return Ok(result);
        }

        [HttpPut("{id}")]
        [EnableCors]
        public async Task<IActionResult> Put(Contas contas, long id)
        {
            var result = await ContasService.Replace(id, contas);
            return Ok(result);
        }
        [HttpDelete("{id}")]
        [EnableCors]
        public async Task<IActionResult> Delete(long id){

            await ContasService.Remove(id);
            return Ok();

        }


    }
}