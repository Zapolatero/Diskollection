import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album } from "src/app/shared/models/Album";
import { environment } from "src/environments/environment";

@Injectable()
export class AlbumServices{
    constructor(private readonly httpClient: HttpClient){}

    getAlbums():Observable<Array<Album>> {
        return this.httpClient.get<Array<Album>>(`${environment.albumEndpoint}/albums`);
    }
}