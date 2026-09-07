import { useState } from "react";

function Autenticacion() {
  // Estados para almacenar los datos del formulario
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Estado para guardar el usuario registrado
  const [usuarioRegistrado, setUsuarioRegistrado] = useState("");
  const [contrasenaRegistrada, setContrasenaRegistrada] = useState("");

  // Función para registrar un nuevo usuario
  const registrarUsuario = (e) => {
    e.preventDefault();

    if (usuario === "" || contrasena === "") {
      setMensaje("Por favor, complete todos los campos");
      return;
    }

    setUsuarioRegistrado(usuario);
    setContrasenaRegistrada(contrasena);
    setMensaje("Usuario registrado correctamente");
  };

  // Función para verificar el inicio de sesión
  const iniciarSesion = (e) => {
    e.preventDefault();

    if (
      usuario === usuarioRegistrado &&
      contrasena === contrasenaRegistrada
    ) {
      setMensaje("Autenticación satisfactoria");
    } else {
      setMensaje("Error en la autenticación");
    }
  };

  return (
    <section className="autenticacion">
      <h2>Registro e inicio de sesión</h2>

      <form>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <button type="button" onClick={registrarUsuario}>
          Registrarse
        </button>

        <button type="button" onClick={iniciarSesion}>
          Iniciar sesión
        </button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </section>
  );
}

export default Autenticacion;