export const actionCreator = (type, payload) => ({
    type,
    payload,
});

const initState = {
    todo: [],
    progress: [],
    done: [],
}

export const rootReducer = (state = initState, action) => {
    const {
        type,
        payload,
    } = action;

    switch(type){
        case 'ADD_TODO':
            return {
                ...state,
                todo: [ ...state.todo, payload ],
            }
        case 'MOVE':
            return {
                ...state,
                [`${payload.from}`]: state[`${payload.from}`].filter(task => task !== payload.task),
                [`${payload.where}`]: [ ...state[`${payload.where}`], payload.task ],
            }

        default:
            return state;
    }
}
