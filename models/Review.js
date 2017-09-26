const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now()
  },
  _user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author'
  },
  _store: {
    type: mongoose.Schema.ObjectId,
    ref: 'Store',
    required: 'You must supply a store'
  },
  text: {
    type: String,
    required: 'Your review must have text'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
});

=======

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    _user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'You must supply a user'
    },
    _store: {
        type: mongoose.Schema.ObjectId,
        ref: 'Store',
        required: 'You must supply a store'
    },
    text: {
        type: String,
        required: 'Your review must have text'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});

function autopopulate(next) {
    this.populate('_user');
    next();
}

reviewSchema.pre('find', autopopulate);
reviewSchema.pre('findOne', autopopulate);


>>>>>>> 2d12dfa77679f647878b9194d6e209f31cfd8e08
module.exports = mongoose.model('Review', reviewSchema);
