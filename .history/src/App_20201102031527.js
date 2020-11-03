import React from "react";
import logo from "./logo.svg"
import "./App.css";

// function App() {
//   return(
//     <div>
//       <h1 className="myname">hello oggy</h1>
//       <img className="App-logo" src={logo}/>
//       <h1>hello oggy</h1>
//     </div>
//   );
// }



class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      list
    }
  }


  render(){
    return(
      <div>
        <h1>Todo application </h1>

<div className="todo-section">
  <div className="input-fields">
  <lable for="input-text">Enter the task</lable>
        <input type="text" className="input-text" placeholder="Enter task" id="input-text" required/><button className="add-task"> Add Task</button>
  </div>
  <div className="Show-task-section">
  <div>
    <input type="checkbox" className="task-checkbox" /><lable>my task to go for repair</lable><button className="delete-task">Delete</button>
  </div>
  </div>
</div>

      </div>
    )
  }
}
export default App;