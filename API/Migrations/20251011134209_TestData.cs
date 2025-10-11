using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class TestData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "IsActive", "Name", "Price", "Stock" },
                values: new object[,]
                {
                    { 1, "Telefon AÇIKLAMASI", "1.jpg", true, "Iphone 17", 70000m, 100 },
                    { 2, "Telefon AÇIKLAMASI", "2.jpg", true, "Iphone 17 PRO", 80000m, 100 },
                    { 3, "Telefon AÇIKLAMASI", "3.jpg", false, "Iphone 17 PRO MAX", 90000m, 100 },
                    { 4, "Telefon AÇIKLAMASI", "4.jpg", true, "Xiaomi 17 PRO", 50000m, 100 },
                    { 5, "Telefon AÇIKLAMASI", "5.jpg", true, "Xiaomi 17 PRO MAX", 57000m, 100 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
