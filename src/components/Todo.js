import React, {useState, useEffect} from 'react'
import './Todo.css'
import Task from "../components/Task";
import TodoForm from "../form/TodoForm";

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Learn React",
            completed: false
        },
        {
            title: "Eat Lunch",
            completed: true
        },
        {
            title: "Play Guitar",
            completed: false
        }
    ]);
    const [tasksRemaining, setTasksRemaining] = useState(0);

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed)
            .length
        )
    });

    const addTask = (task) => {
        setTasks([...tasks, {
            title: task,
            completed: false
        }])
    };

    const completeTask = (index) => {
         const newTasks = [...tasks];
         newTasks[index].completed = true;
         setTasks(newTasks)
    };

    const removeTask = index => {
        const newTasks = tasks.filter((value, index1) =>
            index1 !== index
        );
        setTasks(newTasks)
    };

    return (
        <div className={"todo-parent"}>
            <div className={"todo-header"}>
                Tasks ToDo - {tasksRemaining}
            </div>

            <div className={"todo-tasks"}>
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                    />
                ))}
            </div>

            <div className={"todo-form"}>
                <TodoForm
                    addTask={addTask}
                />
            </div>
        </div>
    )
}

export default Todo