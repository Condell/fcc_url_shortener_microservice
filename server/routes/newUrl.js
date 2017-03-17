import express from 'express';


const router = express.Router();


router.get('/:url', (req, res) => {
  res.json({
    serverStatus: `running newUrl' ${req.url}`,
  });
});


export default router;
