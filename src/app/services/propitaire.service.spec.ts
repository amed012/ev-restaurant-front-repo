import { TestBed } from '@angular/core/testing';

import { PropitaireService } from './propitaire.service';

describe('PropitaireService', () => {
  let service: PropitaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropitaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
