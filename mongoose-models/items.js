module.exports = function(mongoose){

  var ItemSchema = mongoose.Schema({
    title: {type: String, required: true},
    categories: {type: String, required: true},
    architects: {type: String, required: false},
    released: {type: Number, required: false},
    releasedStr: {type: String, required: false},
    placed: {type: String, required: false},
    client: {type: String, required: false},
    paragraph1: {type: String, required: false},
    paragraph2: {type: String, required: false},
    paragraph3: {type: String, required: false},
    paragraph4: {type: String, required: false},
    media: {type: Array, required: false},
    url: {type: Array, required: false},
    urlName: {type: String, required: false}
  });

  return mongoose.model("Item", ItemSchema);
};