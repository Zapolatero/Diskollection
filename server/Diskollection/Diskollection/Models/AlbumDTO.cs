using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Diskollection.Models
{
    public class AlbumDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int? ArtistId { get; set; }
        [AllowNull]
        public string? ArtistName { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }
        public string ImageURL { get; set; }
        public string Description { get; set; }
        public int? Likes { get; set; }
    }
}
