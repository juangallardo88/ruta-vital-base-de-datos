// Ruta Vital - 03: datos simulados para pruebas y demostración.
// Uso: mongosh "<MONGODB_URI>" scripts/03-datos-simulados.js
// ATENCIÓN: borra y vuelve a cargar usuarios, ambulancias, rutas y emergencias.
//
// Coordenadas aproximadas de lugares reales de San Juan de Pasto (Nariño). El tiempo base de cada ruta se calculó
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
      "nombre": "Base Norte - Torobajo",
      "latitud": 1.23,
      "longitud": -77.288
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
      "nombre": "Base Norte - Torobajo",
      "latitud": 1.23,
      "longitud": -77.288
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
      "nombre": "Base Centro - Las Cuadras",
      "latitud": 1.2153,
      "longitud": -77.2828
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
      "nombre": "Base Centro - Las Cuadras",
      "latitud": 1.2153,
      "longitud": -77.2828
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
      "nombre": "Base Sur - Avenida Panamericana",
      "latitud": 1.201,
      "longitud": -77.284
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
      "nombre": "Base Sur - Avenida Panamericana",
      "latitud": 1.201,
      "longitud": -77.284
    },
    "estado": "FUERA_DE_SERVICIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ambulancia"
  }
]);

db.rutas.insertMany([
  {
    "_id": id("662000000000000000000001"),
    "nombre": "Avenida Panamericana - Avenida Chile",
    "origen": {
      "nombre": "Universidad de Nariño - Torobajo",
      "latitud": 1.2342,
      "longitud": -77.2853
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 4.0,
    "tiempoBaseMin": 12.0,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000002"),
    "nombre": "Avenida Champagnat - Calle 22",
    "origen": {
      "nombre": "Universidad de Nariño - Torobajo",
      "latitud": 1.2342,
      "longitud": -77.2853
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 4.2,
    "tiempoBaseMin": 11.7,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000003"),
    "nombre": "Avenida de los Estudiantes",
    "origen": {
      "nombre": "Universidad de Nariño - Torobajo",
      "latitud": 1.2342,
      "longitud": -77.2853
    },
    "destino": {
      "nombre": "Hospital Infantil Los Ángeles",
      "latitud": 1.2163,
      "longitud": -77.2873
    },
    "distanciaKm": 2.7,
    "tiempoBaseMin": 8.8,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000004"),
    "nombre": "Avenida Panamericana - Carrera 32",
    "origen": {
      "nombre": "Universidad de Nariño - Torobajo",
      "latitud": 1.2342,
      "longitud": -77.2853
    },
    "destino": {
      "nombre": "Hospital Infantil Los Ángeles",
      "latitud": 1.2163,
      "longitud": -77.2873
    },
    "distanciaKm": 3.0,
    "tiempoBaseMin": 8.9,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000005"),
    "nombre": "Calle 16 - Carrera 43",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 1.2073,
      "longitud": -77.29
    },
    "destino": {
      "nombre": "Fundación Hospital San Pedro",
      "latitud": 1.2113,
      "longitud": -77.2972
    },
    "distanciaKm": 1.3,
    "tiempoBaseMin": 5.5,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000006"),
    "nombre": "Avenida Panamericana - Calle 16",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 1.2073,
      "longitud": -77.29
    },
    "destino": {
      "nombre": "Fundación Hospital San Pedro",
      "latitud": 1.2113,
      "longitud": -77.2972
    },
    "distanciaKm": 1.4,
    "tiempoBaseMin": 5.2,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000007"),
    "nombre": "Avenida Panamericana - Avenida Boyacá",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 1.2073,
      "longitud": -77.29
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 4.0,
    "tiempoBaseMin": 11.2,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000008"),
    "nombre": "Calle 12 - Avenida Santander - Calle 22",
    "origen": {
      "nombre": "Centro Comercial Unicentro",
      "latitud": 1.2073,
      "longitud": -77.29
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 4.2,
    "tiempoBaseMin": 12.5,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000009"),
    "nombre": "Avenida Julián Bucheli - Avenida Chile",
    "origen": {
      "nombre": "Estadio Departamental Libertad",
      "latitud": 1.198,
      "longitud": -77.2776
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 3.5,
    "tiempoBaseMin": 10.8,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000a"),
    "nombre": "Avenida Colombia - Calle 22",
    "origen": {
      "nombre": "Estadio Departamental Libertad",
      "latitud": 1.198,
      "longitud": -77.2776
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 3.7,
    "tiempoBaseMin": 10.5,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000b"),
    "nombre": "Avenida Mijitayo - Carrera 43",
    "origen": {
      "nombre": "Estadio Departamental Libertad",
      "latitud": 1.198,
      "longitud": -77.2776
    },
    "destino": {
      "nombre": "Fundación Hospital San Pedro",
      "latitud": 1.2113,
      "longitud": -77.2972
    },
    "distanciaKm": 3.8,
    "tiempoBaseMin": 11.5,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000c"),
    "nombre": "Calle 19 - Avenida Boyacá",
    "origen": {
      "nombre": "Plaza de Nariño",
      "latitud": 1.214,
      "longitud": -77.281
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 2.4,
    "tiempoBaseMin": 9.2,
    "nivelTrafico": "ALTO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000d"),
    "nombre": "Calle 18 - Carrera 7",
    "origen": {
      "nombre": "Plaza de Nariño",
      "latitud": 1.214,
      "longitud": -77.281
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 2.3,
    "tiempoBaseMin": 8.9,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000e"),
    "nombre": "Calle 20 - Avenida de los Estudiantes",
    "origen": {
      "nombre": "Plaza de Nariño",
      "latitud": 1.214,
      "longitud": -77.281
    },
    "destino": {
      "nombre": "Hospital Infantil Los Ángeles",
      "latitud": 1.2163,
      "longitud": -77.2873
    },
    "distanciaKm": 1.1,
    "tiempoBaseMin": 5.3,
    "nivelTrafico": "MEDIO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("66200000000000000000000f"),
    "nombre": "Avenida Idema - Calle 22",
    "origen": {
      "nombre": "Terminal de Transportes de Pasto",
      "latitud": 1.2113,
      "longitud": -77.263
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "distanciaKm": 1.0,
    "tiempoBaseMin": 4.5,
    "nivelTrafico": "BAJO",
    "activa": true,
    "_class": "co.edu.ucc.rutavital.modelo.Ruta"
  },
  {
    "_id": id("662000000000000000000010"),
    "nombre": "Calle 16 - Avenida Panamericana",
    "origen": {
      "nombre": "Terminal de Transportes de Pasto",
      "latitud": 1.2113,
      "longitud": -77.263
    },
    "destino": {
      "nombre": "Fundación Hospital San Pedro",
      "latitud": 1.2113,
      "longitud": -77.2972
    },
    "distanciaKm": 5.3,
    "tiempoBaseMin": 15.2,
    "nivelTrafico": "ALTO",
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
      "nombre": "Estadio Departamental Libertad",
      "latitud": 1.198,
      "longitud": -77.2776
    },
    "destino": {
      "nombre": "Fundación Hospital San Pedro",
      "latitud": 1.2113,
      "longitud": -77.2972
    },
    "fechaHora": fecha("2026-11-10T08:15:00-05:00"),
    "estado": "FINALIZADA",
    "operadorId": "660000000000000000000002",
    "ambulanciaId": "661000000000000000000003",
    "rutaId": "66200000000000000000000b",
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
      "latitud": 1.2073,
      "longitud": -77.29
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "fechaHora": fecha("2026-11-12T14:40:00-05:00"),
    "estado": "FINALIZADA",
    "operadorId": "660000000000000000000003",
    "ambulanciaId": "661000000000000000000004",
    "rutaId": "662000000000000000000008",
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
      "nombre": "Universidad de Nariño - Torobajo",
      "latitud": 1.2342,
      "longitud": -77.2853
    },
    "destino": {
      "nombre": "Hospital Infantil Los Ángeles",
      "latitud": 1.2163,
      "longitud": -77.2873
    },
    "fechaHora": fecha("2026-11-14T10:05:00-05:00"),
    "estado": "CANCELADA",
    "operadorId": "660000000000000000000002",
    "ambulanciaId": "661000000000000000000001",
    "rutaId": "662000000000000000000003",
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
      "nombre": "Terminal de Transportes de Pasto",
      "latitud": 1.2113,
      "longitud": -77.263
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
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
      "nombre": "Plaza de Nariño",
      "latitud": 1.214,
      "longitud": -77.281
    },
    "destino": {
      "nombre": "Hospital Infantil Los Ángeles",
      "latitud": 1.2163,
      "longitud": -77.2873
    },
    "fechaHora": fecha("2026-11-18T07:50:00-05:00"),
    "estado": "FINALIZADA",
    "operadorId": "660000000000000000000002",
    "ambulanciaId": "661000000000000000000005",
    "rutaId": "66200000000000000000000e",
    "resultado": "Paciente atendido en urgencias pediátricas",
    "tiempoRecorridoMin": 6.9,
    "avances": [],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  },
  {
    "_id": id("663000000000000000000006"),
    "descripcion": "Herida por arma cortopunzante",
    "prioridad": "ALTA",
    "tipoRequerido": "MEDICALIZADA",
    "origen": {
      "nombre": "Plaza de Nariño",
      "latitud": 1.214,
      "longitud": -77.281
    },
    "destino": {
      "nombre": "Hospital Universitario Departamental de Nariño",
      "latitud": 1.217,
      "longitud": -77.266
    },
    "fechaHora": fecha("2026-11-19T06:30:00-05:00"),
    "estado": "REGISTRADA",
    "operadorId": "660000000000000000000003",
    "avances": [],
    "_class": "co.edu.ucc.rutavital.modelo.Emergencia"
  }
]);

print(`Cargados: ${db.usuarios.countDocuments()} usuarios, ${db.ambulancias.countDocuments()} ambulancias, ${db.rutas.countDocuments()} rutas, ${db.emergencias.countDocuments()} emergencias.`);
