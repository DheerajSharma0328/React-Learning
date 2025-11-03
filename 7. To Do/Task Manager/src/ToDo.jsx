import { useState } from "react"



function ToDo() {

    let [todo, setTodo] = useState([{ task: "sfkhd", id: crypto.randomUUID() }])
    let [newtodo, setNewTodo] = useState("")

    let addNewTask = () => {

        setTodo((prevTodo) => {
            return [...prevTodo, { task: newtodo, id: crypto.randomUUID() }]
        })
        setNewTodo([])
    }

    let addNewTsk = (event) => {

       setNewTodo(event.target.value)

    }

    let deleteTodo = (id)=>{

        setTodo((prevTask)=>todo.filter((prevTask)=> prevTask.id != id))
         
    }

    let upperCaseAll = () =>{
        
        setTodo(
            todo.map((milestone)=>{

                return{
                    ...milestone,
                    task: milestone.task.toUpperCase()

                }

            })
        )
        
        
    }

    let upperCase = (id)=>{

        setTodo(
            todo.map((milestone)=>{

                if(milestone.id == id){

                    return{
                        ...milestone,
                        task: milestone.task.toUpperCase()
    
                    }
                }
                else{
                    return milestone
                }


            })
        )

    }
    
        
    

    return (
        <div>
            <h1>ToDo List</h1>

            <input type="text" placeholder='Add a task' value={newtodo} onChange={addNewTsk} />
            &nbsp;
            <button onClick={addNewTask}>Add Task</button>

            <h4>Your Today Task</h4>

            <ul>
                {
                    todo.map((todo) =>
                        (<li key={todo.id}>

                            <span>{todo.task}</span>
                            &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            &nbsp;
                            <button onClick={()=>upperCase(todo.id)}>UpperCase</button>
                        </li>)
                    )
                }
            </ul>

            <br />
            <button onClick={upperCaseAll}>UpperCase All</button>

        </div>
    )
}

export default ToDo