import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist, ArtistDTO } from 'src/app/shared/models/Artist';
import { Location } from '@angular/common';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.scss']
})
export class EditArtistComponent implements OnInit{
  artist!: Artist
  constructor(
    private readonly route: ActivatedRoute, 
    private readonly location: Location,
    private readonly artistServices: ArtistServices
  ){}

  ngOnInit(): void {
      this.artist = this.route.snapshot.data["artistDetails"];
  }

  goBack(){
    this.location.back();
  }

  editArtist(artist: ArtistDTO){
    this.artistServices.putArtist(artist).subscribe(() => this.goBack());
  }
}
