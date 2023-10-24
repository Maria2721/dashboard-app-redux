export const ADD_POSITIONS = "ADD_POSITIONS"; //create const for the type of action, use this in reducer too

export const addPositions = (positions) => ({
  type: ADD_POSITIONS,
  positions, // payload: positions,
});
