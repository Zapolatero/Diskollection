import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlbumServices } from 'src/app/core/providers/AlbumServices';
import { AlbumDTO } from 'src/app/shared/models/Album';
import { ArtistDTO } from 'src/app/shared/models/Artist';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsResolver implements Resolve<AlbumDTO> {
  constructor(private readonly albumService: AlbumServices){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AlbumDTO> {
    return this.albumService.getAlbumDetails(route.params["id"]);
  }
}
