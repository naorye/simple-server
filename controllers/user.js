const express = require('express');
const uuid4 = require('uuid/v4');
const jsondb = require('../jsondb');
const verifyLoggedIn = require('../middlewares/verify-logged-in');

const router = express.Router();

router.get('/me', verifyLoggedIn, async (req, res) => {
    res.json(req.user);
});

router.post('/me/login', async (req, res, next) => {
    const { username, password } = req.body;

    const user = await jsondb.get('users').find({ username, password });

    if (!user.value()) {
        res.json({ error: 'INVALID_CREDENTIALS' });
        return;
    }

    const token = uuid4();
    user.assign({ token }).write();

    res.json({ token });
});

module.exports = router;
