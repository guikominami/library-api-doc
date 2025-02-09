import headerBasic from "../assets/img/header_basic.jpg";
import headerAuth from "../assets/img/header_auth.jpg";
import userPostBody from "../assets/img/user_post_body.jpg";
import userResponse200PostHeader from "../assets/img/user_response_200_post_header.jpg";
import userResponse200PostBody from "../assets/img/user_response_200_post_body.jpg";
import authPostBody from "../assets/img/auth_post_body.jpg"
import authResponse200PostHeader from "../assets/img/auth_response_200_post_header.jpg";
import authResponse200PostBody from "../assets/img/auth_response_200_post_body.jpg";
import genrePostBody from "../assets/img/genre_post_body.jpg";
import genreResponse200GetBody from "../assets/img/genre_response_200_get_body.jpg";
import genreResponse200PostBody from "../assets/img/genre_response_200_post_body.jpg";
import authorPostBody from "../assets/img/author_post_body.jpg";
import authorResponse200PostBody from "../assets/img/author_response_200_post_body.jpg";

export const apiUsers = {
  name: "Register User",
  url: "https://library-07f2.onrender.com/api/users",
  apis: [
    {
      id: 1,
      type: "POST",
      description: "Register an user in the system.",
      hasLink: false,
      header: headerBasic,
      body: userPostBody,
      headerResponse: userResponse200PostHeader,
      bodyResponse: userResponse200PostBody,
      tips: "Copy the x-auth-token in the header response to use in the others requests."
    },
  ],
};


export const apiAuthentication = {
  name: "Authentication",
  url: "https://library-07f2.onrender.com/api/auth",
  apis: [
    {
      id: 1,
      type: "POST",
      description: "Authenticate user to the system.",
      hasLink: false,  
      header: headerBasic,
      body: authPostBody,
      headerResponse: authResponse200PostHeader,
      bodyResponse: authResponse200PostBody,
      tips: "Copy the x-auth-token content in the body response to use in the others requests."
    },
  ],
};

export const apiGenres = {
  name: "Genres",
  apis: [
    {
      id: 1,
      type: "GET",
      url: "https://library-07f2.onrender.com/api/genres",
      description: "Return a list of book genre.",
      hasLink: true,
      header: headerBasic,
      headerResponse: authResponse200PostHeader,
      bodyResponse: genreResponse200GetBody,
    },
    {
      id: 2,
      type: "POST",
      url: "https://library-07f2.onrender.com/api/genres",
      description: "Insert a book genre. Ex.: biography, romance, fiction",
      hasLink: false,
      header: headerAuth,
      body: genrePostBody,
      headerResponse: authResponse200PostHeader,
      bodyResponse: genreResponse200PostBody,
    },
    {
      id: 3,
      type: "PUT",
      url: "https://library-07f2.onrender.com/api/genres/:id",
      description: "Update a book genre.",
      hasLink: false,
      header: headerAuth,
      body: genrePostBody,
      headerResponse: authResponse200PostHeader,
      bodyResponse: genreResponse200PostBody,
    },
    {
      id: 4,
      type: "DELETE",
      url: "https://library-07f2.onrender.com/api/genres/:id",
      description: "Delete a book genre.",
      hasLink: false,
      header: headerAuth,
      headerResponse: authResponse200PostHeader,
      bodyResponse: genreResponse200PostBody,
    },    
  ],
};

export const apiAuthors = {
  name: "Authors",
  apis: [
    {
      id: 1,
      type: "GET",
      url: "https://library-07f2.onrender.com/api/authors",
      description: "Return a list of book authors.",
      hasLink: true,
      header: headerBasic,
      headerResponse: authResponse200PostHeader,
      bodyResponse: genreResponse200GetBody,
    },
    {
      id: 2,
      type: "POST",
      url: "https://library-07f2.onrender.com/api/authors",
      description: "Insert a book author.",
      hasLink: false,
      header: headerAuth,
      body: authorPostBody,
      headerResponse: authResponse200PostHeader,
      bodyResponse: authorResponse200PostBody,
    },
    {
      id: 3,
      type: "PUT",
      url: "https://library-07f2.onrender.com/api/authors/:id",
      description: "Update a book author.",
      hasLink: false,
      header: headerAuth,
      body: authorPostBody,
      headerResponse: authResponse200PostHeader,
      bodyResponse: authorResponse200PostBody,
    },
    {
      id: 4,
      type: "DELETE",
      url: "https://library-07f2.onrender.com/api/authors/:id",
      description: "Delete a book author.",
      hasLink: false,
      header: headerAuth,
      body: authorPostBody,
      headerResponse: authResponse200PostHeader,
      bodyResponse: authorResponse200PostBody,
    },    
  ],
};

export const apiBooks = {
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
  ],
};

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
  ],
};

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
  ],
};

export const apiLinks = [
  {
    id: 1,
    name: "users",
    url: apiUsers,
  },
  {
    id: 2,
    name: "authentication",
    url: apiAuthentication,
  },
  {
    id: 3,
    name: "genres",
    url: apiGenres,
  },
  {
    id: 4,
    name: "authors",
    url: apiAuthors,
  },
  {
    id: 5,
    name: "book",
    url: apiBooks,
  },
  {
    id: 6,
    name: "customers",
    url: apiCustomers,
  },
  {
    id: 7,
    name: "rentals",
    url: apiRentals,
  },
];
