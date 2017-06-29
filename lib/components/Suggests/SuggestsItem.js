import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import {textColor} from '../../shared/vars';
import Icon from '../Icon/Icon';

const ITEM_HEIGHT_EXPAND = 240;
const ITEM_HEIGHT_SMALL = 100;

/**
 * Элемент списка, содержит строчку запроса
 * и количество найденных песен
 * @constructor
 */
export default class SuggestsItem extends Component {
	static propTypes = {
		/** Содержит поле query и songs - количество песен по этому запросу */
		result: PropTypes.object.isRequired,
		/** Обработчик нажатия на неподвижный элемент блока */
		onPress: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this._dropDownAnimation = new Animated.Value(ITEM_HEIGHT_SMALL);

		this.state = {
			isOpen: false
		}
	}

	openDropdown() {
		Animated.timing(this._dropDownAnimation, {
			toValue: ITEM_HEIGHT_EXPAND,
			duration: 1000
		}).start(() => {
			this.setState({isOpen: true});
		});
	}

	closeDropdown() {
		Animated.timing(this._dropDownAnimation, {
			toValue: ITEM_HEIGHT_SMALL,
			duration: 1000
		}).start(() => {
			this.setState({isOpen: false});
		});
	}

	onControlPress() {
		if (this.state.isOpen) {
			this.closeDropdown();
		} else {
			this.openDropdown();
		}
	}

	render() {
		const songs = [{
			artist: 'Test Name',
			name: 'Test Song'
		}, {
			artist: 'Test Name',
			name: 'Test Song'
		}, {
			artist: 'Test Name',
			name: 'Test Song'
		}];

		return (
			<Animated.View style={[styles.container, {height: this._dropDownAnimation}]}>
				<View style={styles.dropdown}>
					<View style={styles.songList}>
						{songs.map((song) => (
							<View style={styles.song}>
								<Text>
									{`${song.artist} - ${song.name}`}
								</Text>
							</View>
						))}
					</View>
					<View style={styles.control}>
						<TouchableWithoutFeedback onPress={this.onControlPress.bind(this)}>
							<View>
								<Icon type="arrow-drop-down" size={40} color="black"/>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
				<View style={styles.result}>
					<TouchableWithoutFeedback onPress={this.props.onPress}>
						<View>
							<Text style={styles.queryText}>
								{this.props.result.query}
							</Text>
							<Text style={styles.songsText}>
								{this.props.result.songs + ' совпадений'}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</Animated.View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		borderBottomWidth: 1,
		borderColor: '#AAA',
		backgroundColor: 'gray',
	},
	dropdown: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	queryText: {
		fontWeight: '400',
		fontSize: 24,
		color: textColor
	},
	songsText: {
		fontWeight: '300',
		fontSize: 18,
		color: textColor
	},
	result: {
		backgroundColor: 'white',
		width: '100%',
		position: 'absolute',
		top: 0,
		paddingLeft: 20,
		height: 60
	},
	song: {},
	songList: {

	},
	control: {
		width: '100%',
		backgroundColor: 'white'
	}
});
