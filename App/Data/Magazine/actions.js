/**
 * @providesModule ActionAuth
 */
import * as ActionTypes from './actionTypes';
import * as ActionAuth from './actions';
import Store from '../../Store';

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
export const getMagazines = params => HttpApi.get('GET_MAGAZINES', params)
    .then(response => Promise.resolve(response.data))
    .catch(err => Promise.reject(err));
