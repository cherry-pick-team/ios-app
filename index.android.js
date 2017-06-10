import React from 'react';
import {AppRegistry} from 'react-native';
import Router from './lib/Router';
import {ThemeProvider} from 'react-native-material-ui';
import {Provider} from 'react-redux';
import {configureStore} from './lib/store';


const Root = () => (
	<Provider store={configureStore()}>
		<ThemeProvider>
			<Router/>
		</ThemeProvider>
	</Provider>
);

AppRegistry.registerComponent('ShoZaSong', () => Root);
