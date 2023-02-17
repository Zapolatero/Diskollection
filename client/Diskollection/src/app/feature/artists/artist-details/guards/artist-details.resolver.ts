import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArtistServices } from 'src/app/core/providers/ArtistServices';
import { Artist } from 'src/app/shared/models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistDetailsResolver implements Resolve<Artist> {

  constructor(private readonly artistServices: ArtistServices){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Artist> {
    return this.artistServices.getArtistDetails(route.params["id"]);
  }
}
