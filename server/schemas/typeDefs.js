const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Number!
        savedBooks: [Book]
    }

    type Book {
        authors: [
            {
                String!
            }
        ]
        description: String!
        bookId: String!
        image: String!
        link: String!
        title: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        books(username: String!): [Book]
        me: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        saveBook(bookId: String!): Book
        deleteBook(bookId: String!): Book 
    }
`;

module.exports = typeDefs;