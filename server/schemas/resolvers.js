const { User, Book } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("books");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('thoughts');
        },
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
    
        if (!user) {
            throw new AuthenticationError('No user found with this email address');
        }
    
        const correctPw = await user.isCorrectPassword(password);
    
        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }
    
        const token = signToken(user);
    
        return { token, user };
        },
        saveBook: async (parent, args) => {
            const book = await User.findOneAndUpdate(
                { _id: user._id},
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
            );

            return book;
        }
    }
}

module.exports = resolvers;