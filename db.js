const { Pool, Client } = require("pg");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

// Configuración SSL si el certificado existe
let sslConfig = {};
const certPath = "src/cert/ca.crt";

if (fs.existsSync(certPath)) {
    try {
        sslConfig = {
            rejectUnauthorized: true,
            ca: fs.readFileSync(certPath).toString(),
        };
    } catch (error) {
        console.error("Error al leer el certificado SSL:", error);
    }
} else {
    console.warn(`Advertencia: No se encontró el certificado SSL en ${certPath}`);
}

// Configuración del pool de conexiones
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: sslConfig,
});

module.exports = pool;

// Conexión a la base de datos con async/await
(async () => {
    try {
        const client = await pool.connect();
        console.log("✅ Conexión exitosa a la base de datos");
        client.release();
    } catch (err) {
        console.error("Error al conectar con la base de datos:", err.message);
    }
})();
