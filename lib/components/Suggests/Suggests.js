import React from 'react';
import PropTypes from 'prop-types';
import TabBarLayout from '../TabBarLayout/TabBarLayout.connected';
import StatusBar from '../StatusBar/StatusBar';
import {primaryColor} from '../../shared/vars';
import SuggestsItem from './Suggests';

/**
 * Экран выбора результата поиска
 * в случае если API тветил несколькими
 * результами, например для поиска голосом
 * @constructor
 */
export const Suggests = ({results}) => (
	<TabBarLayout>
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		{results.map((result) => (
			<SuggestsItem result={result}/>
		))}
	</TabBarLayout>
);

SelectResultItem.propTypes = {
	result: PropTypes.array.isRequired
};

export default Suggests;
