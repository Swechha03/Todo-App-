import { useState } from 'react'
import dayjs from 'dayjs'
import './App.css'
import { NavBar } from './components/NavBar'
import { InputTodo } from './components/InputTodo'

//main application component (whole website)
function App() {
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);
  const [activeTab, setActiveTab] = useState('Add');


  //adds the todo to the todolist
  function addTodo(todo) {
    setTodoList([...todoList, todo]);
  }

  //deletes the todo from the list when clicked the delete button 
  function deleteButton(index) {
    
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function deletedTodoList(index){
    setDeletedList([...deletedList, todoList[index]]);
  }

  //puts the todos in the completed list array when clicked on the completed button
  function completedTodoList(index) {

    setCompletedList([...completedList, todoList[index]]);
    deleteButton(index);
  }


  return (
    <div className="js-container">

      <NavBar setActiveTab={setActiveTab} />

      {activeTab === 'Completed' &&

        <>
          <div className="todoItem">
            {completedList.map((eachTodo, index) => {
              return (
                <div key={index} className="todoItem">
                  <p>{eachTodo}</p>
                  <div className="button-group">
                    <button>{dayjs().format('YYYY-MM-DD')}</button>
                  </div>
                </div>
              );

            })}
          </div>
        </>

      }

      {activeTab === 'Deleted' &&

        <>
          <div className="todoItem">
            {deletedList.map((eachTodo, index) => {
              return (
                <div key={index} className="todoItem">
                  <p>{eachTodo}</p>
                  <div className="button-group">
                    <button>{dayjs().format('YYYY-MM-DD')}</button>
                  </div>
                </div>
              );

            })}
          </div>
        </>

      }

      {
        activeTab === 'Add' &&
        <>
          <InputTodo addTodo={addTodo} />
          <div className="todoItem">
            {todoList.map((eachTodo, index) => {
              //key is very imp in map as it helps react keep track of each element which allows rendering easily. 
              //assigning the key to the top element since we have multiple element inside.
              return (
                <div key={index} className="todoItem">
                  <p>{eachTodo}</p>
                  <div className="button-group">
                    <button>{dayjs().format('YYYY-MM-DD')}</button>
                    <button onClick={() => {deleteButton(index); deletedTodoList(index)}}>Delete</button>
                    <button onClick={() => completedTodoList(index)}>Completed</button>
                  </div>
                </div>
              );

            })}
          </div>
        </>
      }

    </div>
  )
}

export default App
