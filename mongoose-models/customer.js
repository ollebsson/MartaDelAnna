module.exports = function(mongoose){

  var CustomerSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true}
  });

  return mongoose.model("Customer", CustomerSchema);
};