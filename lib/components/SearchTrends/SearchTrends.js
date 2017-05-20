import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import SearchTrendsItemConnected from '../../containers/SearchTrendsConnected/SearchTrendsItemConnected';
import Wave from './Wave.png';

const IMAGE_RATIO = 1440 / 412;

export default class SearchTrends extends Component {
	componentWillMount() {
		this.props.fetchTrends();
	}

	render() {
		const {trends} = this.props;
		const {width} = Dimensions.get('window');

		return (
			<View style={styles.container}>
				<View style={styles.wave}>
					<Image
						source={Wave}
						style={{
							width,
							height: width / IMAGE_RATIO
						}}
						resizeMode="contain"
					/>
				</View>
				<View style={styles.list}>
					{trends.map((trend, index) => (
						<SearchTrendsItemConnected
							key={index}
							query={trend.query}
							place={index}
							count={trend.count}
						/>
					))}
				</View>
			</View>
		);
	}
}

SearchTrends.propTypes = {
	trends: PropTypes.array.isRequired,
	fetchTrends: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0)',
		paddingTop: 80,
	},
	wave: {
		position: 'absolute',
		top: -3
	},
	list: {
		backgroundColor: 'white'
	}
});
