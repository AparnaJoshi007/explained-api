import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.post('/api/add-subscriber', (req, res) => {
    const email = req.body.email
    const name = req.body.name;

    res.status(200).send(`${email} and ${name} are added`);
});

app.listen(8000, () => console.log('Listening on port 8000'));