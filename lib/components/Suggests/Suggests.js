import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import TabBarLayout from '../TabBarLayout/TabBarLayout.connected';
import StatusBar from '../StatusBar/StatusBar';
import {primaryColor} from '../../shared/vars';
import SuggestsItem from './SuggestsItem';
import SuggestsHeader from './SuggestsHeader';

/**
 * Экран выбора результата поиска
 * в случае если API тветил несколькими
 * результами, например для поиска голосом
 * @constructor
 */
export const Suggests = ({results, search}) => (
	<TabBarLayout>
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		<SuggestsHeader/>
		{results.map((result, index) => (
			<TouchableOpacity onPress={search.bind(null, result.query)} key={index}>
				<SuggestsItem result={result}/>
			</TouchableOpacity>
		))}
	</TabBarLayout>
);

Suggests.propTypes = {
	results: PropTypes.array.isRequired,
	search: PropTypes.func.isRequired
};

export default Suggests;
