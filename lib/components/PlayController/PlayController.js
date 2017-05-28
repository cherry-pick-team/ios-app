import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import TouchableIcon from '../TouchableIcon/TouchableIcon';
import {primaryColor} from '../../shared/vars'
import Sound from 'react-native-sound';

export default class PlayController extends Component {
	static propTypes = {
		onPrev: PropTypes.func.isRequired,
		onNext: PropTypes.func.isRequired,
		songId: PropTypes.string.isRequired,
		isActive: PropTypes.bool.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false
		}
	}

	play() {

	}

	stop() {

	}

	_handleStatus() {

	}

	handlePlay() {

	}

	handleNext() {

	}

	handlePrev() {

	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.button}>
					<TouchableIcon
						onPress={this.handleNext.bind(this)}
						type="skip-previous"
						size={40}
						color={primaryColor}
					/>
				</View>
				<View style={styles.button}>
					<TouchableIcon
						onPress={this.handlePlay.bind(this)}
						type="play-arrow"
						size={40}
						color={primaryColor}
					/>
				</View>
				<View style={styles.button}>
					<TouchableIcon
						onPress={this.handlePrev.bind(this)}
						type="skip-next"
						size={40}
						color={primaryColor}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 60,
		flex: 1
	},
	button: {
		height: 60,
		width: 60,
		borderRadius: 30,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	nextButton: {},
	playButton: {},
	prevButton: {}
});
