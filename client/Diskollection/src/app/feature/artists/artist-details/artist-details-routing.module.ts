import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details.component';
import { ArtistDetailsResolver } from './guards/artist-details.resolver';

const routes: Routes = [
  { path: '', component: ArtistDetailsComponent, resolve:{artistDetails: ArtistDetailsResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistDetailsRoutingModule { }
