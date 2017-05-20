import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected';
import LinearGradient from 'react-native-linear-gradient';
import VoiceRecordButton from './VoiceRecordButton';

export const VoiceSearch = () => (
	<TabBarLayoutConnected activeTab="voice-search">
		<StatusBar barStyle="light-content"/>
		<LinearGradient
			style={styles.container}
			start={{x: 0, y: 0}}
			end={{x: 1, y: 1}}
			colors={['#6597FB', '#A964FF']}
		>
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
	recordButton: {
		height: '50%',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '20%'
	}
});

export default VoiceSearch;
