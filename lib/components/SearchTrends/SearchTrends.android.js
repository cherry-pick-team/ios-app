"use strict";
import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Wave from '../Wave/Wave';
import TrendsItem from './SearchTrendsItem';


/**
 * Список трендовых песен
 */
export default class SearchTrends extends Component {
	static propTypes = {
		trends: PropTypes.object,
		fetchTrends: PropTypes.func.isRequired,
		onItemPress: PropTypes.func.isRequired
	};

	componentWillMount() {
		if (!this.props.trends.isLoaded) {
			this.props.fetchTrends();
		}
	}

	/**
	 * Создает список трендов
	 * @param trends - массив трендов
	 */
	getTrendsList(trends) {
		return trends.map((trend, index) => (
			<TrendsItem
				key={index}
				trend={trend.query}
				count={trend.count}
				place={index + 1}
				onPress={this.props.onItemPress}
			/>
		));
	}

	render() {
		return (
			<View style={styles.container}>
				<Wave style={styles.wave}/>
				<View style={styles.list}>
					{this.getTrendsList(this.props.trends.entries)}
				</View>
			</View>
		);
	}
}

const styles = {
	list: {
		flexDirection: 'column',
		marginTop: 70,
		paddingBottom: 80,
		height: 580
	},
	wave: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%'
	}
};
