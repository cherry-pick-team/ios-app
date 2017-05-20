import {connect} from 'react-redux';
import TabBarLayout from '../../components/TabBarLayout/TabBarLayout';
import {Actions, ActionConst} from 'react-native-router-flux';

const mapDispatchToProps = (dispatch, ownProps) => ({
	push: (route) => {
		Actions[route]({type: ActionConst.REFRESH});
	}
});

export const TabBarLayoutConnected = connect(null, mapDispatchToProps)(TabBarLayout);

export default TabBarLayoutConnected;
