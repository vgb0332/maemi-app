/**
 * @providesModule ActionAuth
 */
import * as ActionTypes from './actionTypes';
import * as ActionAuth from './actions';
import Store from '../../store';

// API
import * as HttpApi from '../../Lib/Api/index';

/*
* other constants
*/
export const actionTypes = ActionTypes;
/*
* action creators
*/

//////////////////
///// GET ////////
//////////////////
export const session = () => dispatch => HttpApi.get('GET_RIDERS_SESSION')
            .then((response) => {
                if (response.data.code == 200) {
                    dispatch({ type: ActionTypes.LOGIN, author: response.data.data });
                    return Promise.resolve(response.data);
                }
                return Promise.reject(response.data);
            })
            .catch((err) => {
                console.log(err);
                return Promise.reject(err);
            });


//////////////////
///// POST ///////
//////////////////
/*
* @params {Number} params.countryDialCode
* @params {Number} params.phoneNumber
* @params {String} query.password
*/
export const login = params => dispatch => HttpApi.post('POST_RIDERS_LIGIN', params)
            .then((response) => {
                if (response.data.code == 200) {
                    dispatch({ type: ActionTypes.LOGIN, author: response.data.data });
                    return Promise.resolve(response.data);
                }
                return Promise.reject(response.data);
            })
            .catch(err => Promise.reject(err));

export const logout = () => dispatch => HttpApi.post('POST_AUTH_LOGOUT')
            .then((response) => {
                dispatch({ type: ActionTypes.LOGOUT });
                dispatch({ type: 'RESET_OPTIONS' });
                return Promise.resolve();
            })
            .catch((err) => {
                dispatch({ type: ActionTypes.LOGOUT });
                return Promise.resolve();
            });
/*
* @params {Number} params.countryDialCode
* @params {Number} params.phoneNumber
* @params {String} query.password
*/
export const changePassword = params => HttpApi.post('POST_RIDERS_CHANGE_PASSWORD', params)
        .then(response => Promise.resolve(null))
        .catch(err => Promise.reject(err));

export const setLoginInfo = ( info ) => {
    return { type: actionTypes.LOGIN_INFO, info };
}