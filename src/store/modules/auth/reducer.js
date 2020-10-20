import produce from 'immer';

const INITIAL_STATE = {
    token: null,
    id: null,
    signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/LOGIN_SUCCESS': {
                draft.token = action.payload.token;
                draft.id = action.payload.id;
                draft.signed = true;
                break;
            }
            case '@auth/LOGOUT': {
                draft.token = null;
                draft.signed = false;
                break;
            }
        }
    });
};
