using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace it_bank.Api.Repository.Migrations
{
    /// <inheritdoc />
    public partial class AlterIdContaDeposito : Migration
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

            migrationBuilder.AlterColumn<long>(
                name: "idConta",
                table: "Tranferir",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<long>(
                name: "nomeConta",
                table: "Deposito",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddForeignKey(
                name: "FK_Deposito_Contas_nomeConta",
                table: "Deposito",
                column: "nomeConta",
                principalTable: "Contas",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tranferir_Contas_idConta",
                table: "Tranferir",
                column: "idConta",
                principalTable: "Contas",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deposito_Contas_nomeConta",
                table: "Deposito");

            migrationBuilder.DropForeignKey(
                name: "FK_Tranferir_Contas_idConta",
                table: "Tranferir");

            migrationBuilder.AlterColumn<long>(
                name: "idConta",
                table: "Tranferir",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "nomeConta",
                table: "Deposito",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

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
