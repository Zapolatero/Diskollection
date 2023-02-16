import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlbumDTO } from '../../models/Album';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent {
  albumForm!: FormGroup

  constructor(){
    this.albumForm = new FormGroup({
      id: new FormControl(""),
      title: new FormControl("", [Validators.required, Validators.minLength(2)]),
      genre: new FormControl("", [Validators.required, Validators.minLength(2)]),
      releaseDate: new FormControl("", [Validators.required]),
      artistId: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      imageURL: new FormControl("")
    })
  }

  onCancel(){

  }

  onSave(){
    
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