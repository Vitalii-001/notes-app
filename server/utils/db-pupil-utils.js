import mongoose from "mongoose";
import '../models/Pupil';

const Pupil = mongoose.model('Pupil');

export function listPupils(id) {
  return Pupil.find();
}

export function createPupil(data) {
  const pupil = new Pupil({
    name: data.name,
    surName: data.surName,
    email: data.email,
    password: data.password,
    mentor: data.mentor,
    createdAt: new Date()
  });

  return pupil.save();
}
export function editPupil(id, data) {
  return Pupil.findByIdAndUpdate(id, data);
}

export function deletePupil(id) {
  return Pupil.findById(id).remove();
}
