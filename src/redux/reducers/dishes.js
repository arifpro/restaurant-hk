import * as ActionTypes from '../actions/ActionTypes';
import { DISHES } from '../../shared/dishes';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: DISHES
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};