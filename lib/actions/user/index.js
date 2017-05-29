"use strict";

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGIN';

/**
 * Выставляет токен для данного типа авторизации
 * @param token - токен
 * @param type - тип авторизации, например FB
 * @returns {{type: string, payload: {token: *, type: *}}}
 */
export function login({token, type}) {
	return {
		type: USER_LOGIN,
		payload: {token, type}
	}
}

/**
 * Обнуляет все поля авторизации
 * @returns {{type: string}}
 */
export function logout() {
	return {
		type: USER_LOGOUT
	}
}
