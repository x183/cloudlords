import express from 'express';
import env from 'dotenv';
import cloudService from './services/cloudService';
import cors from 'cors';



env.config();
const app = express()
app.use(cors());
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
	res.send('Hello World!')
})
app.use("/clouds", cloudService);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
