const INITIAL_STATE = {
    patient: null,
}

export const patientReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
    switch (type) {
    case 'SET_PATIENT':
      return {
        ...state,
        patient: payload,
      };
    case 'CLEAR_PATIENT':
      return {
        ...state,
        patient: null,
      }
    default:
      return state;
  }
}

