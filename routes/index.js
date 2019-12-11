const express = require('express');
const userRoutes = require('./user.routes');

const router = express.Router();

router.use('/users', userRoutes);

router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);

module.exports = router;