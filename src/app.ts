import express from 'express';
import user from './routes/user'
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hola!!, este es mi proyecto Node.js con TypeScript y Express.');
// });

app.use('/user', user)


export default app;