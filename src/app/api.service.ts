// src/app/pokemon.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  searchPokemonByName(name: string): Observable<any> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.get(url);
  }
}
