Sistema de Licencias para Usuarios
Este es el repositorio del Sistema de Licencias para Usuarios, un proyecto que permite gestionar las licencias de usuarios y sus correspondientes módulos.

Características
Registro de usuarios y sus datos personales.
Creación, edición y eliminación de licencias para los usuarios.
Asignación de módulos a las licencias de los usuarios.
Consulta de licencias activas y vencidas.
Administración de los datos de los módulos disponibles.
Requisitos
Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

Node.js (v18.15.0)
PostgreSQL (versión 12.8)
Sequelize CLI (opcional, para ejecutar migraciones y generar modelos)
Instalación
Sigue estos pasos para instalar y configurar el proyecto:

Clona el repositorio desde GitHub:
bash
Copy code
git clone https://github.com/nicoContigliani/licentia.git
Ve al directorio del proyecto:
bash
Copy code
cd sistema-licencias
Instala las dependencias:
Copy code
npm install
Configuración de la base de datos:

Crea una base de datos PostgreSQL para el proyecto.
Configura las credenciales de la base de datos en el archivo config/database.js.
Ejecuta las migraciones (opcional, si utilizas Sequelize CLI):

Copy code
npx sequelize-cli db:migrate
Inicia el servidor:
sql
Copy code
npm start
Uso
Una vez que el servidor esté en ejecución, puedes acceder a la aplicación desde el navegador en http://localhost:3000.

La aplicación proporciona una interfaz de usuario para realizar las siguientes acciones:

Registro de nuevos usuarios.
Creación y gestión de licencias para los usuarios.
Asignación de módulos a las licencias de los usuarios.
Consulta de licencias activas y vencidas.
Administración de los datos de los módulos disponibles.

igt
Contacto
Si tienes preguntas o comentarios sobre el proyecto, puedes contactarme a través de mi dirección de correo electrónico: nico.contigliani@gmail.com.

¡Gracias por tu interés en el Sistema de Licencias para Usuarios! Espero que sea útil y que puedas contribuir al proyecto para mejorarlo aún más. Si tienes alguna pregunta o problema, no dudes en contactarme. ¡Disfruta trabajando en el proyecto!