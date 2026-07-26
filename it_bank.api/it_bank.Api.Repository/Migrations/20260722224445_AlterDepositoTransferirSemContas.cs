using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace it_bank.Api.Repository.Migrations
{
    /// <inheritdoc />
    public partial class AlterDepositoTransferirSemContas : Migration
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
                name: "ContasId",
                table: "Tranferir",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ContasId",
                table: "Deposito",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tranferir_ContasId",
                table: "Tranferir",
                column: "ContasId");

            migrationBuilder.CreateIndex(
                name: "IX_Deposito_ContasId",
                table: "Deposito",
                column: "ContasId");

            migrationBuilder.AddForeignKey(
                name: "FK_Deposito_Contas_ContasId",
                table: "Deposito",
                column: "ContasId",
                principalTable: "Contas",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tranferir_Contas_ContasId",
                table: "Tranferir",
                column: "ContasId",
                principalTable: "Contas",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deposito_Contas_ContasId",
                table: "Deposito");

            migrationBuilder.DropForeignKey(
                name: "FK_Tranferir_Contas_ContasId",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Tranferir_ContasId",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Deposito_ContasId",
                table: "Deposito");

            migrationBuilder.DropColumn(
                name: "ContasId",
                table: "Tranferir");

            migrationBuilder.DropColumn(
                name: "ContasId",
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
