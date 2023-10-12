import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: any;

  constructor(private pokemonService: ApiService) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  getPokemonData() {
    this.pokemonService.getPokemon().subscribe((data) => {
      this.pokemonData = data;
    });
  }
}