import { TestBed } from '@angular/core/testing';

import { FirebaseImageUploadService } from './firebase-image-upload.service';

describe('FirebaseImageUploadService', () => {
  let service: FirebaseImageUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseImageUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
