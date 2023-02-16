using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Diskollection.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int? ArtistId { get; set; }
        [AllowNull]
        public Artist? Artist { get; set; }
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }
        [DataType(DataType.ImageUrl)]
        public string ImageURL { get; set; }
        public string Description { get; set; }

        public int Likes { get; set; } = 0;
    }
}
