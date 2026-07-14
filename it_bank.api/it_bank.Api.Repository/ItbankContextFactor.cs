using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;



namespace it_bank.Api.Repository
{
    public class ItbankContextFactor: IDesignTimeDbContextFactory<ItbankContext>
    {
        public ItbankContext CreateDbContext(string[] args = null)
        {
            var basePath = Directory.GetCurrentDirectory();
            var appSettingFileName = "appsettings.json";

            
#if DEBUG
            basePath = Path.Combine(basePath,"it_bank.Api.App");
            var appSettingFileNamePath = Path.Combine(basePath, appSettingFileName);
            
            if (!File.Exists(appSettingFileNamePath))
            {
                basePath = Directory.GetCurrentDirectory();
                basePath = Path.Combine(basePath, "..", "it_bank.Api.App");
                
             

            }
            else
            {
                Console.WriteLine("Não existe");
            }
#endif

            var configuration = new ConfigurationBuilder()
                                    .SetBasePath(basePath)
                                    .AddJsonFile(appSettingFileName)
                                    .Build();

            var builder = new DbContextOptionsBuilder<ItbankContext>();

            var connectionStringKey = "ItbankConnectionString";
            var connectionString = configuration.GetConnectionString(connectionStringKey);
            builder.UseSqlServer(connectionString);



            var result = new ItbankContext(builder.Options);
       
             
            return result;
        }

    }
}