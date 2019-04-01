import * as db from '../utils/db-pupil-utils';

const express = require('express'),
  router = express.Router();

// Car brands page

router.get('/pupils', function(req, res) {
  db.listPupils().then(data => res.send(data));
});

router.post('/pupils', (req, res) => {
  db.createPupil(req.body).then(data => res.send(data));
});

router.put('/pupils/:id', (req, res) => {
  db.editPupil(req.params.id, req.body).then(data => res.send(data));
});

router.delete('/pupils/:id', (req, res) => {
  db.deletePupil(req.params.id).then(data => res.send(data));
});

module.exports = router;
