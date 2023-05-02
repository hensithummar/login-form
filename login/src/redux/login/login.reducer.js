const defaultState = {
  formData: {},
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SETINTOFORM":
      return { ...state, formData: action.payload };
    case "EMPTYLOGINFORM":
      return { formData: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
