import mongoose from "mongoose";
import '../models/Teacher';

const Teacher = mongoose.model('Teacher');

export function listTeacher(id) {
  return Teacher.find();
}

export function createTeacher(data) {
  const pupil = new Teacher({
    name: data.name,
    surName: data.surName,
    email: data.email,
    password: data.password,
    pupils: data.pupils,
    createdAt: new Date()
  });

  return pupil.save();
}
export function editTeacher(id, data) {
  return Teacher.findByIdAndUpdate(id, data);
}

export function deleteTeacher(id) {
  return Teacher.findById(id).remove();
}
