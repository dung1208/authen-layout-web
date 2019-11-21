import { Types } from '../actions/types'

const INITIAL_STATE = {}

const changeClass = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CHANGE_CLASS_OPEN_THEME:
            return state;
        default: return state
    }
}

export default changeClass