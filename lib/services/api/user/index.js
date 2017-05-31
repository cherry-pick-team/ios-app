import {endpoint} from '../index';

/**
 * Забирает из апишки данные о пользователе
 * @param token
 */
export async function fetchUserData(token) {
	try {
		let response = await fetch(`https://zsong.ru/auth/me?api_token=${token}`);
		let body = await response.json();

		return {response: body.user}
	} catch (error) {
		return {error}
	}
}

/**
 * Лайкнуть песню
 * @param songId
 * @param token
 * @returns {Promise.<void>}
 */
export async function like(songId, token) {
	//todo
}

/**
 * Любимые песни юзера
 * @param token
 * @returns {Promise.<void>}
 */
export async function favourite(token) {
	//todo
}
