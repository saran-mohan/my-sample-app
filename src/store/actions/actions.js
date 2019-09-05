export const ADD = 'ADD';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setEmail = data => {
    return {
        type: SET_EMAIL,
        payload: data
    }
};

export const setPassword = data => {
    return {
        type: SET_PASSWORD,
        payload: data
    }
};

export const addUserLogin = data => {
    return {
        type: ADD,
        payload: data
    }
};