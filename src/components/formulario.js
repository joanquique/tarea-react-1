// Formulario.js

import React, { useState } from 'react';

const Formulario = ({ onFormSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({ nombre, correo });
    setNombre('');
    setCorreo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        Correo:
        <input type="email" value={correo} onChange={handleCorreoChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
