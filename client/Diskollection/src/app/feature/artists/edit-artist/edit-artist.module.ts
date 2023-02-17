import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditArtistRoutingModule } from './edit-artist-routing.module';
import { EditArtistComponent } from './edit-artist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditArtistComponent
  ],
  imports: [
    SharedModule,
    EditArtistRoutingModule
  ]
})
export class EditArtistModule { }
