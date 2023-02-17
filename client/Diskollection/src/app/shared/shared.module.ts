import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { ArtistServices } from '../core/providers/ArtistServices';
import { MatNativeDateModule } from '@angular/material/core';
import { ArtistFormComponent } from './components/artist-form/artist-form.component';



@NgModule({
  declarations: [AlbumCardComponent, AlbumFormComponent, ArtistFormComponent],
  providers: [ArtistServices],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports:[
    CommonModule,
    MaterialDesignModule,
    AlbumCardComponent,
    AlbumFormComponent,
    ArtistFormComponent
  ]
})
export class SharedModule { }
