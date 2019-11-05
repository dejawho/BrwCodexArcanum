/* eslint-disable prettier/prettier */
import {SET_SPELL_SCHOOL} from './actionTypes';

export const setSpellSchool = (newSpellSchool) => {
    return {
        type: SET_SPELL_SCHOOL,
        spellSchool: newSpellSchool,
    };
};
