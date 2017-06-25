"use strict";
import DrawerPanel from './DrawerPanel';
import {replace} from '../../actions/router';
import {connect} from 'react-redux';

export default connect(() => ({}), {changeRoute: replace})(DrawerPanel)
