export default function StudentList({ students, onDelete }) {
    return (
      <ul className="student-list">
        {students.map((s, index) => (
          <li key={index}>
            {s.name} (Edad: {s.age})
            <button onClick={() => onDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  }
  