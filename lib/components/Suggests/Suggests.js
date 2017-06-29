import React from 'react';
import {ScrollView} from 'react-native';
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
		<ScrollView
			contentContainerStyle={{paddingBottom: 78}}
			showsVerticalScrollIndicator={false}
		>
			{results.map((result, index) => (
				<SuggestsItem result={result} onPress={search.bind(null, result.query)} key={result.query}/>
			))}
		</ScrollView>
	</TabBarLayout>
);

Suggests.propTypes = {
	results: PropTypes.array.isRequired,
	search: PropTypes.func.isRequired
};

export default Suggests;
