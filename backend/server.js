import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`welcome to http://localhost:${port}`);
});