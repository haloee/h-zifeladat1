import { TestBed } from '@angular/core/testing';

import { SavedPokemonService } from './saved-pokemon.service';

describe('SavedPokemonService', () => {
  let service: SavedPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
