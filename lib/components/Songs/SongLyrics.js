import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

export default class SongLyrics extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired
	};

	getChunks(song) {
		//todo должен возвращать все чанки в формате массива объектов
		// У каждого объекта есть ключ isSelectable : bool, lines : [], start : number, end : number
		const result = [];
		// const selectedLinesStarts =

		song.lyrics.forEach((chunk) => {
			result.push({

			})
		});
	}

	render() {
		const {song} = this.props;

		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.scroll}
					showsVerticalScrollIndicator={false}
				>
					{Object.entries(song.lyrics).map(([start, line]) => {
						debugger;
						return (
							<View style={styles.line}>
								<Text style={styles.lineText}>
									{line}
								</Text>
							</View>
						)
					})}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	scroll: {
		marginTop: 20
	},
	line: {
		padding: 5,
	},
	lineText: {
		color: 'white',
		fontSize: 18
	}
});
