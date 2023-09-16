import app from './app';

import http from 'http';
import { Server, Socket } from 'socket.io';






const port = 3002;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});