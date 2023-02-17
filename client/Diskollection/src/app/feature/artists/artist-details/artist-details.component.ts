import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';
import { Artist } from 'src/app/shared/models/Artist';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit{
  artist!: Artist;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly artistServices: ArtistServices){}

  ngOnInit(): void {
      this.artist = this.route.snapshot.data["artistDetails"];
  }

  deleteArtist(){
    this.artistServices.deleteArtist(this.artist.id).subscribe(() => {
        this.router.navigate(['artists']);
      }
    );
  }
}
