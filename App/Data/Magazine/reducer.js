/**
 * @flow
 */

import * as ActionTypes from './actionTypes';

type State = {
    data: any
};

export const initialState = {
};
/*
*@params (ADD_PHOTO) action.photo
*@params (UPDATE_PHOTO) action.photo, action.index
*@params (DELETE_PHOTO) action.index
*@params (DELETE_ALL_PHOTO) action
*/
export const magazineReducer = (state: State = initialState, action): State => {
    switch (action.type) {
        default:
            return state;
    }
};
