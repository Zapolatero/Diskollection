import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistActivityComponent } from './artist-activity.component';

describe('ArtistActivityComponent', () => {
  let component: ArtistActivityComponent;
  let fixture: ComponentFixture<ArtistActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
