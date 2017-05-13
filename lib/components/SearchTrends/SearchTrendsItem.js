import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';


//todo
export const SearchTrendsItem = ({query, count, place, onPress}) => (
	<View style={styles.container}>
		<View style={styles.place}>
			<Text style={styles.placeText}>
				{'0' + (place + 1)}
			</Text>
		</View>
		<View style={styles.description}>
			<Text style={styles.queryText}>
				{query}
			</Text>
			<Text style={styles.countText}>
				{count}
			</Text>
		</View>
	</View>
);

SearchTrendsItem.propTypes = {
	query: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	place: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingLeft: 35,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 35
	},
	place: {
		flex: 1,
		height: '100%'
	},
	placeText: {
		fontSize: 22,
		fontWeight: '200'
	},
	description: {
		flexDirection: 'column',
		flex: 5
	},
	queryText: {
		fontSize: 22,
		fontWeight: '200'
	},
	countText: {
		fontSize: 16,
		fontWeight: '200'
	}
});

export default SearchTrendsItem;
