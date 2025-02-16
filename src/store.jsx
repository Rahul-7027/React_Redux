import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"
const FETCH_TASK = "task/fetch"

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
        case FETCH_TASK:
            return {
                ...state,
                task: [...state.task, ...action.payload]
            }

        default:
            return state
    }
}

// Create Action creator
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}
export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(addTask("I am a payload 1"))
store.dispatch(addTask("I am a payload2"))
// store.dispatch(deleteTask(1))


export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            const newData = await res.json()
            dispatch({ type: FETCH_TASK, payload: newData.map((elememt) => elememt.title) })
        } catch (error) {
            console.log(error)
        }
    }
}