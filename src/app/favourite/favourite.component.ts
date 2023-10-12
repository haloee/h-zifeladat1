import { Component } from '@angular/core';
import { SavedPokemonService } from '../saved-pokemon.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent{
  savedPokemon: any[] = [];
  savedPokemonList: any[] = [];

  constructor(private savedPokemonService: SavedPokemonService) {
this.savedPokemonList=this.savedPokemonService.getSavedPokemon();
    
  }
  deletePokemon(pokemon: any) {
    // Töröld a Pokémon-t a mentett listából
    this.savedPokemonService.deleteSavedPokemon(pokemon);
    // Frissítsd a megjelenített listát
    this.savedPokemonList = this.savedPokemonService.getSavedPokemon();
  }
}
