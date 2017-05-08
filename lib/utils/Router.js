"use strict";
import React, {Component, PropTypes} from 'react';
import Main from '../layouts/Main'
import History from '../layouts/History'
import Settings from '../layouts/Settings'
import SearchResults from '../layouts/SearchResults'
import LoadingScreen from '../layouts/LoadingScreen'
import {Router, Scene} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {populate} from '../actions/persist';


class RouterComponent extends Component {
	static PropTypes = {
		populate: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.populate();
	}

	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="main" component={Main} initial={true}/>
					<Scene key="history" component={History}/>
					<Scene key="settings" component={Settings}/>
					<Scene key="search-results" component={SearchResults}/>
					<Scene key="search-loader" component={LoadingScreen}/>
				</Scene>
			</Router>
		);
	}
}

export default connect(null, {populate})(RouterComponent);
