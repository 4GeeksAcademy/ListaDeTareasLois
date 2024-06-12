import React, { useState } from 'react';
import '../../styles/index.css'; // Importa tus estilos CSS específicos para el componente TodoList

const TodoList = () => { // Creamos nuesta lista de tareas
  const [tareas, setTareas] = useState([]); // useState= tareas, que a su vez, tareas es un array que almacenará nuestras tareas
  const [nuevaTarea, setNuevaTarea] = useState(''); //useState= nuevaTarea

 
/*Si el usuario presiona la tecla Enter y nuevaTarea no está vacía (es decir, el usuario ha ingresado algo), 
entonces agregamos la nueva tarea al array tareas y limpiamos el valor del input. 
*/ 
 
  const handleKeyPress = (event) => { //Utilizo KeyPress, que será la que maneje el evento.
    // Verifica, que si la tecla presionada es Enter y si hay una nueva tarea ingresada 
    if (event.key === 'Enter' && nuevaTarea.trim() !== '') { //Si el usuario presiona la tecla Enter. El .trim() se utiliza para eliminar cualquier espacio en blanco adicional al principio y al final del texto de la nueva tarea antes de agregarla a la lista de tareas. Esto asegura que no se agreguen tareas vacías o con espacios en blanco a la lista.
    // Si se cumple la condición, agrega la nueva tarea al array de tareas    
      setTareas([...tareas, nuevaTarea.trim()]);
      // Limpia el campo de entrada para futuras tareas
      setNuevaTarea('');
    }
  };

  /* Cuando pasamos el índice a handleDelete, estamos indicando qué tarea específica queremos eliminar del array de tareas. 
  Luego, dentro de la función handleDelete, utilizamos ese índice para filtrar y eliminar la tarea correspondiente del array de tareas. */ 

  const handleDelete = (index) => {
    // Creamos un nuevo array llamado nuevasTareas utilizando el método filter(). No es necesario envolverlo en corchetes [] porque filter() ya retorna un array.
    const nuevasTareas = tareas.filter((tarea, i) => {
      /*
      Cuando i no es igual al index que queremos eliminar, la función devuelve true, lo que significa que el elemento se conserva en el nuevo array. 
      Cuando i es igual al index, la función devuelve false, lo que significa que el elemento se excluye del nuevo array. 
      De esta manera, estamos filtrando el array para excluir la tarea que queremos eliminar.*/
      return i !== index;  //Dentro de la función de filtro, estamos verificando si el índice actual (i) es diferente al índice que queremos eliminar
    });
    
    // Luego, actualizamos el estado 'tareas' con el nuevo array 'nuevasTareas'
    setTareas(nuevasTareas);
  };
  
  return (
    <div className="ListaDeTareas">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        className="AñadeTarea" //Asignamos la clase para CSS
        placeholder="Escribe un nueva tarea" //breve descripción
        value={nuevaTarea} // el valor que se escribe es = a la nuevaTarea
        onChange={(e) => setNuevaTarea(e.target.value)} //se activa cada vez que el usuario escribe algo en el campo de entrada. Se captura el valor actual del campo de entrada utilizando e.target.value
        onKeyUp={handleKeyPress} // Configuramos un evento de tecla presionada (enter) que se activa por parte del usuario en el campo de entrada
      />

      
      <ul className="MiListaDeNuevasTareas"> 
        {tareas.length === 0 ? (
          <li className="SinTareas">Sin tareas a la vista</li>
          //Si es cero (longitud del array), significa que no hay tareas en la lista, por lo que se renderiza un <li> con el mensaje "Sin tareas a la vista"
        ) : (
          tareas.map((tarea, index) => ( //Utilizamos el método map en el array tarea y asi recorrer(iterar) sobre cada tarea y generar un elemento en la lista
            //Utilizamos el método key en la lista, para darle una clave a cada tarea, asi proporciona a React una forma única de identificar cada elemento de una lista
            <li key={index} className="AñadeTarea"> 
              {tarea}
              <span
                className="IconoDeBorrar"
                onClick={() => handleDelete(index)}
              >
                &#x2716;
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
