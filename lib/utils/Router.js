"use strict";
import React, {Component, PropTypes} from 'react';
import Main from '../components/Main/Main'
import SearchResults from '../components/SearchResults/SearchResults'
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
			<Router hideNavBar={true} >
				<Scene key="root">
					<Scene key="main" component={Main} initial={true}/>
					<Scene key="search-results" component={SearchResults}/>
				</Scene>
			</Router>
		);
	}
}

export default connect(null, {populate})(RouterComponent);
