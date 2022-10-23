const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { type: String, unique: true, required: true, trimmed: true },
        email: {
            type: String, required: true, unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, ref: 'Thought'
            },
        ],
        friends: [this],
    },
    {
        toJSON: {
            virtural: true,
            getters: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length
    });

const User = model('User', userSchema);

module.exports = User;