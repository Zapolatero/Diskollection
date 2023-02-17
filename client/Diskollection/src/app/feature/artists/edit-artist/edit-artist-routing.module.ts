import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsResolver } from '../guards/artist-details.resolver';
import { EditArtistComponent } from './edit-artist.component';
import { EditArtistModule } from './edit-artist.module';

const routes: Routes = [
  { path: '', component: EditArtistComponent, resolve:{artistDetails: ArtistDetailsResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditArtistRoutingModule { }
