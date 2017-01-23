// =======================
// Env Configuration =====
// =======================
require('./config/config');

// =======================
// Library imports =======
// =======================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// =======================
// Set up express app ====
// =======================
var app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// =======================
// Routes ================
// =======================
// root path for deployment
app.post('/', (req, res) => {    
    if (req.is('application/json') && (req.body.hasOwnProperty('payload'))) {
        const payload = req.body.payload;
        const result = { response: [] };

        // filter data with drm: true and episodeCount > 0
        for (let i = 0; i < payload.length; i++) {
            if (payload[i].drm === true && payload[i].episodeCount > 0) {
                result.response.push({
                    image: payload[i].image.showImage,
                    slug: payload[i].slug,
                    title: payload[i].title
                });
            }
        }

        if (!result) {
            return res.status(404).json({ "error": "Could not decode request: JSON parsing failed" });
            // return res.status(404).json({ "response": "Not found" });
        }

        res.json(result);
    } else {
        res.status(400).json({ "error": "Could not decode request: JSON parsing failed" });
    }
});

// Send response 400 status for the rest routes
app.use('/*', function(req, res) { res.status(400).json({ "error": "Could not decode request: JSON parsing failed" }); });
// app.use('/*', function(req, res) { res.status(400).json({ "error": "Unable to handle request" }); });

// =======================
// start the server ======
// =======================
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};