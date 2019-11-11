/* eslint-disable prettier/prettier */
import {SET_SPELL_SCHOOL, SET_EVOCATION_INFO} from './actionTypes';

export const setSpellSchool = (newSpellSchool) => {
    return {
        type: SET_SPELL_SCHOOL,
        spellSchool: newSpellSchool,
    };
};

export const setEvocationName = (evocationName) => {
    return {
        type: SET_EVOCATION_INFO,
        evocationName: evocationName,
    };
};
