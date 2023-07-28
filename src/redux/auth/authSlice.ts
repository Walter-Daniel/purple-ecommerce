import { createSlice } from "@reduxjs/toolkit";

interface AuthProps {
    status: 'checking' | 'authenticated' | 'non-authenticated'
    uid: string | null
    email: string | null
    rol: string | null
    displayName: string| null
    photoURL: string |null
    errorMessage: string | null

}

const initialState: AuthProps = {
    status: 'non-authenticated',
    uid: null,
    email: null,
    rol: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, {payload}) => {
            state.status = 'authenticated'
            state.uid= payload.uid;
            state.email= payload.email;
            state.rol= payload.rol;
            state.displayName= payload.displayName;
            state.photoURL= payload.photoURL;
            state.errorMessage= null;
        },
        logout: (state, {payload}) => {
            state.status = 'non-authenticated';
            state.uid= null;
            state.email= null;
            state.rol= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
        registerInfo: (state, {payload}) => {
            state.status = 'non-authenticated';
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload;
        }
    }
});

export const  { login, logout, checkingCredentials, registerInfo } = authSlice.actions;