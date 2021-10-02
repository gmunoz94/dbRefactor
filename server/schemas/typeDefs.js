const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [Book]
  }
  type Book {
    _id: ID
    bookName: String
    bookAuthor: String
    bookDesc: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookId: String!): Book
    removeBook(thoughtId: ID!): Book
  }

`;

module.exports = typeDefs;
