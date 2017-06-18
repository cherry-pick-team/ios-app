"use strict";
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, ViewPropTypes} from 'react-native';
import Drawer from '../Drawer/Drawer'
import Header from '../Header/Header';


export default class BaseDrawerLayout extends Component {

	static propTypes = {
		...ViewPropTypes,
		headerChildren: PropTypes.element
	};

	static defaultProps = {
		...View.defaultProps
	};

	constructor(props) {
		super(props);
		this.state = {isDrawerOpen: false};
	}

	openControlPanel() {
		this.setState({isDrawerOpen: true})
	};

	_onClose() {
		this.setState({isDrawerOpen: false})
	}

	render() {
		return (
			<Drawer
				{...this.props}
				open={this.state.isDrawerOpen}
				onClose={this._onClose.bind(this)}
			>
				<Header style={styles.header} onMenuClick={() => this.openControlPanel()}>
					{this.props.headerChildren}
				</Header>
				<View style={styles.content}>
					{this.props.children}
				</View>
			</Drawer>
		);
	}
}

const styles = StyleSheet.create({
	header: {
	},
	content: {
		marginBottom: 50
	}
});