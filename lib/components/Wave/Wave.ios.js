import React from 'react';
import {View, Image, Dimensions, ViewPropTypes} from 'react-native';
import WaveImage from './Wave.png';

const IMAGE_RATIO = 1440 / 412;

export const Wave = (props) => {
	const {width} = Dimensions.get('window');

	return (
		<View {...props}>
			<Image
				source={WaveImage}
				style={{
					width,
					height: width / IMAGE_RATIO
				}}
				resizeMode="contain"
			/>
		</View>
	)
};

Wave.propTypes = {
	...ViewPropTypes
};

export default Wave;
