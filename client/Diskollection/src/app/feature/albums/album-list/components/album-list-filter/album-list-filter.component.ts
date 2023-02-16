import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-list-filter',
  templateUrl: './album-list-filter.component.html',
  styleUrls: ['./album-list-filter.component.scss']
})
export class AlbumListFilterComponent {
  @Input() genres!: Set<string> 
  @Input() artists!: Set<string> 
}
