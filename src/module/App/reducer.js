import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './action-type';

const initialState = { isLoading: false, requested: false, error: null, data: [] };

export default function app(state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, isLoading: true };
        case SEARCH_SUCCESS:
            return { ...state, isLoading: false, requested: true, data: action.result };
        case SEARCH_FAILURE:
            return { ...state, isLoading: false, error: action.error };
        default:
            return { ...state };
    }
}