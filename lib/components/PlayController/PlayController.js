import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Spinner from 'react-native-spinkit';
import Sound from 'react-native-sound';
import TouchableIcon from '../TouchableIcon/TouchableIcon';
import {primaryColor} from '../../shared/vars'

const getSongUrl = (id, from, to) => `https://zsong.ru/crop/get_song/?id=${id}&from_ms=${from}&to_ms=${to}`;

export default class PlayController extends Component {
	static propTypes = {
		onPrev: PropTypes.func.isRequired,
		onNext: PropTypes.func.isRequired,
		songId: PropTypes.string.isRequired,
		from: PropTypes.number.isRequired,
		to: PropTypes.number.isRequired,
		isActive: PropTypes.bool.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
			isLoading: false,
			hasError: false,
		}
	}

	load(callback) {
		this.setState({isLoading: true});
		this.sound = new Sound(
			getSongUrl(this.props.songId, this.props.from, this.props.to),
			null,
			(error) => {
				this.setState({isLoading: false});
				callback(error)
			},
		);
	}

	componentWillUnmount() {
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
	};

	play() {
		this.sound.play(this.onEnd.bind(this));
		this.setState({isPlaying: true});
	}

	onEnd() {
		this.setState({isPlaying: false});
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
	}

	stop() {
		this.sound.pause();
		this.setState({isPlaying: false});
		if (this.sound) {
			this.sound.release();
			this.sound = null;
		}
	}

	handlePlay() {
		if (!this.props.isActive) {
			return;
		}
		if (this.state.isPlaying) {
			this.stop();
			this.setState({isPlaying: false});
		} else {
			if (this.sound) {
				this.play();
			} else {
				this.load((error) => {
					if (error) {
						return;
					}
					this.play();
				})
			}
		}
	}

	handleNext() {
		if (!this.props.isActive) {
			return;
		}
		if (this.state.isPlaying) {
			this.stop();
			this.setState({isPlaying: false});
		}
		this.props.onNext();
	}

	handlePrev() {
		if (!this.props.isActive) {
			return;
		}
		if (this.state.isPlaying) {
			this.stop();
			this.setState({isPlaying: false});
		}
		this.props.onPrev();
	}

	getPlayIcon() {
		if (this.state.isLoading) {
			return (
				<Spinner
					type="Arc"
					color={primaryColor}
					size={40}
				/>
			);
		} else {
			return (
				<TouchableIcon
					onPress={this.handlePlay.bind(this)}
					type={this.state.isPlaying ? 'pause' : 'play-arrow'}
					size={40}
					color={primaryColor}
				/>
			);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.button}>
					<TouchableIcon
						onPress={this.handlePrev.bind(this)}
						type="skip-previous"
						size={40}
						color={primaryColor}
					/>
				</View>
				<View style={styles.button}>
					{this.getPlayIcon()}
				</View>
				<View style={styles.button}>
					<TouchableIcon
						onPress={this.handleNext.bind(this)}
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
