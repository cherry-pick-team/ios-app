"use strict";
import {endpoint} from '../index';

/**
 * Делает запрос за данными о песне
 * @param id {string}
 */
export async function fetchSong(id) {
	try {
		let response = await fetch(endpoint + `/song/${id}/info`);
		let body = await response.json();

		return {
			response: filterSong(body)
		}
	} catch (error) {
		return {error}
	}
}


export function filterSong(serverResponse) {
	if (serverResponse.code === '404') {
		return [];
	}

	return serverResponse.map((song) => {
		return {
			album: song.album,
			author: song.author,
			chunks: song.chunks,
			mongoId: song.mongo_id,
			id: song.id,
			info: song.song,
			lyrics: song.timestamp_lyrics,
			lyricsChunks: song.lyrics_chunks,
			title: song.title,
			like: song.like
		}
	});
}

/**
 * Лайкнуть песню
 * @param songId
 * @param token
 */
export async function like(songId, token) {
	try {
		await fetch(`${endpoint}/song/${songId}/like?api_token=${token}&up=1`, {method: 'POST'});
		return {response: true}
	} catch (error) {
		return {error}
	}
}

export async function fetchLiked(token, limit = 50, page =1) {
	try {
		const response = await fetch(`${endpoint}/likes?page=${page}&limit=${limit}&api_token=${token}`, {method: 'POST'});
		const body = await response.json();

		return {response: body}
	} catch (error) {
		return {error}
	}
}
