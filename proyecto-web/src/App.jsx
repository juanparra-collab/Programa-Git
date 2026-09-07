import "./App.css";
import Navbar from "./components/Navbar";
import Autenticacion from "./components/Autenticacion";
import Cliente from "./components/Cliente";
import Reserva from "./components/Reserva";
import Pago from "./components/Pago";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="inicio">
          <h1>BONONO</h1>
          <p>Gestión de clientes, reservas y pagos</p>
        </section>

        <Autenticacion />

        <Cliente />
        <Reserva />
        <Pago />
      </main>

      <Footer />
    </div>
  );
}

export default App;