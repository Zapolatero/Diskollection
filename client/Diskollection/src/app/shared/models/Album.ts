export interface Album{
    id: string;
    title: string;
    artistId: string;
    artistName: string;
    releaseDate: string;
    genre: string;
    imageURL: string;
    description?: string;
    likes: 0;
}

export interface AlbumDTO{
    id?: string;
    title: string;
    artistId: string;
    releaseDate: string;
    genre: string;
    imageURL?: string;
    description?: string;
}