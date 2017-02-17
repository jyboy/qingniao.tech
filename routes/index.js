const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        active: {
            index: 'active',
            tongqu: '',
            contact: ''
        }
    });
});

module.exports = router;
