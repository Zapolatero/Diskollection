import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AlbumServices{
    constructor(private readonly httpClient: HttpClient){}

    getAlbums():Observable<void> {
        return this.httpClient.get<void>("");
    }
}