import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Routes from './routes';

export default function App() {
    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.auth.signed)

    return (
        <Routes isSignedIn={isSignedIn} />
    )
}
