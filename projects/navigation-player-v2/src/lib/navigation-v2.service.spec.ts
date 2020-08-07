import { TestBed } from '@angular/core/testing';

import { NavigationV2Service } from './navigation-v2.service';

describe('PdfPlayerV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationV2Service = TestBed.get(NavigationV2Service);
    expect(service).toBeTruthy();
  });
});

