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
    public class ArtistsController : ControllerBase
    {
        private readonly DiskollectionContext _context;

        public ArtistsController(DiskollectionContext context)
        {
            _context = context;
        }

        // GET: api/Artists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artist>>> GetArtist()
        {
          if (_context.Artist == null)
          {
              return NotFound();
          }

            return await _context.Artist.ToListAsync();
        }

        // GET: api/Artists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Artist>> GetArtist(int id)
        {
            if (_context.Artist == null)
            {
                return NotFound();
            }
            var artist = await _context.Artist.FindAsync(id);

            if (artist == null)
            {
                return NotFound();
            }

            _context.Entry(artist).Collection(b => b.Albums).Load();

            return artist;
        }

        [HttpGet("{id}/albums")]
        public async Task<ActionResult<IEnumerable<Album>>> GetArtistAlbums(int id)
        {
            if (_context.Artist == null)
            {
                return NotFound();
            }
            var artist = await _context.Artist.FindAsync(id);

            if (artist == null)
            {
                return NotFound();
            }

            _context.Entry(artist).Collection(b => b.Albums).Load();

            return artist.Albums;
        }

        // PUT: api/Artists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtist(int id, Artist artist)
        {
            if (id != artist.Id)
            {
                return BadRequest();
            }

            _context.Entry(artist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtistExists(id))
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

        // POST: api/Artists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Artist>> PostArtist(ArtistDTO artistDTO)
        {
          if (_context.Artist == null)
          {
              return Problem("Entity set 'DiskollectionContext.Artist'  is null.");
          }
            var  artist = DTOtoNewArtist(artistDTO);
            _context.Artist.Add(artist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArtist", new { id = artist.Id }, artist);
        }

        private Artist DTOtoNewArtist(ArtistDTO artist)
        {
            return new Artist
            {
                Name = artist.Name,
                Country = artist.Country,
                Biography = artist.Biography,
                IsActive = artist.IsActive,
                Albums = new List<Album>()
            };
        }

        // DELETE: api/Artists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtist(int id)
        {
            if (_context.Artist == null)
            {
                return NotFound();
            }
            var artist = await _context.Artist.FindAsync(id);
            if (artist == null)
            {
                return NotFound();
            }

            _context.Artist.Remove(artist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtistExists(int id)
        {
            return (_context.Artist?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
