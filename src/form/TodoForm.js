import React, {useState} from "react";

function TodoForm({addTask}) {
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (task)
            addTask(task);
        setTask("")
    };

    return (
        <form onSubmit={handleSubmit}>
           <input
               type={"text"}
               className={"todo-form"}
               value={task}
               placeholder={"Add a task"}
               onChange={e => setTask(e.target.value)}
           />
        </form>
    )
}

export default TodoForm