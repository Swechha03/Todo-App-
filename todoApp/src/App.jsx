import { useState, useEffect, Fragment } from 'react'
import dayjs from 'dayjs'
import './App.css'

//creates the navigation bar at the top 
        function NavBar() {
            return (
                <div>
                    <nav className="navBar">
                        <span className="title">Todo App</span>
                        <div>
                            <button onClick="">Completed Todo</button>
                        </div>
                    </nav>
                </div>
            )

        }


        //creates the input and add bar 
        function InputTodo({ addTodo }) {
            const [todo, setTodo] = useState('');

            //gets the value from the input and stores in todo 
            function getTodo(event) {
                setTodo(event.target.value);
            }

            //handles all the function of the add button 
            function handleAddButton() {
                if (todo !== '') {
                    addTodo(todo);
                    setTodo('');
                }

            }

            return (
                <div>
                    <input type="text" placeholder="Enter your todo" onChange={getTodo} value={todo}></input>
                    <button onClick={handleAddButton}>Add To List</button>
                </div>
            )
        }


        //main application component (whole website)
        function App() {
            const [todoList, setTodoList] = useState([]);
            const [completedList, setCompletedList]= useState([]);

            //just for testing for now 
              useEffect(()=>{
                    console.log(completedList);
                }, [completedList])

            //adds the todo to the todolist
            function addTodo(todo) {
                setTodoList([...todoList, todo]);
            }

            //deletes the todo from the list when clicked the delete button 
            function deleteButton(index){
                const newTodoList=[...todoList];
                newTodoList.splice(index,1);
                setTodoList(newTodoList);
            }

            //puts the todos in the completed list array when clicked on the completed button
            function completedTodoList(index){

                setCompletedList([...completedList,todoList[index]] );
                deleteButton(index);
            }

            return (
                <div className="js-container">
                    <NavBar />
                    <InputTodo addTodo={addTodo} />

                    <div className="todoItem">
                        {todoList.map((eachTodo, index) => {
                            //key is very imp in map as it helps react keep track of each element which allows rendering easily. 
                            //assigning the key to the top element since we have multiple element inside and since the empty fragment cannot have an attribute, using React.Fragment
                            return <Fragment key={index}>
                                <p>
                                    {eachTodo}
                                    <button style={{ marginLeft: "10px", marginRight: "10px" }}>{dayjs().format('YYYY-MM-DD')}</button>
                                    <button
                                        style={{ marginLeft: "10px", marginRight: "10px" }}
                                        onClick={()=>{
                                            deleteButton(index);
                                        }}
                                    >
                                        delete
                                    </button>
                                    <button 
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    onClick={()=>{
                                        completedTodoList(index)
                                    }
                                    }
                                    > 
                                    Completed
                                     </button>
                                </p>

                            </Fragment>
                        })}
                    </div>
                </div>
            )
        }

export default App
