import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {textColor} from '../../shared/vars';

/**
 * Элемент списка, содержит строчку запроса
 * и количество найденных песен
 * @constructor
 */
export default class SuggestsItem extends Component {
	static propTypes = {
		/** Содержит поле query и songs - количество песен по этому запросу */
		result: PropTypes.object.isRequired
	};

	render () {
		return (
			<View style={styles.container}>
				<Animated.View style={styles.dropdown}>
				</Animated.View>
				<View>
					<Text style={styles.queryText}>
						{result.query}
					</Text>
					<Text style={styles.songsText}>
						{result.songs + ' совпадений'}
					</Text>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		height: 80,
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderColor: '#AAA',
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
	}
});

export default SuggestsItem;
