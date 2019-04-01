import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  name: { type: String, required: true },
  surName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pupils: { any: Array },
  createdAt: { type: Date }
});

mongoose.model('Teacher', TeacherSchema);

// const testPupil = new Pupil({name: 'Hey', surName: 'test note text', className: '1B'});

// testPupil.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.write();
// });
