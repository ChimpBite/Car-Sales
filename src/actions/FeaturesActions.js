// action type and Variables
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// action creator
export const addFeature = id => {
  return { type: ADD_FEATURE, payload: id };
};

export const removeFeature = id => {
  return { type: REMOVE_FEATURE, payload: id };
};
