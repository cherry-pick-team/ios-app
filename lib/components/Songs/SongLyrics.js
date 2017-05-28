import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ScrollView, Text, TouchableWithoutFeedback} from 'react-native';
import PlayController from '../PlayController/PlayController';

export default class SongLyrics extends Component {
	static propTypes = {
		song: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			currentChunk: 0
		}
	}

	chunkPress(chunkIndex) {
		if (chunkIndex >= 0 && chunkIndex < this.props.song.lyricsChunks.length) {
			this.setState({currentChunk: chunkIndex});
		}
	}

	render() {
		const {song} = this.props;

		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.scroll}
					contentContainerStyle={styles.scrollContent}
					showsVerticalScrollIndicator={false}
				>
					{song.lyricsChunks.map(({lyrics, start, end}, chunkIndex) => (
						<TouchableWithoutFeedback
							onPress={this.chunkPress.bind(this, chunkIndex)}
							key={chunkIndex}
						>
							<View style={[styles.border, {opacity: chunkIndex === this.state.currentChunk ? 1 : 0.3}]}>
								{lyrics.map((line, index) => (
									<View key={index} style={styles.line}>
										<Text style={styles.lineText}>
											{line}
										</Text>
									</View>
								))}
								<View style={styles.controller}>
									<PlayController
										isActive={chunkIndex === this.state.currentChunk}
										songId={song.mongoId}
										from={start}
										to={end}
										onNext={this.chunkPress.bind(this, chunkIndex + 1)}
										onPrev={this.chunkPress.bind(this, chunkIndex - 1)}
									/>
								</View>
							</View>
						</TouchableWithoutFeedback>
					))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%'
	},
	scroll: {
		marginTop: 30,
		marginBottom: 180,
		height: '100%',
		width: '100%'
	},
	scrollContent: {
		paddingBottom: 40
	},
	line: {
		padding: 5,
	},
	lineText: {
		color: 'white',
		fontSize: 18
	},
	border: {
		borderWidth: 8,
		borderColor: 'white',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		marginBottom: 25,
		paddingBottom: 30
	},
	controller: {
		position: 'absolute',
		bottom: -34,
		flexDirection: 'row'
	}
});
