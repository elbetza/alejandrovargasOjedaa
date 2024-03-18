import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agenda-pokemon',
  templateUrl: './agenda-pokemon.page.html',
  styleUrls: ['./agenda-pokemon.page.scss'],
})
export class AgendaPokemonPage implements OnInit {
  pokemonList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(
      (response) => {
        this.pokemonList = response.results;
      },
      (error) => {
        console.error('Error al obtener la lista de Pokémon:', error);
      }
    );
  }

  // Método para obtener el ID del Pokémon desde la URL
  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  // Método para formatear el nombre del Pokémon
  getPokemonName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

