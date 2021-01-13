import express from 'express';
import calc  from './calc';

const aNumber = calc();
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT} and the value calculated number is ${aNumber}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);