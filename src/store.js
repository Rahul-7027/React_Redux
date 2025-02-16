import { createStore } from "redux"

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

const initalState = {
    task: [],
    isLoading:false
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

const store=createStore(taskReducer)
store.dispatch({type:ADD_TASK,payload:"I am a payload1"})
store.dispatch({type:ADD_TASK,payload:"I am a payload2"})
store.dispatch({type:DELETE_TASK,payload:1})


console.log(3333,store.getState())