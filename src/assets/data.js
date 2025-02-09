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
import authorResponse200GetBody from "../assets/img/author_response_200_get_body.jpg";
import bookPostBody from "../assets/img/book_post_body.jpg";
import bookResponse200PostBody from "../assets/img/book_response_200_post_body.jpg";
import bookResponse200GetBody from "../assets/img/book_response_200_get_body.jpg";
import customerPostBody from "../assets/img/customer_post_body.jpg";
import customerResponse200PostBody from "../assets/img/customer_response_200_post_body.jpg";
import customerResponse200GetBody from "../assets/img/customer_response_200_get_body.jpg";
import rentalPostBody from "../assets/img/rental_post_body.jpg";
import rentalResponse200PostBody from "../assets/img/rental_response_200_post_body.jpg";

export const apiUsers = {
  name: "Register User",
  type: "POST",
  description: "Register an user in the system.",
  url: "https://library-07f2.onrender.com/api/users",
  hasLink: false,
  header: headerBasic,
  body: userPostBody,
  headerResponse: userResponse200PostHeader,
  bodyResponse: userResponse200PostBody,
  tips: "Copy the x-auth-token in the header response to use in the others requests."
};

export const apiAuthentication = {
  name: "Authentication",
  type: "POST",
  url: "https://library-07f2.onrender.com/api/auth",
  description: "Authenticate user to the system.",
  hasLink: false,  
  header: headerBasic,
  body: authPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: authResponse200PostBody,
  tips: "Copy the x-auth-token content in the body response to use in the others requests."
};

export const apiGetGenre = {
  name: "Genres",
  type: "GET",
  url: "https://library-07f2.onrender.com/api/genres",
  description: "Return a list of book genres.",
  hasLink: true,
  header: headerBasic,
  headerResponse: authResponse200PostHeader,
  bodyResponse: genreResponse200GetBody,
};

export const apiPostGenre = {
  name: "Genres",
  type: "POST",
  url: "https://library-07f2.onrender.com/api/genres",
  description: "Insert a book genre. Ex.: biography, romance, fiction",
  hasLink: false,
  header: headerAuth,
  body: genrePostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: genreResponse200PostBody,
  tips: "Use x-auth-token content from a valid user in the header request."
};

export const apiPutGenre = {
  name: "Genres",
  type: "PUT",
  url: "https://library-07f2.onrender.com/api/genres/:id",
  description: "Update a book genre.",
  hasLink: false,
  header: headerAuth,
  body: genrePostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: genreResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."
};

export const apiDeleteGenre = {
  name: "Genres",
  id: 4,
  type: "DELETE",
  url: "https://library-07f2.onrender.com/api/genres/:id",
  description: "Delete a book genre.",
  hasLink: false,
  header: headerAuth,
  headerResponse: authResponse200PostHeader,
  bodyResponse: genreResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."
};

export const apiGetAuthors = {
  name: "Authors",
  type: "GET",
  url: "https://library-07f2.onrender.com/api/authors",
  description: "Return a list of book authors.",
  hasLink: true,
  header: headerBasic,
  headerResponse: authResponse200PostHeader,
  bodyResponse: authorResponse200GetBody,
};

export const apiPostAuthor = {
  name: "Authors",
  type: "POST",
  url: "https://library-07f2.onrender.com/api/authors",
  description: "Insert a book author.",
  hasLink: false,
  header: headerAuth,
  body: authorPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: authorResponse200PostBody,
  tips: "Use x-auth-token content from a valid user in the header request."  
};

export const apiPutAuthor = {
  name: "Authors",
  type: "PUT",
  url: "https://library-07f2.onrender.com/api/authors/:id",
  description: "Update a book author.",
  hasLink: false,
  header: headerAuth,
  body: authorPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: authorResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."
};

export const apiDeleteAuthor = {
  name: "Authors",
  type: "DELETE",
  url: "https://library-07f2.onrender.com/api/authors/:id",
  description: "Delete a book author.",
  hasLink: false,
  header: headerAuth,
  headerResponse: authResponse200PostHeader,
  bodyResponse: authorResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."  
};

export const apiGetBooks = {
  name: "Books",
  type: "GET",
  url: "https://library-07f2.onrender.com/api/books",
  hasLink: true,
  description: "Return a list of books.",
  header: headerBasic,
  headerResponse: authResponse200PostHeader,
  bodyResponse: bookResponse200GetBody,
};

