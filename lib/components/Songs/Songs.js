import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Song from './Song';
import Swiper from 'react-native-swiper'

export const Songs = ({songs}) => (
	<View style={styles.container}>
		<Swiper
			loadMinimal
			loadMinimalSize={1}
			loop={false}
			showsPagination={false}
		>
			{songs.map((song, index) => (
				<Song song={song} key={index}/>
			))}
		</Swiper>
	</View>
);

Songs.propTypes = {
	songs: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	}
});

export default Songs;