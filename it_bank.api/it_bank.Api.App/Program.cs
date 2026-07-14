using System.Runtime.InteropServices;
using it_bank.Api.Repository;
using it_bank.Api.Services;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<ItbankContextFactor>();
builder.Services.AddControllers()
                 .AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler
                 = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);
builder.Services.AddTransient(options => options.GetService<ItbankContextFactor>().CreateDbContext());
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirReact", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod() // Substitua pela porta exata do seu React
              .AllowAnyHeader();
              
    });
});
builder.Services.AddScoped<UsuariosRepository>();
builder.Services.AddScoped<ContasRepository>();
builder.Services.AddScoped<UsuariosService>();
builder.Services.AddScoped<ContasService>();



var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors("PermitirReact");

app.UseAuthorization();

app.MapControllers();

app.Run();
