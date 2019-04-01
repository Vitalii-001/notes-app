import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from './etc/config.json';

import * as db from './utils/share-utils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful pupils api handlers
app.use('/', require('./routes/pupils'));
app.use('/', require('./routes/teachers'));





const server = app.listen(serverPort, function() {
  console.log(`Server is up and running on port ${serverPort}`);
});
