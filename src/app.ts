import express from 'express';
import bodyParser from 'body-parser';


import swaggerUi from 'swagger-ui-express';

import user from './routes/user'
import auth from './routes/auth'
import licenceUser from './routes/licenceUser'
import licenceT from './routes/licenceType'


const app = express();
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hola!!, este es mi proyecto Node.js con TypeScript y Express.');
// });

app.use('/user', user)
app.use('/auth', auth)
app.use('/licenceUser', licenceUser)
app.use('/licenceType/', licenceT)





export default app;