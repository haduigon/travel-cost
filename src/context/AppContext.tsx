import React, {
  createContext,
  Dispatch,
  useReducer,
} from 'react';
import { ACTIONS } from '../helpers/utils';
import {Travel} from '../types/types'

type Action = 
  | { type: ACTIONS.ADD_TRAVEL; payload: Travel };

interface Data {
  travels: Travel[];
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TRAVEL:
      return {
        ...state,
        travels: [...state.travels, action.payload],
      };
    default:
      return state;
  }
}

interface State {
  state: Data,
  dispatch: Dispatch<Action>,
}

const initialState: State = {
  state: {travels: []},
  dispatch: () => {},
};

export const AppContext = createContext(initialState);

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
