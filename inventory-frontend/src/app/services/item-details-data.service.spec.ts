import { TestBed } from '@angular/core/testing';

import { ItemDetailsDataService } from './item-details-data.service';

describe('ItemDetailsDataService', () => {
  let service: ItemDetailsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDetailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
