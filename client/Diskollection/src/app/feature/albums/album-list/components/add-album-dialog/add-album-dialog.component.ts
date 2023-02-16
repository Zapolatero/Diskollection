import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlbumDTO } from 'src/app/shared/models/Album';

@Component({
  selector: 'app-add-album-dialog',
  templateUrl: './add-album-dialog.component.html',
  styleUrls: ['./add-album-dialog.component.scss']
})
export class AddAlbumDialogComponent {
  
  constructor(private readonly dialogRef: MatDialogRef<AddAlbumDialogComponent>){}

  closeDialog(album?: AlbumDTO){
    console.log(album);
    console.info(album);
    this.dialogRef.close(album);
  }
}
