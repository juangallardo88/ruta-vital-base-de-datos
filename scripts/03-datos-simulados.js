// Ruta Vital Cali - 03: datos simulados para pruebas y demostración.
// Uso: mongosh "<MONGODB_URI>" scripts/03-datos-simulados.js
// ATENCIÓN: borra y vuelve a cargar usuarios, ambulancias, rutas y emergencias.
//
// Coordenadas aproximadas de lugares reales de Cali. El tiempo base de cada ruta se calculó
// con la distancia en línea recta, un factor de recorrido por las vías indicadas, una velocidad
// promedio y 2 minutos de salida e ingreso. El backend lo multiplica por el factor de tráfico.
//
// Usuarios iniciales (contraseñas guardadas con BCrypt; cámbialas en producción):
//   admin     / Admin2026*      (Administrador)
//   operador1 / Operador2026*   (Operador)
//   operador2 / Operador2026*   (Operador)

const id = (h) => ObjectId(h);
const fecha = (iso) => new Date(iso);

db.usuarios.deleteMany({});
db.ambulancias.deleteMany({});
db.rutas.deleteMany({});
db.emergencias.deleteMany({});

db.usuarios.insertMany([
  {
    "_id": id("660000000000000000000001"),
    "nombreUsuario": "admin",
    "contrasena": "$2a$10$NHXE6LKOldvZfKVONe8ZvueSGfF85beD4ytk4obfyE8zRAzOedto.",
    "_class": "Administrador"
  },
  {
    "_id": id("660000000000000000000002"),
    "nombreUsuario": "operador1",
    "contrasena": "$2a$10$zF/32tWz4UG/mwOJcy6Qy.7E7JcA.2NbQu1wdZVg5vnwxAWb0Zcru",
    "_class": "Operador"
  },
  {
    "_id": id("660000000000000000000003"),
    "nombreUsuario": "operador2",
    "contrasena": "$2a$10$zF/32tWz4UG/mwOJcy6Qy.7E7JcA.2NbQu1wdZVg5vnwxAWb0Zcru",
    "_class": "Operador"
  }
]);

db.ambulancias.insertMany([
  {
    "_id": id("661000000000000000000001"),
    "placa": "KLM101",
    "codigoInterno": "AMB-01",
    "tipo": "BASICA",
    "ubicacion": {
      "nombre": "Base Norte - La Flora",
      "latitud": 3.487,
      "longitud": -76.525
    },
    "estado": "DISPONIBLE",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ambulancia"
  },
  {
    "_id": id("661000000000000000000002"),
    "placa": "KLM102",
    "codigoInterno": "AMB-02",
    "tipo": "MEDICALIZADA",
    "ubicacion": {
      "nombre": "Base Norte - La Flora",
      "latitud": 3.487,
      "longitud": -76.525
    },
    "estado": "DISPONIBLE",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ambulancia"
  },
  {
    "_id": id("661000000000000000000003"),
    "placa": "VCA203",
    "codigoInterno": "AMB-03",
    "tipo": "BASICA",
    "ubicacion": {
      "nombre": "Base Centro - San Fernando",
      "latitud": 3.438,
      "longitud": -76.539
    },
    "estado": "DISPONIBLE",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ambulancia"
  },
  {
    "_id": id("661000000000000000000004"),
    "placa": "VCA204",
    "codigoInterno": "AMB-04",
    "tipo": "MEDICALIZADA",
    "ubicacion": {
      "nombre": "Base Centro - San Fernando",
      "latitud": 3.438,
      "longitud": -76.539
    },
    "estado": "DISPONIBLE",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ambulancia"
  },
  {
    "_id": id("661000000000000000000005"),
    "placa": "SUR305",
    "codigoInterno": "AMB-05",
    "tipo": "BASICA",
    "ubicacion": {
      "nombre": "Base Sur - Ciudad Jardín",
      "latitud": 3.362,
      "longitud": -76.534
    },
    "estado": "DISPONIBLE",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ambulancia"
  },
  {
    "_id": id("661000000000000000000006"),
    "placa": "SUR306",
    "codigoInterno": "AMB-06",
    "tipo": "MEDICALIZADA",
    "ubicacion": {
      "nombre": "Base Sur - Ciudad Jardín",
      "latitud": 3.362,
      "longitud": -76.534
    },
    "estado": "FUERA_DE_SERVICIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ambulancia"
  }
]);

