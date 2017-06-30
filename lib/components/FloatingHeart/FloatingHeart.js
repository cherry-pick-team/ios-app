import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import HeartImage from 'Heart.png';

/**
 * Анимированное сердце
 */
export default class FloatingHeart extends Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<View style={styles.container}>
				<View style={styles.heart}>
					<Image style={styles.image} source={HeartImage}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {

	},
	heart: {

	},
	image: {
		width: 100,
		height: 100,
	}
});
