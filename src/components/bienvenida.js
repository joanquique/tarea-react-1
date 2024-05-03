import React from 'react';

const Bienvenida = ({ nombre }) => {
  return (
    <div>
      <h2>Bienvenido, {nombre}!</h2>
      <p>Gracias por visitar nuestra aplicación.</p>
    </div>
  );
};

export default Bienvenida;
