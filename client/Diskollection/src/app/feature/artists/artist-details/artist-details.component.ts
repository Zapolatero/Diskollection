import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/shared/models/Artist';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit{
  artist!: Artist;

  constructor(private readonly route: ActivatedRoute){}

  ngOnInit(): void {
      this.artist = this.route.snapshot.data["artistDetails"];
  }
}
