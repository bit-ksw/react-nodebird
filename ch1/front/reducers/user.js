const dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  id: 1,
};

export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {
    id: '',
    nick: '',
    password: '',
  },
};

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP_ID = 'SIGN_UP_ID';
export const SIGN_UP_NICK = 'SIGN_UP_NICK';
export const SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD';

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data,
  };
};

export const loginAction = {
  type: LOG_IN,
};

export const logoutAction = {
  type: LOG_OUT,
};

export const signUpId = (data) => {
  return {
    type: SIGN_UP_ID,
    data,
  }
};

export const signUpNick = (data) => {
  return {
    type: SIGN_UP_NICK,
    data,
  }
};

export const signUpPassword = (data) => {
  return {
    type: SIGN_UP_PASSWORD,
    data,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    case SIGN_UP_ID: {
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          id: action.data,
        }
      }
    }
    case SIGN_UP_NICK: {
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          nick: action.data,
        }
      }
    }
    case SIGN_UP_PASSWORD: {
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          id: action.data,
          password: action.data,
        }
      }
    }


    default: {
      return {
        ...state,
      }
    }
  }
};

export default reducer;