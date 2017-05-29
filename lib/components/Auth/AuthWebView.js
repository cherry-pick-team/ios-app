import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, WebView, StyleSheet} from 'react-native';

export default class AuthWebView extends Component {
	static propTypes = {
		type: PropTypes.oneOf(['fb']),
		login: PropTypes.func.isRequired
	};

	onMessage(event) {
		//todo
		debugger;
	}

	getUrl() {
		return `https://zsong.ru/auth/${this.props.type}/redirect?mobile=1`;
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
