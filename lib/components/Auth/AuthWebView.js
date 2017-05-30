import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView, StyleSheet} from 'react-native';

export default class AuthWebView extends Component {
	static propTypes = {
		kind: PropTypes.oneOf(['fb']),
		login: PropTypes.func.isRequired
	};

	onNavigationStateChange(event) {
		console.log(event);
	}

	getUrl() {
		return `https://zsong.ru/auth/${this.props.kind}/redirect?mobile=1`;
	}

	render() {
		return (
			<WebView
				style={styles.container}
				source={{uri: this.getUrl()}}
				onNavigationStateChange={this.onNavigationStateChange.bind(this)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	}
});
