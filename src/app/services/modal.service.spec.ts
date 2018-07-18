import { TestBed, inject } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { DomService } from './dom.service';

describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService,DomService]
    });
  });

  it('should be created', inject([ModalService], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));
});
