import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image, Animated} from 'react-native';
import BorderImage from './Borders.png';
import Icon from '../Icon/Icon';

const RADIUS_MIN = 50;
const RADIUS_MAX = 100;

export default class VoiceRecordButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			radius: new Animated.Value(RADIUS_MIN)
		}
	}

	animateButtonExpand() {
		return new Promise((res) => {
			Animated.spring(
				this.state.radius,
				{toValue: RADIUS_MAX}
			).start(res)
		});
	}

	animateButtonCollapse() {
		return new Promise((res) => {
			Animated.spring(
				this.state.radius,
				{toValue: RADIUS_MIN}
			).start(res)
		});
	}

	handleRelease() {
		this.animateButtonCollapse();
	}

	handlePress() {
		this.animateButtonExpand();
	}

	render() {
		const sizeAnimation = this.state.radius.interpolate({
			inputRange: [RADIUS_MIN, RADIUS_MAX],
			outputRange: [2 * RADIUS_MIN, 2 * RADIUS_MAX],
		});

		return (
			<View style={styles.container}>
				<View style={styles.image}>
					<Image
						style={styles.border}
						source={BorderImage}
						resizeMode="contain"
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<TouchableWithoutFeedback
						onLongPress={this.handlePress.bind(this)}
						onPressOut={this.handleRelease.bind(this)}
					>
						<Animated.View style={[
							styles.button,
							{
								width: sizeAnimation,
								height: sizeAnimation,
								borderRadius: this.state.radius
							}
						]}/>
					</TouchableWithoutFeedback>
				</View>
				<TouchableWithoutFeedback
					onLongPress={this.handlePress.bind(this)}
					onPressOut={this.handleRelease.bind(this)}
				>
					<View>
						<Icon
							type="microphone"
							from="FontAwesome"
							color="#877DFE"
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	icon: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	border: {
		height: '100%',
		width: '100%'
	},
	button: {
		backgroundColor: 'white',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonWrapper: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
