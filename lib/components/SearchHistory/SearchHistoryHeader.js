import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Header from '../Header/Header';
import Icon from '../Icon/Icon';

export const SearchHistoryHeader = ({deleteAll}) => (
	<Header style={styles.container}>
		<View style={styles.title}>
			<Icon type="history" size={35} color="white"/>
			<Text style={styles.titleText}>
				История
			</Text>
		</View>
		<TouchableOpacity onPress={deleteAll}>
			<View style={styles.deleteAll}>
				<Text style={styles.deleteAllText}>
					Удалить все
				</Text>
			</View>
		</TouchableOpacity>
	</Header>
);

SearchHistoryHeader.propTypes = {
	deleteAll: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	title: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleText: {
		color: 'white',
		fontSize: 20
	},
	deleteAll: {},
	deleteAllText: {
		color: 'white',
		fontSize: 20
	}
});

export default SearchHistoryHeader;
