import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';
import { Album } from 'src/app/shared/models/Album';
import { AddAlbumDialogComponent } from './components/add-album-dialog/add-album-dialog.component';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{
  albums!: Array<Album>;

  constructor(private readonly albumServices: AlbumServices, private readonly matDialogService: MatDialog){}
  
  ngOnInit(): void {
    this.refreshAlbumList();
  }

  refreshAlbumList(){
    this.albumServices.getAlbums().subscribe(data => this.albums = data);
  }

  openDialog(){
    this.matDialogService.open(AddAlbumDialogComponent, {height: 'fit-content'})
    .afterClosed()
    .pipe(
      filter(albumForm => !!albumForm),
      switchMap(albumForm => this.albumServices.postAlbum(albumForm)),
      switchMap(() => {
        this.albumServices.getAlbums().subscribe(data => {
          this.albums = data;
        })
        return this.albums;
      })
    ).subscribe();
  }

  onDeleteAlbum(albumId: string){
    this.albumServices.deleteAlbum(albumId).subscribe(() => this.refreshAlbumList());
  }

  onAlbumLiked(isLike: boolean, albumId: string) {
    this.albumServices.likeAlbum(isLike, albumId).subscribe();
  }
}
