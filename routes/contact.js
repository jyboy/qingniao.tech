const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('contact', {
        active: {
            index: '',
            tongqu: '',
            contact: 'active'
        }
    });
});

module.exports = router;
