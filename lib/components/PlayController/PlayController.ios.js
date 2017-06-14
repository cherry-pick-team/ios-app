import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import TouchableIcon from '../TouchableIcon/TouchableIcon';
import {primaryColor} from '../../shared/vars'
import Sound from 'react-native-sound';

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
			hasError: false
		}
	}

	componentDidMount() {
		this.sound = new Sound(getSongUrl(this.props.songId, this.props.from, this.props.to), null, (error) => {
			if (error) {
				this.setState({hasError: true});
			}
		});
	}

	componentWillUnmount() {
		if (this.sound) {
			this.sound.release();
		}
	}

	play() {
		this.sound.play(this.onEnd.bind(this));
	}

	onEnd() {
		this.setState({isPlaying: false});
	}

	stop() {
		this.sound.pause();
	}

	handlePlay() {
		if (!this.props.isActive) {
			return;
		}
		if (this.state.isPlaying) {
			this.stop();
			this.setState({isPlaying: false});
		} else {
			this.play();
			this.setState({isPlaying: true});
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
					<TouchableIcon
						onPress={this.handlePlay.bind(this)}
						type={this.state.isPlaying ? 'pause' : 'play-arrow'}
						size={40}
						color={primaryColor}
					/>
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
