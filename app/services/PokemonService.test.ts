import { describe, it, expect, beforeEach } from 'vitest';
import { PokemonService } from './PokemonService';
import { PokeApiClient } from './PokeApiClient';
import { Pokemon } from './pokemon';

describe('PokemonService', () => {
  let service: PokemonService;
  let pokeApiClient: PokeApiClient;

  beforeEach(() => {
    pokeApiClient = new PokeApiClient();
    service = new PokemonService(pokeApiClient);
  });

  it('should get the list of Pokemon', async () => {
    const pokemonList = await service.getPokemonList();
    expect(pokemonList).toBeInstanceOf(Array);
  });

  it('should get user team', () => {
    const userId = 'user1';
    const team = service.getUserTeam(userId);
    expect(team).toEqual([]);
  });

  it('should clear user team', () => {
    const userId = 'user1';
    service.clearTeam(userId);
    const team = service.getUserTeam(userId);
    expect(team).toEqual([]);
  });

  it('should toggle Pokemon in team', () => {
    const userId = 'user1';
    const pokemon: Pokemon = { id: 1, name: 'Bulbasaur', sprite: 'bulbasaur.png', types: ['grass'] };
    const added = service.togglePokemonInTeam(userId, pokemon);
    expect(added).toBe(true);
    const removed = service.togglePokemonInTeam(userId, pokemon);
    expect(removed).toBe(true);
  });
});