# appNotes
Código del proyecto "Aplicación Notas" utilizando NodeJS, el gestor de bases de datos utilizado fue MongoDB.

https://user-images.githubusercontent.com/94584093/227758415-7fdc3152-41ff-468a-b587-0479e598847e.mp4

Esta es una aplicación web básica para administrar notas a traves de un login utilizando tecnologías como NodeJS, Handlebars, JavaScript y MongoDB.

### Tecnologias utilizadas: 
- NodeJS
- Handlebars
- JavaScript
- Base de Datos NoSQL

![login](https://user-images.githubusercontent.com/94584093/227758615-d296c079-66f9-479c-b5b7-80344c3e3756.png)


### Instalación
```sh
git clone https://github.com/RaulGeronimo/appNotes.git
cd appNotes

npm i
```

### Ejecución
```sh
npm run dev
npm run start
```

> Necesitas tener la base de datos en el gestor de bases de datos, asi como tener las variables de entorno.

### Variables de Entorno

Para ejecutar esta aplicación, necesitas las siguientes variables de Entorno:

- `MONGODB_URI` Es la direccion de la Base de Datos
- `PORT` El puerto del servidor http

### Usuario Default

Cuando se inicia la aplicación, se creará un usuario administrador con las siguientes credenciales:

- Correo: `admin@gmail`
- Contraseña: `admin`

> Demo: https://appnotes-production.up.railway.app/
