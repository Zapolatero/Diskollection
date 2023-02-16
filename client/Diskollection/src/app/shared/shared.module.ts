import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { ArtistServices } from '../core/providers/ArtistServices';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [AlbumCardComponent, AlbumFormComponent],
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
    AlbumFormComponent
  ]
})
export class SharedModule { }
