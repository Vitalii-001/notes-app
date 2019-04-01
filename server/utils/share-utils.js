import mongoose from 'mongoose';
import config from '../etc/config';

export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}
