import express from 'express';
import bodyParser from 'body-parser';

import user from './routes/user'
import auth from './routes/auth'

const app = express();
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hola!!, este es mi proyecto Node.js con TypeScript y Express.');
// });

app.use('/user', user)
app.use('/auth', auth)


export default app;