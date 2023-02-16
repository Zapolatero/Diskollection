import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListComponent } from './album-list.component';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAlbumDialogComponent } from './components/add-album-dialog/add-album-dialog.component';
import { AlbumListFilterComponent } from './components/album-list-filter/album-list-filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlbumListComponent, AddAlbumDialogComponent, AlbumListFilterComponent],
  imports: [
    SharedModule,
    AlbumListRoutingModule,
    FormsModule
  ],
  providers: [
    AlbumServices
  ]
})
export class AlbumListModule { }