db.rutas.insertMany([
  {
    "_id": id("662000000000000000000001"),
    "nombre": "Autopista Norte - Calle 5",
    "origen": {
      "nombre": "Centro Comercial Chipichape",
      "latitud": 3.4763,
      "longitud": -76.5279
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "distanciaKm": 7.3,
    "tiempoBaseMin": 15.7,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000002"),
    "nombre": "Avenida 2N - Carrera 15 - Calle 5",
    "origen": {
      "nombre": "Centro Comercial Chipichape",
      "latitud": 3.4763,
      "longitud": -76.5279
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "distanciaKm": 7.9,
    "tiempoBaseMin": 17.8,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000003"),
    "nombre": "Avenida 6N - Calle 15",
    "origen": {
      "nombre": "Centro Comercial Chipichape",
      "latitud": 3.4763,
      "longitud": -76.5279
    },
    "destino": {
      "nombre": "Clínica de Occidente",
      "latitud": 3.456,
      "longitud": -76.5313
    },
    "distanciaKm": 3.0,
    "tiempoBaseMin": 8.9,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000004"),
    "nombre": "Avenida 3N - Calle 21",
    "origen": {
      "nombre": "Centro Comercial Chipichape",
      "latitud": 3.4763,
      "longitud": -76.5279
    },
    "destino": {
      "nombre": "Clínica de Occidente",
      "latitud": 3.456,
      "longitud": -76.5313
    },
    "distanciaKm": 3.3,
    "tiempoBaseMin": 8.2,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000005"),
    "nombre": "Autopista Sur - Carrera 100",
    "origen": {
      "nombre": "Terminal de Transportes de Cali",
      "latitud": 3.4628,
      "longitud": -76.5245
    },
    "destino": {
      "nombre": "Fundación Valle del Lili",
      "latitud": 3.3724,
      "longitud": -76.5267
    },
    "distanciaKm": 13.1,
    "tiempoBaseMin": 21.7,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000006"),
    "nombre": "Avenida Pasoancho - Carrera 98",
    "origen": {
      "nombre": "Terminal de Transportes de Cali",
      "latitud": 3.4628,
      "longitud": -76.5245
    },
    "destino": {
      "nombre": "Fundación Valle del Lili",
      "latitud": 3.3724,
      "longitud": -76.5267
    },
    "distanciaKm": 14.1,
    "tiempoBaseMin": 24.3,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000007"),
    "nombre": "Calle 25 - Avenida 2N",
    "origen": {
      "nombre": "Terminal de Transportes de Cali",
      "latitud": 3.4628,
      "longitud": -76.5245
    },
    "destino": {
      "nombre": "Clínica de Occidente",
      "latitud": 3.456,
      "longitud": -76.5313
    },
    "distanciaKm": 1.6,
    "tiempoBaseMin": 6.0,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000008"),
    "nombre": "Calle 5 - Carrera 39",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 3.3735,
      "longitud": -76.539
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "distanciaKm": 8.3,
    "tiempoBaseMin": 17.6,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000009"),
    "nombre": "Avenida Pasoancho - Carrera 39",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 3.3735,
      "longitud": -76.539
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "distanciaKm": 8.9,
    "tiempoBaseMin": 17.7,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000a"),
    "nombre": "Carrera 98 - Calle 16",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 3.3735,
      "longitud": -76.539
    },
    "destino": {
      "nombre": "Fundación Valle del Lili",
      "latitud": 3.3724,
      "longitud": -76.5267
    },
    "distanciaKm": 2.2,
    "tiempoBaseMin": 6.7,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000b"),
    "nombre": "Calle 5 - Autopista Sur",
    "origen": {
      "nombre": "Estadio Pascual Guerrero",
      "latitud": 3.4301,
      "longitud": -76.5409
    },
    "destino": {
      "nombre": "Fundación Valle del Lili",
      "latitud": 3.3724,
      "longitud": -76.5267
    },
    "distanciaKm": 8.6,
    "tiempoBaseMin": 16.3,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000c"),
    "nombre": "Avenida Roosevelt - Carrera 100",
    "origen": {
      "nombre": "Estadio Pascual Guerrero",
      "latitud": 3.4301,
      "longitud": -76.5409
    },
    "destino": {
      "nombre": "Fundación Valle del Lili",
      "latitud": 3.3724,
      "longitud": -76.5267
    },
    "distanciaKm": 8.9,
    "tiempoBaseMin": 16.1,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000d"),
    "nombre": "Calle 5 - Carrera 15",
    "origen": {
      "nombre": "Plaza de Caicedo",
      "latitud": 3.4516,
      "longitud": -76.532
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "distanciaKm": 3.7,
    "tiempoBaseMin": 10.5,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000e"),
    "nombre": "Calle 9 - Carrera 39",
    "origen": {
      "nombre": "Plaza de Caicedo",
      "latitud": 3.4516,
      "longitud": -76.532
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "distanciaKm": 4.0,
    "tiempoBaseMin": 10.0,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000f"),
    "nombre": "Avenida Simón Bolívar - Calle 5",
    "origen": {
      "nombre": "Centro Comercial Jardín Plaza",
      "latitud": 3.369,
      "longitud": -76.5274
    },
    "destino": {
      "nombre": "Clínica Imbanaco",
      "latitud": 3.4262,
      "longitud": -76.5448
    },
    "distanciaKm": 9.0,
    "tiempoBaseMin": 17.0,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000010"),
    "nombre": "Carrera 34 - Calle 5",
    "origen": {
      "nombre": "Parque del Perro",
      "latitud": 3.438,
      "longitud": -76.542
    },
    "destino": {
      "nombre": "Clínica Imbanaco",
      "latitud": 3.4262,
      "longitud": -76.5448
    },
    "distanciaKm": 2.2,
    "tiempoBaseMin": 8.0,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  }
]);

db.emergencias.insertMany([
  {
    "_id": id("663000000000000000000001"),
    "descripcion": "Accidente de tránsito con motociclista herido",
    "prioridad": "ALTA",
    "tipoRequerido": "BASICA",
    "origen": {
      "nombre": "Estadio Pascual Guerrero",
      "latitud": 3.4301,
      "longitud": -76.5409
    },
    "destino": {
      "nombre": "Fundación Valle del Lili",
      "latitud": 3.3724,
      "longitud": -76.5267
    },
    "fechaHora": fecha("2026-11-10T08:15:00-05:00"),
    "estado": "FINALIZADA",
    "operadorId": "660000000000000000000002",
    "ambulanciaId": "661000000000000000000003",
    "rutaId": "66200000000000000000000c",
    "resultado": "Paciente trasladado y entregado en urgencias",
    "tiempoRecorridoMin": 26.0,
    "avances": [
      {
        "tipo": "LLEGADA_LUGAR",
        "fechaHora": fecha("2026-11-10T08:22:00-05:00")
      },
      {
        "tipo": "LLEGADA_CENTRO",
        "fechaHora": fecha("2026-11-10T08:41:00-05:00")
      }
    ],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  },
  {
    "_id": id("663000000000000000000002"),
    "descripcion": "Dolor torácico en paciente adulto mayor",
    "prioridad": "ALTA",
    "tipoRequerido": "MEDICALIZADA",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 3.3735,
      "longitud": -76.539
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "fechaHora": fecha("2026-11-12T14:40:00-05:00"),
    "estado": "FINALIZADA",
    "operadorId": "660000000000000000000003",
    "ambulanciaId": "661000000000000000000004",
    "rutaId": "662000000000000000000009",
    "resultado": "Paciente estabilizado y atendido por cardiología",
    "tiempoRecorridoMin": 32.0,
    "avances": [
      {
        "tipo": "LLEGADA_LUGAR",
        "fechaHora": fecha("2026-11-12T14:52:00-05:00")
      },
      {
        "tipo": "LLEGADA_CENTRO",
        "fechaHora": fecha("2026-11-12T15:12:00-05:00")
      }
    ],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  },
  {
    "_id": id("663000000000000000000003"),
    "descripcion": "Caída de persona en vía pública",
    "prioridad": "MEDIA",
    "tipoRequerido": "BASICA",
    "origen": {
      "nombre": "Centro Comercial Chipichape",
      "latitud": 3.4763,
      "longitud": -76.5279
    },
    "destino": {
      "nombre": "Clínica de Occidente",
      "latitud": 3.456,
      "longitud": -76.5313
    },
    "fechaHora": fecha("2026-11-14T10:05:00-05:00"),
    "estado": "CANCELADA",
    "operadorId": "660000000000000000000002",
    "ambulanciaId": "661000000000000000000001",
    "rutaId": "662000000000000000000004",
    "avances": [
      {
        "tipo": "LLEGADA_LUGAR",
        "fechaHora": fecha("2026-11-14T10:11:00-05:00")
      }
    ],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  },
  {
    "_id": id("663000000000000000000004"),
    "descripcion": "Reporte de persona inconsciente",
    "prioridad": "ALTA",
    "tipoRequerido": "BASICA",
    "origen": {
      "nombre": "Terminal de Transportes de Cali",
      "latitud": 3.4628,
      "longitud": -76.5245
    },
    "destino": {
      "nombre": "Fundación Valle del Lili",
      "latitud": 3.3724,
      "longitud": -76.5267
    },
    "fechaHora": fecha("2026-11-16T19:20:00-05:00"),
    "estado": "CANCELADA",
    "operadorId": "660000000000000000000003",
    "avances": [],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  },
  {
    "_id": id("663000000000000000000005"),
    "descripcion": "Crisis asmática en menor de edad",
    "prioridad": "MEDIA",
    "tipoRequerido": "BASICA",
    "origen": {
      "nombre": "Parque del Perro",
      "latitud": 3.438,
      "longitud": -76.542
    },
    "destino": {
      "nombre": "Clínica Imbanaco",
      "latitud": 3.4262,
      "longitud": -76.5448
    },
    "fechaHora": fecha("2026-11-18T07:50:00-05:00"),
    "estado": "FINALIZADA",
    "operadorId": "660000000000000000000002",
    "ambulanciaId": "661000000000000000000005",
    "rutaId": "662000000000000000000010",
    "resultado": "Paciente atendido en urgencias pediátricas",
    "tiempoRecorridoMin": 8.0,
    "avances": [],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  },
  {
    "_id": id("663000000000000000000006"),
    "descripcion": "Herida por arma cortopunzante",
    "prioridad": "ALTA",
    "tipoRequerido": "MEDICALIZADA",
    "origen": {
      "nombre": "Plaza de Caicedo",
      "latitud": 3.4516,
      "longitud": -76.532
    },
    "destino": {
      "nombre": "Hospital Universitario del Valle",
      "latitud": 3.4305,
      "longitud": -76.5452
    },
    "fechaHora": fecha("2026-11-19T06:30:00-05:00"),
    "estado": "REGISTRADA",
    "operadorId": "660000000000000000000003",
    "avances": [],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  }
]);

print(`Cargados: ${db.usuarios.countDocuments()} usuarios, ${db.ambulancias.countDocuments()} ambulancias, ${db.rutas.countDocuments()} rutas, ${db.emergencias.countDocuments()} emergencias.`);
