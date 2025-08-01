const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/events', async (req, res) => {
    const event = req.body;

    //submit event
    axios.post('http://localhost:4001/api/events',event);
    axios.post('http://localhost:4002/api/events',event);
    axios.post('http://localhost:4003/api/events');

    res.send('Event submited');
})

app.listen(4005, () => console.log('🚀 Server jalan di http://localhost:4005'));