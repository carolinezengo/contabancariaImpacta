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
    public class DepositoController : ControllerBase
    {
        private DepositoService DepositoService;
        public DepositoController(DepositoService depositoService )
        {
              DepositoService = depositoService;
        }

        [HttpGet]
        [EnableCors]
        public async Task<IActionResult> Get()
        {

                var result = await DepositoService.All();
                return Ok(result);

        }

        [HttpGet("{id}")]
        [EnableCors]
        public async Task<IActionResult> GetById(long id){

              var result = await DepositoService.Single(id);
            return Ok(result);

        }
        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> Post(Deposito deposito)
        {
            var result = await DepositoService.Add(deposito);
            return Ok(result);
        }

        [HttpPut("{id}")]
        [EnableCors]
        public async Task<IActionResult> Put(Deposito deposito, long id)
        {
            var result = await DepositoService.Replace(id,deposito);
            return Ok(result);
        }
        [HttpDelete("{id}")]
        [EnableCors]
        public async Task<IActionResult> Delete(long id){

            await DepositoService.Remove(id);
            return Ok();

        }


    }
}
    
