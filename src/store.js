import { createStore } from "redux"

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

const initalState = {
    task: [],
    isLoading: false
}

const taskReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }

        case DELETE_TASK:

            const UpdatedTask = state.task.filter((currElement, index) => {
                return index !== action.payload
            })
            return {
                ...state,
                task: UpdatedTask
            }


        default:
            return state
    }
}

// Create Action creator
const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}
const store = createStore(taskReducer)
store.dispatch(addTask("I am a payload 1"))
store.dispatch(addTask("I am a payload2"))
store.dispatch(deleteTask(1))


console.log(3333, store.getState())