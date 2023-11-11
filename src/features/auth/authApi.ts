import { api } from '../common/apiConfig';

const authApiRoutes = {
    csrfCookieRoute: "/sanctum/csrf-cookie",
    signInRoute: "/api/login",
    signOutRoute: "/api/logout",
    userObjectRoute: "/api/user",
};

export const login = async (email: string, password: string) => {
    try {
        await api.get(authApiRoutes.csrfCookieRoute);
        const response = await api.post(authApiRoutes.signInRoute, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        await api.post(authApiRoutes.signOutRoute);
    } catch (error) {
        throw error;
    }
};

export const checkAuth = async () => {
    try {
        const response = await api.get(authApiRoutes.userObjectRoute);
        return response.data;
    } catch (error) {
        throw error;
    }
};