using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Diskollection.Models
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public Boolean IsActive { get; set; }
        public string Biography { get; set; }
        [AllowNull]
        public List<Album>? Albums { get; set; }
    }
}
