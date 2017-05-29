"use strict";
import React, {Component, PropTypes} from 'react';
import Main from '../components/Main/Main';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchLoading from '../components/SearchLoading/SearchLoading';
import VoiceSearch from '../components/VoiceSearch/VoiceSearch';
import SearchHistory from '../components/SearchHistory/SearchHistory';
import Auth from '../components/Auth/Auth';
import {Router, Scene} from 'react-native-router-flux';


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
					<Scene key="search-loader" component={SearchLoading}/>
					<Scene key="search-results" component={SearchResults}/>
					<Scene key="search-history" component={SearchHistory}/>
					<Scene key="voice-search" component={VoiceSearch}/>
					<Scene key="auth" component={Auth}/>
				</Scene>
			</Router>
		);
	}
}

export default connect(null, {populate})(RouterComponent);
