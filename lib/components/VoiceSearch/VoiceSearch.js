import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';
import LinearGradient from 'react-native-linear-gradient';
import VoiceRecordButton from '../../containers/VoiceRecordButton/VoiceRecordButton';

export const VoiceSearch = () => (
	<TabBarLayoutConnected activeTab="voice-search">
		<StatusBar barStyle="light-content"/>
		<LinearGradient
			style={styles.container}
			start={{x: 0, y: 0}}
			end={{x: 1, y: 1}}
			colors={['#6597FB', '#A964FF']}
		>
			<View style={styles.title}>
				<Text style={styles.titleText}>
					Голосовой поиск
				</Text>
			</View>
			<View style={styles.recordButton}>
				<VoiceRecordButton/>
			</View>
			<View style={styles.description}>
				<Text style={styles.descriptionText}>
					Коснитесь, чтобы найти нужную песню
				</Text>
			</View>
		</LinearGradient>
	</TabBarLayoutConnected>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	description: {
		width: '70%',
		backgroundColor: 'rgba(0,0,0,0)',
		marginBottom: 60
	},
	descriptionText: {
		fontSize: 20,
		fontWeight: '300',
		color: 'white',
		textAlign: 'center'
	},
	title: {
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0)',
		marginTop: 30
	},
	titleText: {
		fontSize: 30,
		color: 'white',
		fontWeight: '200',
		textAlign: 'center'
	},
	recordButton: {
		height: '50%',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	}
});

export default VoiceSearch;
