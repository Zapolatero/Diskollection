import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';
import { ArtistDTO } from 'src/app/shared/models/Artist';
import { AddArtistDialogComponent } from './components/add-artist-dialog/add-artist-dialog.component';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit{
  artists!: Array<ArtistDTO>
  constructor(private readonly artistServices: ArtistServices, private readonly matDialogService: MatDialog){}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.artistServices.getArtists().subscribe(data => 
      {
        this.artists = data.sort((a, b) => (a.name < b.name ? -1 : 1));
      }
    ); 
  }

  openDialog(){
    this.matDialogService.open(AddArtistDialogComponent, {height: 'fit-content'})
    .afterClosed()
    .pipe(
      filter(artistForm => !!artistForm),
      switchMap(artistForm => this.artistServices.postArtist(artistForm)),
      switchMap(() => {
        this.refreshList();
        return this.artists;
      })
    ).subscribe();
  }

  onDeleteAlbum(albumId: string){
    this.artistServices.deleteArtist(albumId).subscribe(() => this.refreshList());
  }

  deleteArtist(id: string){
    this.artistServices.deleteArtist(id).subscribe(() => {
      this.refreshList();
    });
  }
}
