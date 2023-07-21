import { createSlice } from "@reduxjs/toolkit";

interface AuthProps {
    status: 'checking' | 'authenticated' | 'non-authenticated'
    uid: string | number
    email: string
    displayName: string,
    photoURL: string,
    errorMessage: string | {}

}

const initialState: AuthProps = {
    status: 'non-authenticated',
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    errorMessage: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state) => {
            state.status = 'authenticated'
        },
        logout: (state) => {
            state.status = 'non-authenticated'
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

export const  { login, logout, checkingCredentials } = authSlice.actions;