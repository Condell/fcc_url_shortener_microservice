// import * as R from 'ramda';
// import * as RF from 'ramda-fantasy';
import express from 'express';
// import {
//   returnJSON,
// } from '../functions/impure/dbOperations';

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    serverStatus: 'running',
  });
});


router.get('/:url', (req, res) => {
  res.json({
    serverStatus: `running ${req.params.url}`,
  });
});

export default router;
