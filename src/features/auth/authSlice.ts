import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    authenticated: boolean;
    user: any;
    token: string | null,
}

const initialState: AuthState = {
    authenticated: false,
    user: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.authenticated = action.payload;
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
    },
});

export const { setAuthenticated, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;