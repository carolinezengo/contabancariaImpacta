using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace it_bank.Api.Repository.Migrations
{
    /// <inheritdoc />
    public partial class InicialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contas",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomeConta = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    tipoConta = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    valor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    usuarioId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contas", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nome = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Deposito",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    valor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dataDeposito = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nomeConta = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Deposito", x => x.id);
                    table.ForeignKey(
                        name: "FK_Deposito_Contas_nomeConta",
                        column: x => x.nomeConta,
                        principalTable: "Contas",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tranferir",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomeConta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    valor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dataTransf = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    idConta = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tranferir", x => x.id);
                    table.ForeignKey(
                        name: "FK_Tranferir_Contas_idConta",
                        column: x => x.idConta,
                        principalTable: "Contas",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Deposito_nomeConta",
                table: "Deposito",
                column: "nomeConta");

            migrationBuilder.CreateIndex(
                name: "IX_Tranferir_idConta",
                table: "Tranferir",
                column: "idConta");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Deposito");

            migrationBuilder.DropTable(
                name: "Tranferir");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Contas");
        }
    }
}
