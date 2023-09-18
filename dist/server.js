"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io"); // Importa solo la clase Server desde socket.io
const server = http_1.default.createServer(app_1.default);
// Configura Socket.io para trabajar con el servidor HTTP
const io = new socket_io_1.Server(server); // Crea una instancia de la clase Server
// Maneja conexiones de Socket.io
io.on('connection', (socket) => {
    console.log('Usuario conectado a Socket.io');
    // Aquí puedes definir lógica para manejar eventos de Socket.io
    socket.on('mensaje', (mensaje) => {
        console.log('Mensaje recibido:', mensaje);
        // Puedes enviar mensajes de vuelta a través de socket.emit() o io.emit()
        // Ejemplo: socket.emit('respuesta', 'Mensaje recibido con éxito');
    });
    socket.on('disconnect', () => {
        console.log('Usuario desconectado de Socket.io');
    });
});
io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});
const port = 3002;
server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
