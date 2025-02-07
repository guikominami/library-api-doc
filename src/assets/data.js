export const apiUsers = {
  name: "Usuários",
  url: "https://library-07f2.onrender.com/api/users",
  apis: [
    {
      id: 1,
      type: "GET",
      description: "Retornar uma lista de usuários do sistema de biblioteca.",
      security: "",
      parameters: "",
    },
    {
      id: 2,
      url: "",
      type: "POST",
      description: "Inserir um gênero na lista de usuários de livros.",
      security: "x-token",
      parameters: "name",
    },
    {
      id: 3,
      url: "",
      type: "PUT",
      description: "Alterar um gênero na lista de usuários de livros.",
      security: "x-token",
      parameters: "id, name",
    },
  ],
};

export const apiGenres = {
  name: "Gêneros",
  url: "https://library-07f2.onrender.com/api/genres",
  apis: [
    {
      id: 1,
      type: "GET",
      name: "Gêneros",
      description: "Retornar uma lista de gêneros de livros.",
      security: "",
      parameters: "",
    },
    {
      id: 2,
      type: "POST",
      name: "Gêneros",
      description: "Inserir um gênero na lista de gêneros de livros.",
      security: "x-token",
      parameters: "name",
    },
    {
      id: 3,
      type: "PUT",
      name: "Gêneros",
      description: "Alterar um gênero na lista de gêneros de livros.",
      security: "x-token",
      parameters: "id, name",
    },
  ],
};

export const apiAuthors = {
  name: "Gêneros",
  url: "https://library-07f2.onrender.com/api/authors",
  apis: [
    {
      id: 1,
      type: "GET",
      name: "Gêneros",
      description: "Retornar uma lista de autores de livros.",
      security: "",
      parameters: "",
    },
    {
      id: 2,
      type: "POST",
      name: "Gêneros",
      description: "Inserir um gênero na lista de autores de livros.",
      security: "x-token",
      parameters: "name",
    },
    {
      id: 3,
      type: "PUT",
      name: "Gêneros",
      description: "Alterar um gênero na lista de autores de livros.",
      security: "x-token",
      parameters: "id, name",
    },
  ],
};

export const apiAuthentication = {
  name: "Autenticação",
  url: "https://library-07f2.onrender.com/api/auth",
  apis: [
    {
      id: 1,
      type: "GET",
      name: "Autenticação",
      description: "Retornar uma lista de autores de livros.",
      security: "",
      parameters: "",
    },
    {
      id: 2,
      type: "POST",
      name: "Autenticação",
      description: "Autenticar no sistema.",
      security: "x-token",
      parameters: "name",
    },
  ],
};

export const apiBooks = 
{
  name: "Autenticação",
  url: "https://library-07f2.onrender.com/api/auth",
  apis: [
    {
      id: 1,
      type: "GET",
      url: "",
      name: "Livros",
      description: "Retornar uma lista de livros.",
      security: "",
      parameters: "",
    },
    {
      id: 2,
      type: "POST",
      name: "Livros",
      description: "Inserir um gênero na lista de livros.",
      security: "x-token",
      parameters: "name",
    },
    {
      id: 3,
      type: "PUT",
      name: "Livros",
      description: "Alterar um gênero na lista de livros.",
      security: "x-token",
      parameters: "id, name",
    },
  ]};

export const apiCustomers = {
  name: "Clientes",
  url: "https://library-07f2.onrender.com/api/auth",
  apis: [
  {
    id: 1,
    type: "GET",
    name: "Clientes",
    description: "Retornar uma lista de clientes.",
    security: "",
    parameters: "",
  },
  {
    id: 2,
    type: "POST",
    name: "Clientes",
    description: "Inserir um cliente na lista de clientes.",
    security: "x-token",
    parameters: "name",
  },
  {
    id: 3,
    type: "PUT",
    name: "Clientes",
    description: "Alterar um cliente na lista de clientes.",
    security: "x-token",
    parameters: "id, name",
  },
]};

export const apiRentals = {
  name: "Reservas",
  url: "https://library-07f2.onrender.com/api/auth",
  apis: [
  {
    id: 1,
    type: "GET",
    name: "Reservas",
    description: "Lista de reservas.",
    security: "",
    parameters: "",
  },
  {
    id: 2,
    type: "POST",
    name: "Reservas",
    description: "Reservar um livro.",
    security: "x-token",
    parameters: "name",
  },
  {
    id: 3,
    type: "PUT",
    name: "Reservas",
    description: "Alterar uma reserva.",
    security: "x-token",
    parameters: "id, name",
  },
]};

export const apiLinks = [
  {
    id: 1,
    name: "usuários",
    url: apiUsers,
  },
  {
    id: 2,
    name: "autenticação",
    url: apiAuthentication,
  },
  {
    id: 3,
    name: "autores",
    url: apiAuthors,
  },
  {
    id: 4,
    name: "gêneros",
    url: apiGenres,
  },
  {
    id: 5,
    name: "livros",
    url: apiBooks,
  },
  {
    id: 6,
    name: "clientes",
    url: apiCustomers,
  },
  {
    id: 7,
    name: "reservas",
    url: apiRentals,
  },
];
