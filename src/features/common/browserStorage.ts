/**
 * Abstraction for local storages. Usefull when moving codebase to native apps.
 */
export const _localStorage: Storage = window.localStorage;
export const _sessionStorage: Storage = window.localStorage;