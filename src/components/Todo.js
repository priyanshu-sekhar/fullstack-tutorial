import React, {useEffect, useState} from 'react'
import './Todo.css'
import Task from './Task'
import TodoForm from "../forms/TodoForm";
import {useDispatch, useSelector} from "react-redux";
import {addTask, deleteTask, getTasks, updateTask} from "../actions/TodoActions";

function Todo() {

    const dispatch = useDispatch();
    const tasks = useSelector(({todo}) => todo.tasks);
    const [pendingTasks, setPendingTasks] = useState(0);

    useEffect(() => {
        getTasks(dispatch)
    }, [tasks]);

    useEffect(() => {
        setPendingTasks(tasks.filter(t => !t.completed).length)
    }, [tasks]);

    return (
        <div className={"todo-container"}>
            <div className={"todo-header"}>
                Pending Tasks - {pendingTasks}
            </div>

            <div className={"todo-content"}>
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={(index) => updateTask(tasks[index].title, dispatch)}
                        removeTask={(index) => deleteTask(tasks[index].title, dispatch)}
                    />
                ))}
            </div>

            <div className={"todo-form"}>
                <TodoForm
                    createTask={task => addTask(task, dispatch)}
                />
            </div>
        </div>
    )
}

export default Todo