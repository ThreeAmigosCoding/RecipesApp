import { TestBed } from '@angular/core/testing';

import { RecipesSearchService } from './recipes-search.service';

describe('RecipesSearchService', () => {
  let service: RecipesSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
