import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch: "full", redirectTo: 'albums'},
  { path: 'albums', loadChildren: () => import('./feature/albums/album-list/album-list.module').then(x => x.AlbumListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
