import { TestBed } from '@angular/core/testing';

import { GroceryItemsService } from './grocery-items.service';

describe('GroceryItemsService', () => {
  let service: GroceryItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
