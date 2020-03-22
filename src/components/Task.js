import React from 'react'

function Task({index, task, completeTask, removeTask}) {
    console.log('task update', task);

    return (
        <div className={"task"}
             style={{
                 textDecoration: task.completed ?
                     "line-through":
                     ""
             }}
        >
            {task.title}

            <div className={"task-action"}>
                <button onClick={() => completeTask(index)}>
                    Mark Complete
                </button>

                <button
                    onClick={() => removeTask(index)}
                    style={{
                        backgroundColor: 'red'
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Task