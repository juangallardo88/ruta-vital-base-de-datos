// Ruta Vital - 01: colecciones con validación de esquema.
// Uso: mongosh "<MONGODB_URI>" scripts/01-colecciones.js
// Los nombres de campos coinciden con los documentos del backend (paquete modelo).

const ubicacion = {
  bsonType: "object",
  required: ["nombre", "latitud", "longitud"],
  properties: {
    nombre: { bsonType: "string", minLength: 1 },
    latitud: { bsonType: "number", minimum: -90, maximum: 90 },
    longitud: { bsonType: "number", minimum: -180, maximum: 180 }
  }
};

const esquemas = {
  usuarios: {
    bsonType: "object",
    required: ["nombreUsuario", "contrasena", "_class"],
    properties: {
      nombreUsuario: { bsonType: "string", minLength: 3 },
      contrasena: { bsonType: "string", pattern: "^\\$2[aby]\\$", description: "Hash BCrypt" },
      _class: { enum: ["Administrador", "Operador"] }
    }
  },
  ambulancias: {
    bsonType: "object",
    required: ["placa", "codigoInterno", "tipo", "ubicacion", "estado", "activa"],
    properties: {
      placa: { bsonType: "string", pattern: "^[A-Z]{3}[0-9]{3}$" },
      codigoInterno: { bsonType: "string", minLength: 1 },
      tipo: { enum: ["BASICA", "MEDICALIZADA"] },
      ubicacion: ubicacion,
      estado: { enum: ["DISPONIBLE", "EN_SERVICIO", "FUERA_DE_SERVICIO"] },
      activa: { bsonType: "bool" }
    }
  },
  rutas: {
    bsonType: "object",
    required: ["nombre", "origen", "destino", "distanciaKm", "tiempoBaseMin", "nivelTrafico", "activa"],
    properties: {
      nombre: { bsonType: "string", minLength: 1 },
      origen: ubicacion,
      destino: ubicacion,
      distanciaKm: { bsonType: "number", minimum: 0, exclusiveMinimum: true },
      tiempoBaseMin: { bsonType: "number", minimum: 0, exclusiveMinimum: true },
      nivelTrafico: { enum: ["BAJO", "MEDIO", "ALTO"] },
      activa: { bsonType: "bool" }
    }
  },
  emergencias: {
    bsonType: "object",
    required: ["descripcion", "prioridad", "tipoRequerido", "origen", "destino", "fechaHora", "estado", "operadorId"],
    properties: {
      descripcion: { bsonType: "string", minLength: 1 },
      prioridad: { enum: ["ALTA", "MEDIA", "BAJA"] },
      tipoRequerido: { enum: ["BASICA", "MEDICALIZADA"] },
      origen: ubicacion,
      destino: ubicacion,
      fechaHora: { bsonType: "date" },
      estado: { enum: ["REGISTRADA", "EN_CURSO", "FINALIZADA", "CANCELADA"] },
      tiempoRecorridoMin: { bsonType: ["number", "null"] },
      resultado: { bsonType: ["string", "null"] },
      operadorId: { bsonType: "string" },
      ambulanciaId: { bsonType: ["string", "null"] },
      rutaId: { bsonType: ["string", "null"] },
      avances: {
        bsonType: "array",
        items: {
          bsonType: "object",
          required: ["tipo", "fechaHora"],
          properties: {
            tipo: { enum: ["LLEGADA_LUGAR", "LLEGADA_CENTRO"] },
            fechaHora: { bsonType: "date" }
          }
        }
      }
    }
  }
};

const existentes = db.getCollectionNames();
for (const [nombre, esquema] of Object.entries(esquemas)) {
  const opciones = { validator: { $jsonSchema: esquema }, validationLevel: "strict", validationAction: "error" };
  if (existentes.includes(nombre)) {
    try {
      db.runCommand({ collMod: nombre, ...opciones });
      print(`Validación actualizada: ${nombre}`);
    } catch (e) {
      // collMod requiere el rol dbAdmin; el usuario de la aplicación solo tiene readWrite.
      print(`Aviso: no se pudo actualizar la validación de ${nombre} (${e.codeName ?? e.message}). Usa un usuario con rol dbAdmin.`);
    }
  } else {
    db.createCollection(nombre, opciones);
    print(`Colección creada: ${nombre}`);
  }
}
