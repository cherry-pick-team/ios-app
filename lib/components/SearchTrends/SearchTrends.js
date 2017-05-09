import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import SearchTrendsItemConnected from '../../containers/SearchTrendsConnected/SearchTrendsItemConnected';


//todo
export const SearchTrends = (props) => (
	<View>
		{props.trends.map((trend, index) => (
			<SearchTrendsItemConnected
				key={index}
				query={trend.query}
				place={index}
				count={trend.count}
			/>
		))}
	</View>
);

SearchTrends.propTypes = {
	trends: PropTypes.array.isRequired
};

export default SearchTrends;
