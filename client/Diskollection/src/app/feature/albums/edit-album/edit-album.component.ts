import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';
import { Album, AlbumDTO } from 'src/app/shared/models/Album';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss']
})
export class EditAlbumComponent implements OnInit {
  album!: Album;
  constructor(
    private readonly route: ActivatedRoute, 
    private readonly location: Location, 
    private readonly albumServices: AlbumServices
  ){}

  ngOnInit(): void {
    this.album = this.route.snapshot.data["albumDetails"];
  }

  goBack(){
    this.location.back();
  }

  editAlbum(album: AlbumDTO){
    this.albumServices.putAlbum(album).subscribe(result => {
      this.goBack();
    });
  }


}
