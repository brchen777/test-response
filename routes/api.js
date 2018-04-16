const express = require('express');
const router = express.Router();
const getAPI = require('../modules/getAPI');

const pathObjs = {
    '/json': {
        GET: getAPI.json
    }
};

Object.entries(pathObjs).forEach(([path, pathObj]) => {
    const route = router.route(path);
    Object.entries(pathObj).forEach(([key, cb]) => {
        const method = key.toLowerCase();
        // ex. route.post(cb);
        route[method](cb);
    });

    // 405 error
    route.all((req, res) => {
        res.status(405).json({ error: 'Method Not Allowed' });
    });
});

module.exports = router;
