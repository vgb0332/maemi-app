/**
 * @flow
 */

import * as ActionTypes from './actionTypes';

type State = {
    isLoggedIn: boolean;
    isLoading: boolean;
    author: {
        id: ?string;
        uid: ?string;
        email: ?string;
        name: ?string;
        type: ?number;
    };
    info: {
        id: ?string;
        pw: ?string;
    };
};

export const initialState = {
    isLoggedIn: false,
    isLoading: false,
    info: {
        id: '',
        pw: '',
    },
    author: {
        id: '',
        uid: '',
        email: '',
        name: '',

        type: 3,
    },

};
/*
*@params (ADD_PHOTO) action.photo
*@params (UPDATE_PHOTO) action.photo, action.index
*@params (DELETE_PHOTO) action.index
*@params (DELETE_ALL_PHOTO) action
*/
export const authReducer = (state: State = initialState, action): State => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                author: action.author,
                isLoggedIn: true,
                isLoading: false,
            };
        case ActionTypes.LOGOUT:
            return initialState;
        case ActionTypes.AUTH_FINISH:
            return { ...state, author: action.author, isLoading: false };
        case ActionTypes.LOGIN_INFO:
            return { ...state, info: action.info, isLoading: false };
        case 'AUTH_REQUEST':
            return { ...state, isLoading: true };
        case 'AUTH_RECEIVE':
            return { ...state, isLoading: false };
        case 'AUTHOR_UPDATE':
            return {
                ...state,
                author: {
                    ...state.author,
                    id: action.author.id || state.author.id,
                    uid: action.author.uid || state.author.uid,
                    email: action.author.email || state.author.email,
                    name: action.author.name || state.author.name,
                    type: action.author.name || state.author.type,

                },
            };
        default:
            return state;
    }
};
