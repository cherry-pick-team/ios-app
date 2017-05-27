import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Icon from '../TouchableIcon/TouchableIcon';
import Sound from 'react-native-sound';

export default class PlayController extends Component {
	static propTypes = {
		onPrev: PropTypes.func.isRequired,
		onNext: PropTypes.func.isRequired,
		songId: PropTypes.string.isRequired
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

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.playButton}>
					<TouchableIcon onPress={this.handlePlay.bind(this)}/>
				</View>
				<View style={styles.nextButton}>
					<TouchableIcon onPress={this.handleNext.bind(this)}/>
				</View>
				<View style={styles.prevButton}>
					<TouchableIcon onPress={this.handlePrev.bind(this)}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	nextButton: {

	},
	playButton: {

	},
	prevButton: {

	}
});
