import React, {createContext, Dispatch, useReducer} from 'react';
import {ACTIONS} from '../helpers/utils';
import {Travel} from '../types/types';
import {User, Settings} from '../types/types';

const initialUser: User = {
  name: 'John Doe',
  email: '',
  image: '',
  about: '',
  age: '',
  phone: '',
  surname: '',
};

const initialSettings: Settings = {
  currency: 'USD',
  lang: 'en',
  notifications: true,
  blacklist: [],
  about: '',
  oldPassword: '',
  newPassword: '',
};

type Action =
  | {type: ACTIONS.ADD_TRAVEL; payload: Travel}
  | {type: ACTIONS.UPDATE_USER; payload: User}
  | {type: ACTIONS.UPDATE_SETTINGS; payload: Settings};

interface Data {
  travels: Travel[];
  user: User;
  settings: Settings;
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TRAVEL:
      return {
        ...state,
        travels: [...state.travels, action.payload],
      };
    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ACTIONS.UPDATE_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    default:
      return state;
  }
}

interface State {
  state: Data;
  dispatch: Dispatch<Action>;
}

const initialState: State = {
  state: {
    travels: [],
    user: initialUser,
    settings: initialSettings,
  },
  dispatch: () => {},
};

export const AppContext = createContext(initialState);

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
