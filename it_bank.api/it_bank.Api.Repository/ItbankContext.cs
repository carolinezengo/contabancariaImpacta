using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using it_bank.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace it_bank.Api.Repository
{
    public class ItbankContext : DbContext
    {   
         public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Contas> Contas { get; set; }
        public DbSet<Deposito> Deposito { get; set; }
        public DbSet<Transferir> Tranferir { get; set; }
      
        public ItbankContext(DbContextOptions options): base(options) 
        {
            
        }

         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Usuarios>(buildAction =>
            {
                modelBuilder.Entity<Usuarios>(buildAction =>
                {
                     buildAction.ToTable("Usuarios");
                     buildAction.HasAlternateKey(model => model.Id);

                     buildAction.Property(model => model.Id)
                     .HasColumnName("id")
                     .ValueGeneratedOnAdd();

                     buildAction.Property(model => model.Nome)
                     .HasColumnName("nome");
                     buildAction.Property(model => model.Email)
                      .HasColumnName("email");
                     buildAction.Property(model => model.Password)
                      .HasColumnName("password");
              
                });
            });


            modelBuilder.Entity<Contas>(buildAction =>
           {
               modelBuilder.Entity<Contas>(buildAction =>
                  {
                      buildAction.ToTable("Contas");
                      buildAction.HasKey(model => model.Id);

                      buildAction.Property(model => model.Id)
                      .HasColumnName("id")
                      .ValueGeneratedOnAdd();

                      buildAction.Property(model => model.NomeConta)
                      .HasColumnName("nomeConta");
                      buildAction.Property(model => model.TipoConta)
                      .HasColumnName("tipoConta");
                      buildAction.Property(model => model.Valor)
                      .HasColumnName("valor");
                      buildAction.Property(model => model.IdUsuario)
                     .HasColumnName("usuarioId");
                   buildAction.HasOne(detail => detail.Usuario)
                            .WithMany(master => master.Contas)
                            .HasForeignKey(model => model.IdUsuario)
                        .OnDelete(DeleteBehavior.Cascade);

                  });
           });
            
             

            modelBuilder.Entity<Transferir>(buildAction =>
         {
             modelBuilder.Entity<Transferir>(buildAction =>
                  {
                      buildAction.ToTable("Tranferir");
                      buildAction.HasKey(model => model.Id);

                      buildAction.Property(model => model.Id)
                      .HasColumnName("id")
                      .ValueGeneratedOnAdd();

                      buildAction.Property(model => model.Destino)
                      .HasColumnName("nomeConta");
                      buildAction.Property(model => model.idConta)
                      .HasColumnName("tipoConta");
                      buildAction.Property(model => model.Valor)
                      .HasColumnName("valor");
                      buildAction.Property(model => model.DataTransf)
                      .HasColumnName("dataTransf");
                      buildAction.Property(model => model.idConta)
                     .HasColumnName("idConta");
                      
                      buildAction.HasOne(detail => detail.Conta)
                            .WithMany(master => master.Transferir)
                            .HasForeignKey(model => model.idConta)
                             .OnDelete(DeleteBehavior.Cascade);

                  });
         });
            
               modelBuilder.Entity<Deposito>(buildAction =>
           {    
             modelBuilder.Entity<Deposito>(buildAction =>
                {
                    buildAction.ToTable("Deposito");
                    buildAction.HasKey(model => model.Id);

                    buildAction.Property(model => model.Id)
                    .HasColumnName("id")
                    .ValueGeneratedOnAdd();

                    buildAction.Property(model => model.idConta)
                    .HasColumnName("nomeConta");
                    buildAction.Property(model => model.Valor)
                    .HasColumnName("valor");
                    buildAction.Property(model => model.DataDeposito)
                      .HasColumnName("dataDeposito");

                    buildAction.HasOne(detail => detail.Conta)
                          .WithMany(master => master.Depositos)
                          .HasForeignKey(model => model.idConta)
                           .OnDelete(DeleteBehavior.Cascade);

                });
            });


            base.OnModelCreating(modelBuilder);


        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
           
            optionBuilder.UseLazyLoadingProxies();              
            base.OnConfiguring(optionBuilder);
        }
    }
}