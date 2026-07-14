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
    public class TransferirController : ControllerBase
    {
        
        private TransferirService TransferirService;
        public TransferirController(TransferirService transferirService)
        {
              TransferirService = transferirService;
        }

        [HttpGet]
        [EnableCors]
        public async Task<IActionResult> Get()
        {

                var result = await TransferirService.All();
                return Ok(result);

        }

        [HttpGet("{id}")]
        [EnableCors]
        public async Task<IActionResult> GetById(long id){

              var result = await TransferirService.Single(id);
            return Ok(result);

        }
        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> Post(Transferir transferir)
        {
            var result = await TransferirService.Add(transferir);
            return Ok(result);
        }

        [HttpPut("{id}")]
        [EnableCors]
        public async Task<IActionResult> Put(Transferir transferir, long id)
        {
            var result = await TransferirService.Replace(id,transferir);
            return Ok(result);
        }
        [HttpDelete("{id}")]
        [EnableCors]
        public async Task<IActionResult> Delete(long id){

            await TransferirService.Remove(id);
            return Ok();

        }


    }
        
    }
