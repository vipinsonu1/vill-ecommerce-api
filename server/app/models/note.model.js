const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    
   Id: Number
},
   {
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);