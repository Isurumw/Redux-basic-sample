import {MainAction} from '../actions/first.action';

type MainState = {
  description: SamplePayload;
  error?: String;
};

const initialState = {
  description: {
    value: 'State 01',
  },
  error: undefined,
};

const FirstReducer = (state: MainState = initialState, action: MainAction) => {
  switch (action.type) {
    case 'ON_FIRST_ACTION':
      return {
        ...state,
        description: action.payload,
      };
    case 'ON_ERROR_FIRST_ACTION':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default FirstReducer;
