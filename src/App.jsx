import React, { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div className="App">
      <h1>Gestión de Estudiantes</h1>
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}

export default App;
