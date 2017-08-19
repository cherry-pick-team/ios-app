import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, Text} from 'react-native';
import Wave from '../Wave/Wave';
import LikeButton from '../LikeButton/LikeButton';
import {textColor} from '../../shared/vars'

export const SongInfo = ({song, isAuth}) => (
	<View>
		<Wave style={styles.wave}/>
		<View style={styles.container}>
			<View style={styles.cover}>
				<Image style={styles.coverImage} source={{uri: song.album.cover_url}}/>
			</View>
			<View style={styles.title}>
				<View style={styles.artist}>
					<Text style={styles.artistText}>
						{song.info.singers[0].name}
					</Text>
				</View>
				<View style={styles.album}>
					<Text style={styles.albumText}>
						{song.info.title}
					</Text>
				</View>
			</View>
			<View style={styles.settings}>
				{isAuth && <LikeButton isLiked={song.like} songId={song.id}/>}
			</View>
		</View>
	</View>
);

SongInfo.propTypes = {
	song: PropTypes.object.isRequired,
	isAuth: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 150,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 45,
		zIndex: 101,
		paddingBottom: 60,
		backgroundColor: 'white'
	},
	cover: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		marginLeft: 5
	},
	coverImage: {
		width: 80,
		height: 80,
		borderRadius: 40
	},
	title: {
		flex: 2,
		flexDirection: 'column',
		padding: 10,
		marginLeft: 15
	},
	settings: {
		flex: 1,
		padding: 10,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	artistText: {
		fontSize: 20,
		color: textColor
	},
	albumText: {
		color: textColor
	},
	wave: {
		position: 'absolute',
		top: -3
	}
});

export default SongInfo;
