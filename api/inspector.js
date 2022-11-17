const express = require('express')
const axios = require('axios')
const { response } = require('express')
const router = express.Router()
require('dotenv/config')

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
                'Authorization': process.env.BOT_TOKEN,
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

router.post('/', (req, res) => {
    try {
        var data = JSON.stringify({
            "embeds": [
                {
                    "description": req.body.description,
                    "author": req.body.author,
                }
            ]
        });
        

        var config = {
            method: 'post',
            url: 'https://discord.com/api/channels/1026204385417633902/messages',
            headers: {
                'Authorization': process.env.BOT_TOKEN,
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
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