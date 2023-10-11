import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'; // Importa el módulo 'path' de Node.js
import cors from'cors';



import swaggerUi from 'swagger-ui-express';

import user from './routes/user'
import auth from './routes/auth'
import licenceUser from './routes/licenceUser'
import licenceT from './routes/licenceType'
import licence from './routes/licence'
import cronosLicence from './routes/cronosLicence'



const app = express();
app.use(bodyParser.json());
app.use(cors()); // Habilita CORS para todas las rutas


// app.get('/', (req, res) => {
//   res.send('Hola!!, este es mi proyecto Node.js con TypeScript y Express.');
// });

app.use('/user', user)
app.use('/auth', auth)
app.use('/licence', licence)
app.use('/licenceUser', licenceUser)
app.use('/licenceType/', licenceT)

app.use('/cronosLicence',cronosLicence)





export default app;