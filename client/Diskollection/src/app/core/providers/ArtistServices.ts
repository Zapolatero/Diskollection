import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Artist, ArtistDTO } from "src/app/shared/models/Artist";
import { environment } from "src/environments/environment";

@Injectable()
export class ArtistServices{
    constructor (private readonly httpClient: HttpClient){}

    getArtists():Observable<Array<ArtistDTO>>{
        return this.httpClient.get<Array<ArtistDTO>>(`${environment.albumEndpoint}/artists`);
    }

    getArtistDetails(id:string): Observable<Artist>{
        return this.httpClient.get<Artist>(`${environment.albumEndpoint}/artists/${id}`);
    }

    postArtist(artist: ArtistDTO): Observable<void>{
        return this.httpClient.post<void>(`${environment.albumEndpoint}/artists/`, artist);
    }

    putArtist(artist: ArtistDTO): Observable<void>{
        return this.httpClient.put<void>(`${environment.albumEndpoint}/artists/${artist.id}`, artist);
    }

    deleteArtist(artistId: string): Observable<void>{
        return this.httpClient.delete<void>(`${environment.albumEndpoint}/artists/${artistId}`);
    }
}