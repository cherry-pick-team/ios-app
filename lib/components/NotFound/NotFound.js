import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TabBarLayout from '../TabBarLayout/TabBarLayout.connected';
import Link from '../Link/Link.connected';
import icon from './Icon.png';
import {primaryColor} from '../../shared/vars';
import StatusBar from '../StatusBar/StatusBar';

export const NotFound = () => (
	<TabBarLayout>
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={icon}
			/>
			<View style={styles.capture}>
				<Text style={styles.captureText}>
					Ничего не найдено
				</Text>
			</View>
			<View style={styles.button}>
				<Link to="voice-search">
					<View style={styles.voiceSearchButton}>
						<Text style={styles.voiceSearchButtonText}>
							Голосовой поиск
						</Text>
					</View>
				</Link>
			</View>
		</View>
	</TabBarLayout>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	icon: {
		width: 200,
		height: 200,
		backgroundColor: 'red'
	},
	capture: {
		flex: 1
	},
	button: {
		flex: 1
	},
	image: {
		width: '50%',
		height: '40%',
		flex: 2
	},
	captureText: {
		fontSize: 24,
		fontWeight: '300'
	},
	voiceSearchButton: {
		backgroundColor: primaryColor,
		borderRadius: 4,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20
	},
	voiceSearchButtonText: {
		fontSize: 24,
		fontWeight: '300',
		color: 'white'
	}
});

export default NotFound;
