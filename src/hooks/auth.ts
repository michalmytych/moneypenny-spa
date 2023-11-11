import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setAuthenticated, setUser, setToken } from '../features/auth/authSlice';
import { login, logout } from '../features/auth/authApi';
import { useEffect } from 'react';
import { api } from '../features/common/apiConfig';
import { checkAuth } from '../features/auth/authApi';
import authStorage from '../features/auth/authStorage';


export const useAuth = () => {
  const authenticated = useSelector((state: RootState) => state.auth.authenticated);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = authStorage.getToken();
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${authStorage.getToken()}`;
    }
    checkAuth()
      .then((userData) => {
        dispatch(setAuthenticated(true));
        dispatch(setUser(userData));
      })
      .catch((error) => {
        console.error('Błąd sprawdzania autoryzacji', error);
      });
  }, [dispatch]);

  interface AuthResultsHandler {
    onSuccess: Function;
    onError: Function;
  };

  const signIn = async (email: string, password: string, handlers: AuthResultsHandler, rememeber: boolean = false) => {
    try {
      const userData = await login(email, password);
      if (userData?.token && userData?.user) {
        dispatch(setAuthenticated(true));
        dispatch(setUser(userData?.user));
        dispatch(setToken(userData?.token));
        console.log(rememeber);
        
        authStorage.setToken(userData?.token, rememeber);
        handlers.onSuccess(userData);
      }
    } catch (error) {
      handlers.onError(error);
    }
  };

  const signOut = async (handlers: AuthResultsHandler) => {
    try {
      await logout();
      dispatch(setAuthenticated(false));
      dispatch(setUser(null));
      dispatch(setToken(null));
      authStorage.removeToken();
      handlers.onSuccess();
    } catch (error) {
      handlers.onError(error);
    }
  };

  return {
    authenticated,
    signOut,
    signIn,
    user,
  };
};
