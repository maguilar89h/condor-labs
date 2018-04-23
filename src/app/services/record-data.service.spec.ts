import { TestBed, inject } from '@angular/core/testing';

import { RecordDataService } from './record-data.service';

describe('RecordDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordDataService]
    });
  });

  it('should be created', inject([RecordDataService], (service: RecordDataService) => {
    expect(service).toBeTruthy();
  }));
});
