/* eslint-disable prettier/prettier */
import {SET_SPELL_SCHOOL} from '../actions/actionTypes';

const initialState = {
    spellSchool: null,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SPELL_SCHOOL:
            return {
                ...state,
                spellSchool: action.spellSchool,
            };
        default:
            return state;
    }
};

export default mainReducer;
