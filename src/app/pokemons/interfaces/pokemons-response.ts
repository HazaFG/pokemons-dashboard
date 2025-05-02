//Le picas en typescript para generar esta mierda, fernando herrera no explica un carajo esta parte

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
