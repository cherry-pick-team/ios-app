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
 */
export async function like(songId, token) {
	try {
		let response = await fetch(`https://zsong.ru/api/v2/song/${songId}/like?api_token=${token}&up=1`);
		let body = await response.json();

		return {response: true}
	} catch (error) {
		return {error}
	}
}

/**
 * Любимые песни юзера
 * @param token
 */
export async function favourite(token) {
	try {
		let response = await fetch(`https://zsong.ru/api/v2/likes?api_token=${token}`);
		let body = await response.json();

		return {response: body}
	} catch (error) {
		return {error}
	}
}
