// Ruta Vital - 02: índices.
// Uso: mongosh "<MONGODB_URI>" scripts/02-indices.js
// Los índices únicos llevan el mismo nombre que crea Spring Data (@Indexed), para que
// el backend no choque con ellos al arrancar.

db.usuarios.createIndex({ nombreUsuario: 1 }, { name: "nombreUsuario", unique: true });

db.ambulancias.createIndex({ placa: 1 }, { name: "placa", unique: true });
db.ambulancias.createIndex({ codigoInterno: 1 }, { name: "codigoInterno", unique: true });
// Búsqueda de ambulancias disponibles por tipo (RF-06, RF-11)
db.ambulancias.createIndex({ activa: 1, estado: 1, tipo: 1 }, { name: "disponibles_por_tipo" });

// Rutas activas entre dos lugares (RF-10, RF-12)
db.rutas.createIndex({ activa: 1, "origen.nombre": 1, "destino.nombre": 1 }, { name: "rutas_por_trayecto" });

// Historial (RF-17)
db.emergencias.createIndex({ fechaHora: -1 }, { name: "por_fecha" });
db.emergencias.createIndex({ estado: 1 }, { name: "por_estado" });
db.emergencias.createIndex({ ambulanciaId: 1 }, { name: "por_ambulancia" });

print("Índices creados.");
