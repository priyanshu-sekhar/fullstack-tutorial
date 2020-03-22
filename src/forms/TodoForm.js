import React, {useState} from 'react'

function TodoForm({createTask}) {
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (task)
            createTask(task);
        setTask("")
    };

    // enter a input -> changes the task value -> changes the input value
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={"text"}
                className={"todo-form"}
                placeholder={"Add a task"}
                value={task}
                onChange={e => setTask(e.target.value)}
            />
        </form>
    )
}

export default TodoForm