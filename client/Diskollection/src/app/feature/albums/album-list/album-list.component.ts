import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';
import { Album } from 'src/app/shared/models/Album';
import { SearchCriteria } from 'src/app/shared/models/SearchCriteria';
import { AddAlbumDialogComponent } from './components/add-album-dialog/add-album-dialog.component';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{

  albums!: Array<Album>;
  displayedAlbums!: Array<Album>;
  searchCriteria : SearchCriteria= new SearchCriteria();
  genres!: Set<string>;
  artists!: Set<string>;

  constructor(private readonly albumServices: AlbumServices, private readonly matDialogService: MatDialog){}
  
  ngOnInit(): void {
    this.refreshAlbumList();
  }

  refreshAlbumList(){
    this.albumServices.getAlbums().subscribe(data => {
        this.albums = data;
        this.displayedAlbums = this.albums;
        this.genres = new Set(this.albums.map(a => a.genre));
        this.artists = new Set(this.albums.map(a => a.artistName));
      }
    );
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

  filterList(newSearchCriteria?: SearchCriteria) {
    if(newSearchCriteria){
      this.searchCriteria = newSearchCriteria;
    }
    this.displayedAlbums = this.albums.filter( album => 
      (
        album.title.toLowerCase().includes(this.searchCriteria.searchText.toLowerCase())
        || album.artistName.toLowerCase().includes(this.searchCriteria.searchText.toLowerCase())  
      )
      && (album.genre == this.searchCriteria.genreFilter || this.searchCriteria.genreFilter == "")
      && (album.artistName == this.searchCriteria.artistFilter || this.searchCriteria.artistFilter == "")
    )
  }
}
