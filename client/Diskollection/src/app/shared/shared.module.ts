import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumFormComponent } from './components/album-form/album-form.component';



@NgModule({
  declarations: [AlbumCardComponent, AlbumFormComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    MaterialDesignModule,
    AlbumCardComponent,
    AlbumFormComponent
  ]
})
export class SharedModule { }
