import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';
import { Artist } from '../../models/Artist';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent {
  artistForm!: FormGroup
  @Input() artist!: Artist;
  @Output() cancelAction: EventEmitter<void> = new EventEmitter(); 
  @Output() saveArtist: EventEmitter<any> = new EventEmitter(); 

  constructor(private readonly artistServices: ArtistServices){
    this.artistForm = new FormGroup({
      id: new FormControl("0"),
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      country: new FormControl("", [Validators.required, Validators.minLength(2)]),
      biography: new FormControl(""),
      isActive: new FormControl(true)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { artist } = changes;
    if (artist.currentValue !== artist.previousValue) {
      this.artistForm.patchValue(this.artist);
    }
  }

  onCancel(){
    this.cancelAction.emit();
  }

  onSave(){
    this.saveArtist.emit(this.artistForm.getRawValue());
  }
}
