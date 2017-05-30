import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TabBarLayout from '../TabBarLayout/TabBarLayout.connected';
import Link from '../Link/Link.connected';

export const NotFound = () => (
	<TabBarLayout>
		<View style={styles.container}>
			<View style={styles.icon}>
				<Image/>
				<View>
					<Text>
						Ничего не найдено
					</Text>
				</View>
			</View>
			<View style={styles.button}>
				<Link>
					<View>
						<Text>
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
		flexDirection: 'column',
		alignItems: 'center'
	},
	icon: {},
	button: {}
});

export default NotFound;
