export const apiFetchPokemonTypes = () => new Promise(resolve => setTimeout(() => resolve({
  data: [
    {
      id: 1,
      name: 'Normal',
    },
    {
      id: 2,
      name: 'Fire',
    },
    {
      id: 3,
      name: 'Water',
    },
    {
      id: 4,
      name: 'Electric',
    },
    {
      id: 5,
      name: 'Grass',
    },
    {
      id: 6,
      name: 'Ice',
    },
    {
      id: 7,
      name: 'Fighting',
    },
    {
      id: 8,
      name: 'Poison',
    },
    {
      id: 9,
      name: 'Ground',
    },
    {
      id: 10,
      name: 'Flying',
    },
    {
      id: 11,
      name: 'Psychic',
    },
    {
      id: 12,
      name: 'Bug',
    },
    {
      id: 13,
      name: 'Rock',
    },
    {
      id: 14,
      name: 'Ghost',
    },
    {
      id: 15,
      name: 'Dragon',
    },
    {
      id: 16,
      name: 'Dark',
    },
    {
      id: 17,
      name: 'Steel',
    },
    {
      id: 18,
      name: 'Fairy',
    },
  ],
}), 500));

export const apiEvaluatePokemon = () => new Promise(resolve => setTimeout(() => resolve({
  data: {
    pokemon: {
      types: ['fire', 'flying'],
      moveset: {
        fast: 'fire',
        charged: ['fire', 'dragon'],
      },
    },
    evaluation: [
      {
        score: 4.104375,
        against: {
          primary: 'bug',
          secondary: 'steel',
        },
        dmgDealt: {
          fast: 2.56,
          charged: 2.56,
        },
        dmgReceived: {
          primary: 0.390625,
          secondary: 0.625,
        },
        moveset: {
          fast: 'fire',
          charged: 'fire',
        },
      },
      {
        score: 2.169375,
        against: {
          primary: 'bug',
          secondary: 'steel',
        },
        dmgDealt: {
          fast: 2.56,
          charged: 0.625,
        },
        dmgReceived: {
          primary: 0.390625,
          secondary: 0.625,
        },
        moveset: {
          fast: 'fire',
          charged: 'dragon',
        },
      },
    ],
  },
}), 500));
