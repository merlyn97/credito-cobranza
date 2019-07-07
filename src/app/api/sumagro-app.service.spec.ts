import { TestBed } from '@angular/core/testing';

import { SumagroAppService } from './sumagro-app.service';

describe('SumagroAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumagroAppService = TestBed.get(SumagroAppService);
    expect(service).toBeTruthy();
  });
});
