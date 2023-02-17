import { Component, OnInit } from '@angular/core';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';
import { Artist, ArtistDTO } from 'src/app/shared/models/Artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit{
  artists!: Array<ArtistDTO>
  constructor(private readonly artistServices: ArtistServices){}

  ngOnInit(): void {
    this.artistServices.getArtists().subscribe(data => 
      {
        this.artists = data.sort((a, b) => (a.name < b.name ? 1 : - 1));
      }
    ); 
  }
}
