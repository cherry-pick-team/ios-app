import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import BorderImage from './Borders.png';

export default class VoiceRecordButton extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.border}
					source={BorderImage}
					resizeMode="contain"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%'
	},
	border: {
		height: '100%',
		width: '100%'
	}
});
