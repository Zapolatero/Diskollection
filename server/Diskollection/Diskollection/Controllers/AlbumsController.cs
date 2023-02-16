using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Diskollection.Data;
using Diskollection.Models;

namespace Diskollection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly DiskollectionContext _context;

        public AlbumsController(DiskollectionContext context)
        {
            _context = context;
        }

        // GET: api/Albums
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AlbumDTO>>> GetAlbum()
        {
          if (_context.Album == null)
          {
              return NotFound();
          }
            //await _context.Album.ForEachAsync(
            //    a => _context.Entry(a).Reference(b => b.Artist).Load()
            //    );

            var albums = from a in _context.Album
                         select new AlbumDTO()
                         {
                             Id = a.Id,
                             Title = a.Title,
                             Genre = a.Genre,
                             ArtistId= a.ArtistId,
                             ArtistName = a.Artist.Name,
                             ReleaseDate= a.ReleaseDate,
                             ImageURL= a.ImageURL,
                             Description = a.Description,
                             Likes = a.Likes,
                         };

            return await albums.ToListAsync();
        }

        // GET: api/Albums/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> GetAlbum(int id)
        {
          if (_context.Album == null)
          {
              return NotFound();
          }
            var album = await _context.Album.FindAsync(id);

            _context.Entry(album).Reference(a => a.Artist).Load();

            if (album == null)
            {
                return NotFound();
            }

            return album;
        }

        [HttpGet("{id}/like/{isLike}")]
        public async Task<IActionResult> GetAlbum(int id, Boolean isLike)
        {
            if (_context.Album == null)
            {
                return NotFound();
            }
            var album = await _context.Album.FindAsync(id);

            if(album == null)
            {
                return NotFound();
            }

            if(isLike)
            {
                album.Likes++;
            }
            else
            {
                album.Likes--;
            }

            _context.Entry(album).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            if (album == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        // PUT: api/Albums/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlbum(int id, AlbumDTO albumDTO)
        {
            if (id != albumDTO.Id)
            {
                return BadRequest();
            }
            
            var album = _context.Album.Find(id);

            if(album == null) { 
                return NotFound();
            }

            // conversion from a DTO to an actual Album
            album.Title = albumDTO.Title;
            album.Genre = albumDTO.Genre;
            album.Description = albumDTO.Description;
            album.ImageURL = albumDTO.ImageURL;
            album.ReleaseDate = albumDTO.ReleaseDate;
            album.ArtistId = albumDTO.ArtistId;
            album.Artist = _context.Artist.Find(albumDTO.ArtistId);

            _context.Entry(album).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Albums
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Album>> PostAlbum(AlbumDTO album)
        {
          if (_context.Album == null)
          {
              return Problem("Entity set 'DiskollectionContext.Album'  is null.");
          }
            _context.Album.Add(AlbumDTOToAlbum(album));
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAlbum", new { id = album.Id }, album);
        }

        // DELETE: api/Albums/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlbum(int id)
        {
            if (_context.Album == null)
            {
                return NotFound();
            }
            var album = await _context.Album.FindAsync(id);
            if (album == null)
            {
                return NotFound();
            }

            _context.Album.Remove(album);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlbumExists(int id)
        {
            return (_context.Album?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        private Album AlbumDTOToAlbum(AlbumDTO albumDTO)
        {
            return new Album
            {
                Id = albumDTO.Id,
                Title = albumDTO.Title,
                Genre = albumDTO.Genre,
                Description = albumDTO.Description,
                ImageURL = albumDTO.ImageURL,
                ReleaseDate = albumDTO.ReleaseDate,
                ArtistId = albumDTO.ArtistId,
                Artist = _context.Artist.Find(albumDTO.ArtistId)
            };
        }
    }
}
