import { api } from '../common/apiConfig';

const authApiRoutes = {
    csrfCookieRoute: "/sanctum/csrf-cookie",
    signInRoute: "/api/login",
    signOutRoute: "/api/logout",
    userObjectRoute: "/api/user",
};

export const login = async (email: string, password: string) => {
    await api.get(authApiRoutes.csrfCookieRoute);
    const response = await api.post(authApiRoutes.signInRoute, { email, password });
    return response.data;
};

export const logout = async () => {
    await api.post(authApiRoutes.signOutRoute);
};

export const checkAuth = async () => {
    const response = await api.get(authApiRoutes.userObjectRoute);
    return response.data;
};