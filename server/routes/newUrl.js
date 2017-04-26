import express from 'express';

const router = express.Router();


router.get('/:url', (req, res) => {
  const url = req.params.url;

  res.json({
    serverStatus: `running newUrl' ${url}`,
  });
});


export default router;
