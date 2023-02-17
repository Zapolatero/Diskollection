import { Album } from "./Album";

export interface Artist{
    id: string;
    name: string;
    country: string;
    isActive: boolean;
    biography?: string;
    albums: Array<Album>;
}

export interface ArtistDTO{
    id: string;
    country: string;
    name: string;
    biography?: string; 
    isActive: boolean;
}