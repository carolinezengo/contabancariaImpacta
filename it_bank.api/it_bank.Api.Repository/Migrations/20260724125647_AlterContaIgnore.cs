using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace it_bank.Api.Repository.Migrations
{
    /// <inheritdoc />
    public partial class AlterContaIgnore : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deposito_Contas_nomeConta",
                table: "Deposito");

            migrationBuilder.DropForeignKey(
                name: "FK_Tranferir_Contas_idConta",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Tranferir_idConta",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Deposito_nomeConta",
                table: "Deposito");

            migrationBuilder.AddColumn<long>(
                name: "ContaId",
                table: "Tranferir",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ContaId",
                table: "Deposito",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tranferir_ContaId",
                table: "Tranferir",
                column: "ContaId");

            migrationBuilder.CreateIndex(
                name: "IX_Deposito_ContaId",
                table: "Deposito",
                column: "ContaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Deposito_Contas_ContaId",
                table: "Deposito",
                column: "ContaId",
                principalTable: "Contas",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tranferir_Contas_ContaId",
                table: "Tranferir",
                column: "ContaId",
                principalTable: "Contas",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deposito_Contas_ContaId",
                table: "Deposito");

            migrationBuilder.DropForeignKey(
                name: "FK_Tranferir_Contas_ContaId",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Tranferir_ContaId",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Deposito_ContaId",
                table: "Deposito");

            migrationBuilder.DropColumn(
                name: "ContaId",
                table: "Tranferir");

            migrationBuilder.DropColumn(
                name: "ContaId",
                table: "Deposito");

            migrationBuilder.CreateIndex(
                name: "IX_Tranferir_idConta",
                table: "Tranferir",
                column: "idConta");

            migrationBuilder.CreateIndex(
                name: "IX_Deposito_nomeConta",
                table: "Deposito",
                column: "nomeConta");

            migrationBuilder.AddForeignKey(
                name: "FK_Deposito_Contas_nomeConta",
                table: "Deposito",
                column: "nomeConta",
                principalTable: "Contas",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tranferir_Contas_idConta",
                table: "Tranferir",
                column: "idConta",
                principalTable: "Contas",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
