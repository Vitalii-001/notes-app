import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title     : { type: String },
  text      : { type: String, required: true },
  color     : { type: String },
  createdAt : { type: Date }
});

NoteSchema.methods.write = function () {
    const greeting = this.title
        ? "Meow name is " + this.title
        : "I don't have a name";
    console.log(greeting);
};

const Note = mongoose.model('Note', NoteSchema);

const testNote = new Note({title: 'Hey', text: 'test note text'});

// testNote.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.write();
// });
