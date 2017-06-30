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

	componentDidMount() {
		this.startAnimation();
	}

	startAnimation() {
		return new Promise((resolve) => {
			Animated.timing(this._heartAnimation, {
				toValue: this._nextValue,
				duration: 2000
			}).start(() => {
				this._nextValue = -1 * this._nextValue;
				this.startAnimation();
				resolve();
			});
		})
	}

	render() {

		const left = this._heartAnimation.interpolate({
			inputRange: [-1, 1],
			outputRange: [-50, 50],
		});

		const rotate = this._heartAnimation.interpolate({
			inputRange: [-1, 1],
			outputRange: ['10deg', '-10deg'],
		});

		return (
			<View style={styles.container}>
				<Animated.Image
					style={[styles.image, {transform: [{rotate: rotate}, {translateX: left}]}]}
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
		marginTop: 20
	},
	image: {
		width: 210,
		height: 200,
		padding: 5,
	}
});
