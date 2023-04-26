
import React, { useState } from 'react';
import Formulario from './Formulario';
import Lista from './Lista';
import './styles.css';

function App() {
  const [tareas, setTareas] = useState([]);

  const handleAddTarea = (titulo, descripcion) => {
    const newTarea = {
      id: Math.random(),
      titulo: titulo,
      descripcion: descripcion,
    };
    setTareas([...tareas, newTarea]);
  };

  const handleDeleteTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const handleEditTarea = (index, tareaActualizada) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = tareaActualizada;
    setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="titulo">Prueba técnica - React.js</h1>
      </header>
      <p className="texto-descriptivo">
        DESCRIPCIÓN: Deberás crear un prototipo de aplicación utilizando React.
        La aplicación debe permitir al usuario agregar, modificar y eliminar
        tareas, así como también marcar las tareas como completadas.
      </p>
      <div className="main">
        <Formulario onAddTarea={handleAddTarea} />
        <Lista
          tareas={tareas}
          onDeleteTarea={handleDeleteTarea}
          onEditTarea={handleEditTarea}
        />
      </div>
    </div>
  );
}

export default App;
