import { TestBed } from '@angular/core/testing';

import { AlbumDetailsResolver } from './album-details.resolver';

describe('AlbumDetailsResolver', () => {
  let resolver: AlbumDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlbumDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
