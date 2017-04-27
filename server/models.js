import mongoose from 'mongoose';


/* eslint-disable import/prefer-default-export */


const UrlSchema = mongoose.Schema({
  original_url: String,
  // short_url: String,
});

const Url = mongoose.model('Url', UrlSchema);

export { Url };

// Instance method to calculate short url?
