import React, {Component} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import HeartImage from './Heart.png';

/**
 * Анимированное сердце
 */
export default class FloatingHeart extends Component {

	constructor(props) {
		super(props);

		this._nextValue = 1;
		this._heartAnimation = new Animated.Value(0);
	}

	render() {
		return (
			<View style={styles.container}>
				<Animated.Image
					style={styles.image}
					source={HeartImage}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	image: {
		width: 251,
		height: 215,
		padding: 5,
	}
});
