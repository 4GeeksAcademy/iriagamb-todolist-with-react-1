import { useState } from "react";
import React  from "react";


//include images into your bundle

//create your first component
const Home = () => {
	
		const [inputByUser, setInputByUser] = useState("");
		const [tasks, setTasks] = useState([]);
		const [totalTasks, setTotalTasks] = useState(0);
	  
		const pressEvent = (event) => {
		  if (event.key == "Enter") {
			if (event.target.value == "") {
			  return alert("Enter your task!");
			}
			setTasks([...tasks, inputByUser]);
			setInputByUser("");
			setTotalTasks(totalTasks + 1);
		  }
		};
	  
		const taskAdder = (event) => {
		  setInputByUser(event.target.value);
		};
	  
		const deleteTask = (index) => {
		  const updatedTasks = tasks.filter((_, i) => i !== index);
		  setTasks(updatedTasks);
		  setTotalTasks(totalTasks - 1);
		};
	  
		return (
		  <div className="container">
			<h1 className="text-center">Todos</h1>
			<div className="card  border border-4">
			  <div className="mt-3">
				<input
				  type="text"
				  className="form-control"
				  value={inputByUser}
				  onChange={taskAdder}
				  placeholder="Ingresa tu tarea "
				  onKeyDown={pressEvent}
				/>
			  </div>
			  <div className="tasks-section mt-3 mx-1">
				{tasks.length == 0 ? (
				  <span>No hay tareas, por favor añade tareas </span>
				) : (
				  tasks.map((task, index) => (
					<div
					  key={index}
					  className="task justify-content-between text-start container d-flex my-2"
					>
					  <p>{task}</p>
					  <button type="button" class="btn-close" aria-label="Close"
						onClick={() => deleteTask(index)}
					  >
						
					  </button>
					</div>
				  ))
				)}
			  </div>
			</div>
			<div className="card-footer">
			  <p>Tareas agregadas {totalTasks}</p>
			</div>
		  </div>
		
	);
  };

export default Home;
