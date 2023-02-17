import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistDetailsRoutingModule } from './artist-details-routing.module';
import { ArtistDetailsComponent } from './artist-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtistActivityComponent } from './components/artist-activity/artist-activity.component';


@NgModule({
  declarations: [ArtistDetailsComponent, ArtistActivityComponent],
  imports: [
    SharedModule,
    ArtistDetailsRoutingModule
  ]
})
export class ArtistDetailsModule { }
