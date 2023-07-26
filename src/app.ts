import express from 'express';
import bodyParser from 'body-parser';

import user from './routes/user'
const app = express();
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hola!!, este es mi proyecto Node.js con TypeScript y Express.');
// });

app.use('/user', user)


export default app;