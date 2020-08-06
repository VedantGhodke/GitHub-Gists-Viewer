import {
    SEARCH_REQUEST,
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
} from './action-type';

import { search } from './endpoint';

export const searchRequest = () => ({ type: SEARCH_REQUEST });
export const searchSuccess = result => ({ type: SEARCH_SUCCESS, result });
export const searchFailure = error => ({ type: SEARCH_FAILURE, error });

export const searchAsync = user => dispatch => {
    dispatch(searchRequest());

    return search(user)
        .then(
            result => dispatch(searchSuccess(result)),
            error => dispatch(searchFailure(error)),
        );
};