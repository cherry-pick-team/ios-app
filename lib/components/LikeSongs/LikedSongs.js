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
		updateLikedSongs: PropTypes.func.isRequired,
		isAuth: PropTypes.bool.isRequired,
	};

	static defaultProps = {
		songs: [],
		deleteEntry: () => {
		},
	};

	componentDidMount() {
		this.props.updateLikedSongs();
	}

	getContent() {
		if (this.props.songs.length !== 0) {
			return <LikedSongsList songs={this.props.songs} deleteEntry={this.props.deleteEntry}/>;
		} else {
			return <Empty isAuth={this.props.isAuth}/>;
		}
	}

	render() {
		return (
			<TabBarLayoutConnected activeTab="liked">
				<LikedSongsHeader/>
				<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
				{this.getContent()}
			</TabBarLayoutConnected >
		)
	}
}
