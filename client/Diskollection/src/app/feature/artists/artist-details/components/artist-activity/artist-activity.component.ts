import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-activity',
  templateUrl: './artist-activity.component.html',
  styleUrls: ['./artist-activity.component.scss']
})
export class ArtistActivityComponent {
  @Input() isActive!: boolean;
}
