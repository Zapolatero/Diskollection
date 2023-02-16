import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';
import { AlbumCardComponent } from './components/album-card/album-card.component';



@NgModule({
  declarations: [AlbumCardComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    CommonModule,
    MaterialDesignModule,
    AlbumCardComponent
  ]
})
export class SharedModule { }
