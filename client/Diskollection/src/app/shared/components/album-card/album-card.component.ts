import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album } from '../../models/Album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() album!: Album;
  @Output() deleteAlbum: EventEmitter<string> = new EventEmitter();

  onDeleteAlbum(){
    this.deleteAlbum.emit(this.album.id);
  }
  
  ngOnInit(): void {
    this.album.imageURL = this.album.imageURL || environment.defaultAlbumCover;
  }
}
