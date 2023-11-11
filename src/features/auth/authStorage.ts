import { LOCAL_API_KEY_LABEL } from "./authConfig";
import { _localStorage, _sessionStorage } from "../common/browserStorage";

const authStorage = {
    getToken: (): string|null => {
        let token = _sessionStorage.getItem(LOCAL_API_KEY_LABEL);
        if (!token) {
            token = _localStorage.getItem(LOCAL_API_KEY_LABEL);
        }
        return token;
    },
    setToken: (value: string|null, remember: boolean = false): void => {
        if (!value) return;
        _sessionStorage.setItem(LOCAL_API_KEY_LABEL, value);
        if (remember) {
            _localStorage.setItem(LOCAL_API_KEY_LABEL, value);
        }
    },
    removeToken: () => {
        _localStorage.removeItem(LOCAL_API_KEY_LABEL);
        _sessionStorage.removeItem(LOCAL_API_KEY_LABEL);
    }
};

 export default authStorage;