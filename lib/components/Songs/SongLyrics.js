import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

export const SongLyrics = ({song}) => (
	<View style={styles.container}>
		<ScrollView
			style={styles.scroll}
			showsVerticalScrollIndicator={false}
		>
			{Object.entries(song.lyrics).map(([start, line]) => (
				<View style={styles.line}>
					<Text style={styles.lineText}>
						{line}
					</Text>
				</View>
			))}
		</ScrollView>
	</View>
);


SongLyrics.propTypes = {
	song: PropTypes.object.isRequired
};

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

export default SongLyrics;
