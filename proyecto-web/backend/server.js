import express from "express";
const app = express();

app.use(express.json());

// Endpoint de registro
app.post("/api/registro", (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({
            mensaje: "Usuario y contraseña son obligatorios"
        });
    }

    res.json({
        mensaje: "Usuario registrado correctamente",
        usuario: usuario
    });
});

// Endpoint de inicio de sesión
app.post("/api/login", (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({
            mensaje: "Usuario y contraseña son obligatorios"
        });
    }

    if (usuario === "bonono" && contrasena === "1234") {
        return res.json({
            mensaje: "Autenticación satisfactoria"
        });
    }

    res.status(401).json({
        mensaje: "Error en la autenticación"
    });
});

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
});