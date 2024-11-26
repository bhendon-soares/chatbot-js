require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express()
const API_KEY = process.env.HUGGINGFACE_API_KEY;
const MODEL = "facebook/blenderbot-400M-distill";  // Modelo BlenderBot
const PORT = 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).send("Message not provided");
    }

    try {
        const url = `https://api-inference.huggingface.co/models/${MODEL}`;
        const data = { inputs: message };
        const config = {
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.post(url, data, config);
        const botReply = response.data[0].generated_text;
        res.json({ reply: botReply });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao conectar com a API do HuggingFace");
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:3000");
});