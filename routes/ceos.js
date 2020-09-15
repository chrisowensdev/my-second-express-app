const express = require('express');
const router = express.Router();
const db = require('../models/conn');

router.get("/", (req, res) => {
    const snippet = `<h1>CEOs of Apple</h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
})

module.exports = router;