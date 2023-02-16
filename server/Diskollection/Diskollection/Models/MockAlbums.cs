using Diskollection.Data;
using Microsoft.EntityFrameworkCore;

namespace Diskollection.Models
{
    public class MockAlbums
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DiskollectionContext(
                serviceProvider.GetRequiredService<DbContextOptions<DiskollectionContext>>()))
            {
                if (context == null || context.Album == null)
                {
                    throw new ArgumentNullException("Null RazorPagesMovieContext");
                }

                //look for any movies.
                if (context.Album.Any())
                {
                    return; //DB has been seeded
                }

                context.Album.AddRange(
                    new Album
                    {
                        Title = "Rattus Norvegicus",
                        ReleaseDate = DateTime.Parse("1972-2-12"),
                        Genre = "Rock",
                        //ArtistId = 1,
                        ImageURL = "https://m.media-amazon.com/images/I/718UqqIPsGL._SL1426_.jpg",
                        Description = "Doux Jésus de verrat de maudit de Jésus de plâtre de bout d'ciarge de bâtard de baptême de Jésus Marie Joseph de colon de mosus de crucifix de câline de maudine de cimonaque d'enfant d'chienne de sacristi de saint-ciarge de câlique d'étole de mangeux d'marde."
                    },

                    new Album
                    {
                        Title = "The Court of the Krimson king",
                        ReleaseDate = DateTime.Parse("1969-2-12"),
                        Genre = "Prog rock",
                        //ArtistId = 2,
                        ImageURL = "https://m.media-amazon.com/images/I/71oLPcxaBdL._SL1200_.jpg",
                        Description = "Doux Jésus de verrat de maudit de Jésus de plâtre de bout d'ciarge de bâtard de baptême de Jésus Marie Joseph de colon de mosus de crucifix de câline de maudine de cimonaque d'enfant d'chienne de sacristi de saint-ciarge de câlique d'étole de mangeux d'marde."
                    },

                    new Album
                    {
                        Title = "Rainbow goblins",
                        ReleaseDate = DateTime.Parse("1981-2-23"),
                        Genre = "Jazz fusion",
                        //ArtistId = 3,
                        ImageURL = "https://i.discogs.com/2w1ZbOIgA4Dwte7pQmI441g1W-sgEjStdMIcIYJfYyg/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTI2/OTQtMTUxMDA1NzIz/My04NjI1LmpwZWc.jpeg",
                        Description = "Doux Jésus de verrat de maudit de Jésus de plâtre de bout d'ciarge de bâtard de baptême de Jésus Marie Joseph de colon de mosus de crucifix de câline de maudine de cimonaque d'enfant d'chienne de sacristi de saint-ciarge de câlique d'étole de mangeux d'marde."
                    },

                    new Album
                    {
                        Title = "Omnium gatherum",
                        ReleaseDate = DateTime.Parse("2022-11-14"),
                        Genre = "Psychedelic",
                        //ArtistId = 4,
                        ImageURL = "https://www.goutemesdisques.com/uploads/tx_gmdchron/pi1/a2638998972_10.jpeg",
                        Description = "Doux Jésus de verrat de maudit de Jésus de plâtre de bout d'ciarge de bâtard de baptême de Jésus Marie Joseph de colon de mosus de crucifix de câline de maudine de cimonaque d'enfant d'chienne de sacristi de saint-ciarge de câlique d'étole de mangeux d'marde."
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
