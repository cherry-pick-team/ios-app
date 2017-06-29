import React from 'react';
import LikedSongsList from './LikedSongsList.connected';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';
import StatusBar from '../StatusBar/StatusBar';
import {primaryColor} from '../../shared/vars';

export const LikedSongs = () => (
	<TabBarLayoutConnected activeTab="search-history">
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		<LikedSongsList/>
	</TabBarLayoutConnected >
);

export default LikedSongs;
