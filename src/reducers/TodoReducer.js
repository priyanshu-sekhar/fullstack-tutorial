const INITIAL_STATE = {
  tasks: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'FETCH_TODO': {
            return {
                ...state,
                tasks: action.data
            }
        }

        case 'UPDATE_TODO': {
            console.log('update todo', action.data);

            return {
                ...state,
                tasks: action.data
            }
        }

        default:
            return state
    }
}