export const apiPostBook = {
  name: "Books",
  type: "POST",
  url: "https://library-07f2.onrender.com/api/books",
  hasLink: false,
  description: "Insert a book.",
  header: headerAuth,
  body: bookPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: bookResponse200PostBody,
  tips: "Use x-auth-token content from a valid user in the header request."  
};

export const apiPutBook = {
  name: "Books",
  type: "PUT",
  url: "https://library-07f2.onrender.com/api/books/:id",
  hasLink: false,
  description: "Update a book.",
  header: headerAuth,
  body: bookPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: bookResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."  
};

export const apiDeleteBook = {
  name: "Books",
  type: "DELETE",
  url: "https://library-07f2.onrender.com/api/books/:id",
  hasLink: false,
  description: "Delete a book.",
  header: headerAuth,
  headerResponse: authResponse200PostHeader,
  bodyResponse: bookResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."  
};

export const apiGetCustomers = {
  name: "Customers",
  type: "GET",
  url: "https://library-07f2.onrender.com/api/customers",
  hasLink: true,
  description: "Return a list of customers.",
  header: headerBasic,
  headerResponse: authResponse200PostHeader,
  bodyResponse: customerResponse200GetBody,
};

export const apiPostCustomer = {
  name: "Customers",
  type: "POST",
  url: "https://library-07f2.onrender.com/api/customers",
  hasLink: false,
  description: "Insert a customer.",
  header: headerBasic,
  body: customerPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: customerResponse200PostBody,
  tips: "Use x-auth-token content from a valid user in the header request."  
};

export const apiPutCustomer = {
  name: "Customers",
  type: "PUT",
  url: "https://library-07f2.onrender.com/api/customers/:id",
  hasLink: false,
  description: "Update a customer.",
  header: headerAuth,
  body: customerPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: customerResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."  
};

export const apiDeleteCustomer = {
  name: "Customers",
  type: "DELETE",
  url: "https://library-07f2.onrender.com/api/customers/:id",
  hasLink: false,
  description: "Delete a customer.",
  header: headerAuth,
  headerResponse: authResponse200PostHeader,
  bodyResponse: customerResponse200PostBody,
  tips: "Use x-auth-token content from a valid admin user in the header request."  
};

export const apiRentals = {
  name: "Book rentals",
  type: "POST",
  url: "https://library-07f2.onrender.com/api/rentals",
  hasLink: false,
  description: "Create a book rental.",
  header: headerAuth,
  body: rentalPostBody,
  headerResponse: authResponse200PostHeader,
  bodyResponse: rentalResponse200PostBody,
  tips: "Use x-auth-token content from a valid user in the header request."  
};

export const apiLinks = [
  {
    id: 0,
    name: "users",
    url: "",
  },  
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
    url: "",
  },  
  {
    id: 4,
    name: "list genres",
    url: apiGetGenre,
  },  
  {
    id: 6,
    name: "create book genre",
    url: apiPostGenre,
  },   
  {
    id: 7,
    name: "update book genre",
    url: apiPutGenre,
  },  
  {
    id: 8,
    name: "delete book genre",
    url: apiDeleteGenre,
  },      
  {
    id: 9,
    name: "authors",
    url: "",
  }, 
  {
    id: 10,
    name: "list authors",
    url: apiGetAuthors,
  }, 
  {
    id: 11,
    name: "create author",
    url: apiPostAuthor,
  },   
  {
    id: 12,
    name: "update author",
    url: apiPutAuthor,
  },   
  {
    id: 13,
    name: "delete author",
    url: apiDeleteAuthor,
  }, 
  {
    id: 14,
    name: "books",
    url: "",
  },    
  {
    id: 15,
    name: "list books",
    url: apiGetBooks,
  },
  {
    id: 16,
    name: "create book",
    url: apiPostBook
  },
  {
    id: 17,
    name: "update book",
    url: apiPutBook
  },  
  {
    id: 18,
    name: "delete book",
    url: apiDeleteBook
  },    
  {
    id: 19,
    name: "customers",
    url: "",
  }, 
  {
    id: 20,
    name: "list customers",
    url: apiGetCustomers,
  },  
  {
    id: 21,
    name: "create customer",
    url: apiPostCustomer,
  },  
  {
    id: 22,
    name: "update customer",
    url: apiPutCustomer,
  },  
  {
    id: 23,
    name: "delete customer",
    url: apiDeleteCustomer,
  }, 
  {
    id: 24,
    name: "rentals",
    url: "",
  },       
  {
    id: 25,
    name: "rentals",
    url: apiRentals,
  },
];
