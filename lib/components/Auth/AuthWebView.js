import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, WebView, StyleSheet} from 'react-native';

export default class AuthWebView extends Component {
	static propTypes = {
		type: PropTypes.oneOf(['fb'])
	};

	onMessage(event) {
		//todo
	}

	getUrl() {
		//todo
	}

	render() {
		return (
			<WebView
				style={styles.container}
				source={{uri: this.getUrl()}}
				onMessage={this.onMessage.bind(this)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {}
});
