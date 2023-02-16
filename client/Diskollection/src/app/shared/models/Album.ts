export interface Album{
    id: string;
    title: string;
    artistId: string;
    releaseDate: string;
    genre: string;
    imageURL: string;
    description?: string;
    likes: 0;
}