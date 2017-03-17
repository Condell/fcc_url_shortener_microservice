import express from 'express';


const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    serverStatus: 'running',
  });
});


router.get('/:url', (req, res) => {
  res.json({
    serverStatus: `running ${req.url}`,
  });
});


export default router;
