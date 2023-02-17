import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistListRoutingModule } from './artist-list-routing.module';
import { ArtistListComponent } from './artist-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddArtistDialogComponent } from './components/add-artist-dialog/add-artist-dialog.component';


@NgModule({
  declarations: [
    ArtistListComponent,
    AddArtistDialogComponent
  ],
  imports: [
    SharedModule,
    ArtistListRoutingModule
  ]
})
export class ArtistListModule { }
