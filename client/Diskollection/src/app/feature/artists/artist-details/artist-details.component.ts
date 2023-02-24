import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';
import { Artist } from 'src/app/shared/models/Artist';
import { ArtistDetailsResolver } from '../guards/artist-details.resolver';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit{
  artist!: Artist;

  constructor(
    private readonly route: ActivatedRoute, 
    private readonly router: Router, 
    private readonly artistServices: ArtistServices,
    private readonly albumServices: AlbumServices
  ){}

  ngOnInit(): void {
    this.artist = this.route.snapshot.data["artistDetails"];
    console.log("init");
  }

  deleteAlbum(id: string){
    this.albumServices.deleteAlbum(id).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate([`artists/${this.artist.id}`])
      )
    });
  }

  deleteArtist(){
    this.artistServices.deleteArtist(this.artist.id).subscribe(() => {
        this.router.navigate(['artists']);
      }
    );
  }
}
