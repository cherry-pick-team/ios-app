import {connect} from 'react-redux';
import TabBarLayout from '../../components/TabBarLayout/TabBarLayout';
import {Actions, ActionConst} from 'react-native-router-flux';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	push: (route) => {
		Actions[route]({type: ActionConst.REFRESH});
	}
});

export const TabBarLayoutConnected = connect(mapStateToProps, mapDispatchToProps)(TabBarLayout);

export default TabBarLayoutConnected;
