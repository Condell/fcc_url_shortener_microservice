import express from 'express';
import { isValidQueryString } from '../utilities/modifyURL';

const router = express.Router();


router.get('/:url', (req, res) => {
  const url = req.params.url;

  res.json({
    serverStatus: `running newUrl' ${url}`,
  });
});


export default router;
