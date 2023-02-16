using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Diskollection.Models;

namespace Diskollection.Data
{
    public class DiskollectionContext : DbContext
    {
        public DiskollectionContext (DbContextOptions<DiskollectionContext> options)
            : base(options)
        {

        }

        public DbSet<Diskollection.Models.Album> Album { get; set; } = default!;

        public DbSet<Diskollection.Models.Artist> Artist { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
