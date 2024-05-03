import './App.css';
import Formulario from './components/formulario';
import Card from './components/card';
import Encabezado from './components/encabezado';
import WelcomeMessage from './components/bienvenida'; // Importa el componente de mensaje de bienvenida
import React, { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({ nombre: '', correo: '' });

  const actualizarDatosFormulario = (datos) => {
    setUserData(datos);
  };

  return (
    <div className="App">
      <Encabezado />
      <Formulario onFormSubmit={actualizarDatosFormulario} />
      <Card {...userData} />
      <WelcomeMessage nombre={userData.nombre} /> {/* Muestra el mensaje de bienvenida */}
    </div>
  );
}

export default App;
