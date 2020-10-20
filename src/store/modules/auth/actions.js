export function loginSuccess(token, id) {
    return {
        type: '@auth/LOGIN_SUCCESS',
        payload: { token, id },
    };
}

export function logout() {
    return {
        type: '@auth/LOGOUT'
    }
}
