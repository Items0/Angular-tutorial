import { inject, TestBed } from '@angular/core/testing';

import { JsonphService } from './jsonph.service';

describe('JsonphService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [JsonphService],
        });
    });

    it('should be created', inject([JsonphService], (service: JsonphService) => {
        expect(service).toBeTruthy();
    }));
});
