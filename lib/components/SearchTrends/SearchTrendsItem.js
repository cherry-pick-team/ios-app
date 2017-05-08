import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';


//todo
export const SearchTrendsItem = (props) => (
	<View>
	</View>
);

SearchTrendsItem.propTypes = {
	query: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	place: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired
};

export default SearchTrendsItem;
