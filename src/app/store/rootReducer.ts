import {connectRouter} from "connected-react-router";
import {History} from "history";
import {CombinedState, combineReducers} from "redux";
import {cvReducer} from "../components/pages/createCV/store/reducers/cvReducers";

let rootState = {} as CombinedState<any>

export type RootState = ReturnType<typeof rootState>

export const createRootReducer = (history: History) => {
    rootState = combineReducers({
        router: connectRouter(history),
        resume: cvReducer

    })

    return rootState
}
