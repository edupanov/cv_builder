import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import rootActionCreators from '../rootActionCreator'

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(rootActionCreators, dispatch)
}