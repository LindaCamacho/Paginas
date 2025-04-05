const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/taskRoutes');
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.DB_PORT || 3000;
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);
app.listen(PORT, () => {
console.log(`Servidor activo en el puerto ${PORT}`);
});
