"use strict";
import React, {Component, PropTypes} from 'react';
import Drawer from 'react-native-drawer'
import DrawerPanel from './DrawerPanel.connected';


/**
 * Компонент Drawer менюшки
 */
export default class Main extends Component {

	static propTypes = {
		...Drawer.propTypes,
		open: PropTypes.bool
	};

	static defaultProps = {
		...Drawer.defaultProps,
		open: false
	};



	render() {
		return (
			<Drawer
				{...this.props}
				content={<DrawerPanel/>}
				tapToClose={true}
				openDrawerOffset={0.2}
				styles={drawerStyle}
				elevation={10}
				type="overlay"
				negotiatePan={true}
			>
				{this.props.children}
			</Drawer>
		);
	}
}

const drawerStyle = {
	drawer: {
		shadowColor: '#000000',
		backgroundColor: '#fff'
	}
};
