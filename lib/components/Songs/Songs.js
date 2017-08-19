import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Song from './Song';
import SearchHeaderConnected from '../../containers/SearchHeaderConnected/SearchHeaderConnected';
import Swiper from 'react-native-swiper'

export const Songs = ({songs, isAuth}) => (
	<View style={styles.container}>
		<SearchHeaderConnected/>
		<Swiper
			loadMinimal
			loadMinimalSize={1}
			loop={false}
			showsPagination={false}
		>
			{songs.map((song, index) => (
				<Song song={song} key={index} isAuth={isAuth}/>
			))}
		</Swiper>
	</View>
);

Songs.propTypes = {
	songs: PropTypes.array.isRequired,
	isAuth: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	}
});

export default Songs;
