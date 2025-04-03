
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

/*
// API route to handle /predict
app.post('/predict', (req, res) => {
    const inputText = req.body.text;
    const response = `Generated response for: ${inputText}`;
    res.json({ response });
});
*/

/////////// Test 1 //////////////////////
const axios = require('axios');

app.post('/predict', async (req, res) => {0
    const inputText = req.body.text;
    const response = `Generated response for: ${inputText}`;
    //res.json({ response });
    try {
        const pythonResponse = await axios.post('https://4bfd-34-141-179-68.ngrok-free.app/predict', { text: inputText });
        const modelResponse = pythonResponse.data.response;
        //res.json({ pythonResponse });
        res.json({ response: modelResponse });
    } catch (error) {
        const response = `ERROR`;
        res.json({ response });

        res.status(500).json({ error: 'Model inference failed' });
    }
});
////////////End of Test 1//////////////


// Fallback for all other routes, serves React's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

