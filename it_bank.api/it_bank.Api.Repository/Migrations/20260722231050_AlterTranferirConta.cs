using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace it_bank.Api.Repository.Migrations
{
    /// <inheritdoc />
    public partial class AlterTranferirConta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tranferir_Contas_ContasId",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Tranferir_ContasId",
                table: "Tranferir");

            migrationBuilder.DropColumn(
                name: "ContasId",
                table: "Tranferir");

            migrationBuilder.CreateIndex(
                name: "IX_Tranferir_idConta",
                table: "Tranferir",
                column: "idConta");

            migrationBuilder.AddForeignKey(
                name: "FK_Tranferir_Contas_idConta",
                table: "Tranferir",
                column: "idConta",
                principalTable: "Contas",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tranferir_Contas_idConta",
                table: "Tranferir");

            migrationBuilder.DropIndex(
                name: "IX_Tranferir_idConta",
                table: "Tranferir");

            migrationBuilder.AddColumn<long>(
                name: "ContasId",
                table: "Tranferir",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tranferir_ContasId",
                table: "Tranferir",
                column: "ContasId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tranferir_Contas_ContasId",
                table: "Tranferir",
                column: "ContasId",
                principalTable: "Contas",
                principalColumn: "id");
        }
    }
}
