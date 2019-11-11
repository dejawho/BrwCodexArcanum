/* eslint-disable prettier/prettier */
import {CONSPIRATION_DATA} from './conspiration';
import {DESTRUCTION_DATA} from './destruction';
import {ILLUSION_DATA} from './illusion';
import {DIVINATION_DATA} from './divination';
import {NECROMANCY_DATA} from './necromancy';
import {TRASMUTATION_DATA} from './trasmutation';
import {FORGOTTEN_DATA} from './forgotten';
import {MYTHOLOGIC_DATA} from './mythologic';

export const SCHOOLS_CATEGORY_DATA = [{id: CONSPIRATION_DATA.id, label : CONSPIRATION_DATA.name},
                     {id: DESTRUCTION_DATA.id, label: DESTRUCTION_DATA.name},
                     {id: DIVINATION_DATA.id, label: DIVINATION_DATA.name},
                     {id: ILLUSION_DATA.id, label: ILLUSION_DATA.name},
                     {id: NECROMANCY_DATA.id, label: NECROMANCY_DATA.name},
                     {id: TRASMUTATION_DATA.id, label: TRASMUTATION_DATA.name},
                     {id: FORGOTTEN_DATA.id, label: FORGOTTEN_DATA.name},
                     {id: MYTHOLOGIC_DATA.id, label: MYTHOLOGIC_DATA.name}];

export const getSpellsById = (schoolId) => {
  const description = getDescriptionById(schoolId);
  if (description){
    return description.spells;
  }
  return undefined;
};

export const getDescriptionById = (schoolId) => {
  switch (schoolId) {
    case DIVINATION_DATA.id:
      return DIVINATION_DATA;
    case CONSPIRATION_DATA.id:
      return CONSPIRATION_DATA;
    case DESTRUCTION_DATA.id:
      return DESTRUCTION_DATA;
    case ILLUSION_DATA.id:
      return ILLUSION_DATA;
    case NECROMANCY_DATA.id:
      return NECROMANCY_DATA;
    case TRASMUTATION_DATA.id:
      return TRASMUTATION_DATA;
    case FORGOTTEN_DATA.id:
      return FORGOTTEN_DATA;
    case MYTHOLOGIC_DATA.id:
      return MYTHOLOGIC_DATA;
    default:
      return undefined;
  }
};

export const SCHOOLS_DESCRIPTIONS_DATA = [CONSPIRATION_DATA, DESTRUCTION_DATA, DIVINATION_DATA, ILLUSION_DATA, NECROMANCY_DATA, TRASMUTATION_DATA, MYTHOLOGIC_DATA, FORGOTTEN_DATA];
