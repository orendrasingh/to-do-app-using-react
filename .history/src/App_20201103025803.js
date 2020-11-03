import React from "react";
import logo from "./logo.svg"
import { v4 as uuid } from 'uuid';

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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      newItem: "",
      list: []
    })
  }
  addItem(value) {
    if (value !== "") {
      const newItem = {
        id: uuid(),
        task: value,
        done: false,
      }

      const list = [...this.state.list]
      list.push(newItem)

      this.setState(
        {
          list,
        newItem : ""
        }
      )
    }
  }

  deleteItem(id)
  {
    const list=[...this.state.list]
    var updatedList=list.filter(item => item.id!==id)
    this.setState(
    {
      list:updatedList,
      newItem:"",
    }
    )
  }

  updatedItem(input)
  {

    this.setState(
    {
      newItem:input,
    }
    )
  }



  render() {
    return (
      <div>
        <h1>Todo application </h1>

        <div className="todo-section">
          <div className="input-fields">
            <lable for="input-text">Enter the task</lable>
            <input type="text" className="input-text"  placeholder="Enter task" id="input-text" value={this.state.newItem} onChange={e => this.updatedItem(e.target.value)} required />
            <button className="add-task" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}> Add Task</button>
          </div>
          <div className="Show-task-section">
          {this.state.list.map(item =>{
            return(
              <div>
              <input type="checkbox" className="task-checkbox" /><lable>{</lable><button className="delete-task">Delete</button>
            </div>
            )
          })}
          </div>
        </div>

      </div>
    )
  }
}
export default App;