import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListFilterComponent } from './album-list-filter.component';

describe('AlbumListFilterComponent', () => {
  let component: AlbumListFilterComponent;
  let fixture: ComponentFixture<AlbumListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
