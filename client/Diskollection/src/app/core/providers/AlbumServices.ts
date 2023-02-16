import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album, AlbumDTO } from "src/app/shared/models/Album";
import { environment } from "src/environments/environment";

@Injectable()
export class AlbumServices{
    constructor(private readonly httpClient: HttpClient){}

    getAlbums():Observable<Array<Album>> {
        return this.httpClient.get<Array<Album>>(`${environment.albumEndpoint}/albums`);
    }

    getAlbumDetails(id: string):Observable<Album> {
        return this.httpClient.get<Album>(`${environment.albumEndpoint}/albums/${id}`);
    }

    postAlbum(albumForm: AlbumDTO): Observable<void> {
        return this.httpClient.post<void>(`${environment.albumEndpoint}/albums`, albumForm);
    }

    deleteAlbum(albumId: string): Observable<void>{
        return this.httpClient.delete<void>(`${environment.albumEndpoint}/albums/${albumId}`);
    }

    likeAlbum(isLike: boolean, albumId: string):Observable<void> {
        return this.httpClient.get<void>(`${environment.albumEndpoint}/albums/${albumId}/like/${isLike}`);
      }
      
    putAlbum(album: AlbumDTO):Observable<void> {
        return this.httpClient.put<void>(`${environment.albumEndpoint}/albums/${album.id}`, album);
      }
}