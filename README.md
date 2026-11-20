# Ruta Vital Cali — Base de datos

Scripts de MongoDB (mongosh) para crear las colecciones, sus validaciones, los índices y los datos simulados que usa el backend.

## Colecciones

| Colección | Contenido | Relaciones |
|---|---|---|
| `usuarios` | Administradores y operadores en una sola colección (`_class`: `Administrador` u `Operador`). Contraseña con BCrypt. | — |
| `ambulancias` | Placa y código interno únicos, tipo, ubicación embebida, estado y bandera `activa` (baja lógica). | — |
| `rutas` | Origen y destino embebidos, distancia, tiempo base, nivel de tráfico, `activa`. | — |
| `emergencias` | Datos del incidente, estado, avances embebidos (`LLEGADA_LUGAR`, `LLEGADA_CENTRO`), resultado y tiempo de recorrido. | `operadorId`, `ambulanciaId`, `rutaId` (referencias por id) |

## Scripts

Ejecútalos en orden con [mongosh](https://www.mongodb.com/docs/mongodb-shell/):

```bash
mongosh "mongodb+srv://<usuario>:<clave>@<cluster>/rutavital" scripts/01-colecciones.js
mongosh "mongodb+srv://<usuario>:<clave>@<cluster>/rutavital" scripts/02-indices.js
mongosh "mongodb+srv://<usuario>:<clave>@<cluster>/rutavital" scripts/03-datos-simulados.js
```

1. `01-colecciones.js` crea las colecciones con validación `$jsonSchema` (o la actualiza si ya existen).
2. `02-indices.js` crea los índices únicos (con el mismo nombre que crea Spring Data, para no chocar con el backend) y los de consulta.
3. `03-datos-simulados.js` **borra y recarga** los datos: 3 usuarios, 6 ambulancias, 16 rutas entre lugares de Cali y 6 emergencias de ejemplo para el historial.

## Usuarios iniciales

| Usuario | Contraseña | Rol |
|---|---|---|
| `admin` | `Admin2026*` | Administrador |
| `operador1` | `Operador2026*` | Operador |
| `operador2` | `Operador2026*` | Operador |

Cambia estas contraseñas antes de usar la base en producción.

## MongoDB Atlas

1. Crea un clúster gratuito (M0) y una base llamada `rutavital`.
2. En *Database Access* crea un usuario con permisos de lectura y escritura.
3. En *Network Access* permite las IP de Render (o `0.0.0.0/0` mientras pruebas).
4. Copia la cadena de conexión y úsala en los scripts y en la variable `MONGODB_URI` del backend.
