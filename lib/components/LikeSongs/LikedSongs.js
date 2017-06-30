import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LikedSongsList from './LikedSongsList';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';
import StatusBar from '../StatusBar/StatusBar';
import LikedSongsHeader from './LikedSongsHeader';
import Empty from './Empty';
import {primaryColor} from '../../shared/vars';

export default class LikedSongs extends Component {
	static propTypes = {
		songs: PropTypes.array,
		deleteEntry: PropTypes.func,
	};

	static defaultProps = {
		songs: [],
		deleteEntry: () => {},
	};

	render() {
		return (
			<TabBarLayoutConnected activeTab="search-history">
				<LikedSongsHeader/>
				<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
				{
					this.props.songs.length === 0 ?
					<Empty/>
					:
					<LikedSongsList songs={this.props.songs} deleteEntry={this.props.deleteEntry}/>
				}
			</TabBarLayoutConnected >
		)
	}
}
