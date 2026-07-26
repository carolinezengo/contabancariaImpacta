using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace it_bank.Api.Repository.Migrations
{
    /// <inheritdoc />
    public partial class AlterDepositoConta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deposito_Contas_ContasId",
                table: "Deposito");

            migrationBuilder.DropIndex(
                name: "IX_Deposito_ContasId",
                table: "Deposito");

            migrationBuilder.DropColumn(
                name: "ContasId",
                table: "Deposito");

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deposito_Contas_nomeConta",
                table: "Deposito");

            migrationBuilder.DropIndex(
                name: "IX_Deposito_nomeConta",
                table: "Deposito");

            migrationBuilder.AddColumn<long>(
                name: "ContasId",
                table: "Deposito",
                type: "bigint",
                nullable: true);

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
        }
    }
}
