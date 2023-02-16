import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListComponent } from './album-list.component';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';


@NgModule({
  declarations: [AlbumListComponent],
  imports: [
    CommonModule,
    AlbumListRoutingModule
  ],
  providers: [
    AlbumServices
  ]
})
export class AlbumListModule { }
