import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image} from 'react-native';

export const SongInfo = ({song}) => (
	<View style={styles.container}>
		<View style={styles.wave}>

		</View>
	</View>
);

SongInfo.propTypes = {
	song: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {

	},
	wave: {

	}
});

export default SongInfo;
