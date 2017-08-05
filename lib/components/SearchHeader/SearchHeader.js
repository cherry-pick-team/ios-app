import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../Header/Header';

export const SearchHeader = ({children, query}) => (
	<Header>
		<View style={styles.container}>
			<Text style={styles.caption}>
				{`Поиск: ${query}`}
			</Text>
		</View>
	</Header>
);

SearchHeader.propTypes = {
	query: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		height: '100%',
		width: '100%',
		paddingLeft: 5,
		paddingRight: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	caption: {
		color: 'white',
		fontSize: 20,
		fontWeight: '300',
	},
});

export default SearchHeader;
