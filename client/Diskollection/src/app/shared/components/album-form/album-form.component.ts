import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';
import { Album } from '../../models/Album';
import { ArtistDTO } from '../../models/Artist';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnChanges{
  albumForm!: FormGroup
  artists!: Array<ArtistDTO>;
  @Input() album!: Album;
  @Output() cancelAction: EventEmitter<void> = new EventEmitter(); 
  @Output() saveAlbum: EventEmitter<any> = new EventEmitter(); 

  constructor(private readonly artistServices: ArtistServices){
    this.albumForm = new FormGroup({
      id: new FormControl("0"),
      title: new FormControl("", [Validators.required, Validators.minLength(2)]),
      genre: new FormControl("", [Validators.required, Validators.minLength(2)]),
      releaseDate: new FormControl("", [Validators.required]),
      artistId: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      imageURL: new FormControl("")
    });

    this.artistServices.getArtists().subscribe(data => {
      this.artists = data;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { album } = changes;
    if (album.currentValue !== album.previousValue) {
      this.albumForm.patchValue(this.album);
    }
  }

  onCancel(){
    this.cancelAction.emit();
  }

  onSave(){
    this.saveAlbum.emit(this.albumForm.getRawValue());
  }
}

// interface AlbumFromControls{
//   id: FormControl<string | null>;
//   title: FormControl<string | null>;
//   genre: FormControl<string | null>;
//   releaseDate: FormControl<string | null>;
//   artistId: FormControl<string | null>;
//   description?: FormControl<string | null>;
//   imageURL?: FormControl<string | null>;
// }