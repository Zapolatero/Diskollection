using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Diskollection.Migrations
{
    /// <inheritdoc />
    public partial class AddedLikes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Likes",
                table: "Album",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Likes",
                table: "Album");
        }
    }
}
