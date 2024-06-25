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
		  <div>
			<div className="card mt-3 align-items-center">
			  <div className="mt-3">
				<input
				  type="text"
				  className="form-control"
				  value={inputByUser}
				  onChange={taskAdder}
				  placeholder="Enter your task"
				  onKeyDown={pressEvent}
				/>
			  </div>
			  <div className="tasks-section mt-3 mx-1">
				{tasks.length == 0 ? (
				  <span>Enter your tasks</span>
				) : (
				  tasks.map((task, index) => (
					<div
					  key={index}
					  className="task justify-content-between text-start container d-flex my-2"
					>
					  <p>{task}</p>
					  <button
						className="btn btn-danger m-1 delete"
						onClick={() => deleteTask(index)}
					  >
						<i class="fas fa-trash-alt"></i>
					  </button>
					</div>
				  ))
				)}
			  </div>
			</div>
			<div className="card-footer">
			  <p>Total number of tasks {totalTasks}</p>
			</div>
		  </div>
		
	);
  };

export default Home;
