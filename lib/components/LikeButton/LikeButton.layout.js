import React from 'react';
import PropTypes from 'prop-types';
import TouchableIcon from '../TouchableIcon/TouchableIcon';


export const LikeButton = ({like, songId, isLiked}) => (
	<TouchableIcon
		onPress={!isLiked ? like.bind(null, songId) : () => {}}
		type={isLiked ? 'heart' : 'heart-o'}
		from="FontAwesome"
		size={40}
		color="#FF0045"
	/>
);

LikeButton.propTypes = {
	like: PropTypes.func.isRequired,
	songId: PropTypes.number.isRequired,
	isLiked: PropTypes.bool.isRequired
};

export default LikeButton;
