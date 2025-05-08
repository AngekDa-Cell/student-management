import React, { useState } from 'react';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, age });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Edad" />
      <button type="submit">Agregar Estudiante</button>
    </form>
  );
}
