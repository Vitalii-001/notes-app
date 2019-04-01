import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PupilSchema = new Schema({
  name: { type: String, required: true },
  surName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mentor: { type: String, required: true },
  createdAt: { type: Date }
});

PupilSchema.methods.write = function () {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

mongoose.model('Pupil', PupilSchema);

// const testPupil = new Pupil({name: 'Hey', surName: 'test note text', className: '1B'});

// testPupil.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.write();
// });
