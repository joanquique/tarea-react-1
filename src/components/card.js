import React from 'react';

const Card = ({ nombre, correo }) => {
  return (
    <div className="card">
      <h3>Información del Usuario</h3>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Correo electrónico:</strong> {correo}</p>
    </div>
  );
};

export default Card;
