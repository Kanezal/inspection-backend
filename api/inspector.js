const express = require('express');
const axios = require('axios');
const { response } = require('express');
const router = express.Router()

/**
 * GET reports
 * 
 * @return list on reports
 */
router.get('/', (req, res) => {
    try {
        let config = {
            method: 'get',
            url: 'https://discord.com/api/channels/1026204385417633902/messages?limit=100',
            headers: {
                'Authorization': 'Bot MTAzMTk0MjU0MDcwMzgyNTk0MQ.GDuJnG.aa6dwq0YCwHsyYD83I0JFudLvsJ6Y7amK1Rmpw',
            }
        };

        axios(config)
            .then(function (response) {
                res.json(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    } catch (error) {
        console.log(error)
        return res.status(500).send("Server error")
    }
})

module.exports = router;