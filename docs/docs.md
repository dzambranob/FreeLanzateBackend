## Manipulando BD con Sequelize

### Modificar modelos y realizar cambios en las tablas

Se pueden realizar modificaciones a los modelos existentes, sin embargo para ver los cambios realizados en la base de datos se requiere correr app.js con el argumento ```updateDatabase```

```node app.js updateDatabase```

**Importante**: Esto borrará todas las filas presentes en la base de datos.

### Insertar datos “demo” a la base de datos.

Se pueden generar filas que se agregan a la base de datos de forma automática. Estas filas se definen en la carpeta seeders. Una vez creado un seed, se pueden agregar a la base de datos por medio del comando

```npx sequelize-cli db:seed:all```


## Tests

## Testing con Mocha

Para hacer testing con mocha es recomendable instalarlo de forma global

```npm install --global mocha```

Luego para correr losts tests solo hay que correr

```node app.js``` (En una terminal)
```npm test en /backend``` (en otra)
