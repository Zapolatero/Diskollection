import { Component, OnInit } from '@angular/core';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';
import { Album } from 'src/app/shared/models/Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{
  albums!: Array<Album>;

  constructor(private readonly albumServices: AlbumServices){}
  
  ngOnInit(): void {
    this.albumServices.getAlbums().subscribe(data => this.albums = data)
  }
}
