import {Dispatch} from 'react';

interface FirstAction {
  readonly type: 'ON_FIRST_ACTION';
  payload: SamplePayload;
}

interface ErrorFirstAction {
  readonly type: 'ON_ERROR_FIRST_ACTION';
  payload: any;
}

export type MainAction = FirstAction | ErrorFirstAction;

export const onDescription = () => {
  return async (dispatch: Dispatch<MainAction>) => {
    dispatch({
      type: 'ON_FIRST_ACTION',
      payload: {
        value: 'State 02',
      },
    });
  };
};
