const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const sequelize = require('./database');
const Farmacia = require('./models/Farmacia');
const Usuario = require('./models/Usuario');

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:4200' // Permite solicitudes desde tu frontend Angular
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// Ruta para verificar el código de farmacia
app.get('/verificar-codigo/:codigo', async (req, res) => {
    const { codigo } = req.params;
    console.log(`Verificando código: ${codigo}`);
    try {
        const farmacia = await Farmacia.findOne({ where: { codigo_farmacia: codigo } });
        if (farmacia) {
            console.log(`Farmacia encontrada: ${farmacia.nombre_farmacia}`);
            res.json({ success: true, nombre: farmacia.nombre_farmacia });
        } else {
            console.log('Código de farmacia no válido');
            res.json({ success: false, message: 'Código de farmacia no válido' });
        }
    } catch (error) {
        console.error('Error del servidor:', error);
        res.status(500).json({ success: false, message: 'Error del servidor' });
    }
});

app.post('/login', async (req, res) => {
    const { usuario_us, password_us, codigo_farmacia } = req.body;
    
    if (!usuario_us || !password_us || !codigo_farmacia) {
        return res.status(400).json({ success: false, message: 'Todos los campos son requeridos' });
    }

    try {
        const usuario = await Usuario.findOne({ 
            where: { 
                usuario_us: usuario_us,
                codigo_farmacia: codigo_farmacia
            } 
        });

        if (!usuario) {
            return res.status(401).json({ success: false, message: 'Usuario o código de farmacia incorrectos' });
        }

        // Aquí deberías usar una comparación segura de contraseñas, como bcrypt
        if (usuario.password_us !== password_us) {
            return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
        }

        res.json({ 
            success: true, 
            message: 'Inicio de sesión exitoso',
            usuario: {
                id: usuario.id_usuario,
                nombre: usuario.nombre_us,
                apellido: usuario.apellido_us,
                email: usuario.email_us,
                tipo: usuario.tipous
            }
        });
    } catch (error) {
        console.error('Error del servidor:', error);
        res.status(500).json({ success: false, message: 'Error del servidor', error: error.message });
    }
});

sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error sincronizando la base de datos:', error);
});