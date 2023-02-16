import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SearchCriteria } from 'src/app/shared/models/SearchCriteria';

@Component({
  selector: 'app-album-list-filter',
  templateUrl: './album-list-filter.component.html',
  styleUrls: ['./album-list-filter.component.scss']
})
export class AlbumListFilterComponent {
  @Output() search: SearchCriteria = new SearchCriteria();
  @Output() searchChanged: EventEmitter<SearchCriteria> = new EventEmitter();
  @Input() genres!: Set<string> 
  @Input() artists!: Set<string> 
 
  onInput(): void {
    this.searchChanged.emit(this.search);
  }
}
