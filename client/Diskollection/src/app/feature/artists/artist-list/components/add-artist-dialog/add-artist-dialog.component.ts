import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ArtistDTO } from 'src/app/shared/models/Artist';

@Component({
  selector: 'app-add-artist-dialog',
  templateUrl: './add-artist-dialog.component.html',
  styleUrls: ['./add-artist-dialog.component.scss']
})
export class AddArtistDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<AddArtistDialogComponent>){}

  closeDialog(artist?: ArtistDTO){
    this.dialogRef.close(artist);
  }
}
