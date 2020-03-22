export const getTasks = (dispatch) => {
    fetch(
        'http://localhost:3000/todo',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(res => res.json())
        .then(value => {
            dispatch({
                type: 'FETCH_TODO',
                data: value
            })
        });
};

export const addTask = (task, dispatch) => {
    fetch(
        'http://localhost:3000/todo',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task
            })
        }
    )
        .then(res => res.json())
        .then(value => {
            dispatch({
                type: 'UPDATE_TODO',
                data: value
            })
        });

};

export const updateTask = (task, dispatch) => {
    console.log('update task', task);

    fetch(
        'http://localhost:3000/todo',
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task
            })
        }
    )
        .then(res => res.json())
        .then(value => {
            dispatch({
                type: 'UPDATE_TODO',
                data: value
            })
        });
};

export const deleteTask = (task, dispatch) => {
    fetch(
        'http://localhost:3000/todo',
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task
            })
        }
    )
        .then(res => res.json())
        .then(value => {
            dispatch({
                type: 'UPDATE_TODO',
                data: value
            })
        });
};