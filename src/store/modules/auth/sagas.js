import { takeLatest, all } from 'redux-saga/effects';

import api from '../../../services/api';

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
]);
