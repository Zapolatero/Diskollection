import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAlbumComponent } from './edit-album.component';
import { AlbumDetailsResolver } from './guards/album-details.resolver';

const routes: Routes = [
  { path:'', component: EditAlbumComponent, resolve:{albumDetails: AlbumDetailsResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAlbumRoutingModule { }
