import * as storeAction from './../actions/actions';

const initialState = {
    email: '',
    password: ''
};

export const reducer = (state = initialState, action) => {
    console.log('reducer fn: ', action);
    switch (action.type) {

        case storeAction.SET_EMAIL:
            console.log('reducer fn - case SET EMAIL', action, state);
            return {
                ...state,
                email: action.payload.email
            };

        case storeAction.SET_PASSWORD:
            console.log('reducer fn - case SET PASSWORD', action, state);
            return {
                ...state,
                password: action.payload.password
            };

        case storeAction.ADD:
            console.log('reducer fn - case ADD', action, state);
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }

}