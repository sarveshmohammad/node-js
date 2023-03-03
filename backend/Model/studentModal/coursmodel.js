const mongoose = require('mongoose');
const coures = new mongoose.Schema({
   coures:Object,
});

module.exports = mongoose.model('StudentCoures',coures);