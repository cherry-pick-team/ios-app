import {connect} from 'react-redux';
import VoiceRecordButton from '../../components/VoiceSearch/VoiceRecordButton';
import {voiceSearch} from '../../actions/search';

const mapDispatchToProps = (dispatch, ownProps) => ({
	search: (filePath) => {
		dispatch(voiceSearch(filePath));
	}
});

export const VoiceRecordButtonConnected = connect(null, mapDispatchToProps)(VoiceRecordButton);

export default VoiceRecordButtonConnected;
