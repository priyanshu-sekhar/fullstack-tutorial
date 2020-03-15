import React from "react";

function Task({task, index, completeTask, removeTask}) {
    return (
        <div
            className={"task"}
            style={{
                textDecoration: task.completed ? "line-through" : ""
            }}
        >
            {task.title}

            <div className={"task-action"}>
                <button onClick={() => completeTask(index)}>
                    Mark Complete
                </button>

                <button
                    style={{
                        background: 'red'
                    }}
                    onClick={() => removeTask(index)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Task