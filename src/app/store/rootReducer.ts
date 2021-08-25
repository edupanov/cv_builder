import {connectRouter} from "connected-react-router";
import {History} from "history";
import {CombinedState, combineReducers} from "redux";

let rootState = {} as CombinedState<any>

export type RootState = ReturnType<typeof rootState>

export const createRootReducer = (history: History) => {
    rootState = combineReducers({
        router: connectRouter(history),

    })

    return rootState
}
