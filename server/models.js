import mongoose from 'mongoose';

const UrlSchema = mongoose.Schema({
  original_url: String,
  // short_url: String,
});

const Url = mongoose.model('Url', UrlSchema);

export default Url;

// Instance method to calculate short url?