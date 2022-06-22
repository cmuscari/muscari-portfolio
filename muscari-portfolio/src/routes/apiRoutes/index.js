const router = require('express').Router();
const contactRoutes = require('./contactRoutes');

router.use(contactRoutes);

module.exports = router;