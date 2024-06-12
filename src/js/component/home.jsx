import React from "react";
import TodoList from "./TodoList";


const Home = () => {
    return ( 
		//El contenedor de Lista de Tareas lo centro aqui en vez del css.
        <div className="ListaDeTarea text-center"> 
            <TodoList />
        </div>
    );
};

export default Home;

