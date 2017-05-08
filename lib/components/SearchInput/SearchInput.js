import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import SearchBar from 'react-native-search-bar';


//todo
export const SearchInput = (props) => (
	<View {...props}>
		<SearchBar
			placeholder='Поиск фразы'
			onSearchButtonPress={props.onSubmit}
		/>
	</View>
);

SearchInput.propTypes = {
	...View.propTypes,
	onSubmit: PropTypes.func.isRequired
};
