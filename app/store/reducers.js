import {combineReducers} from 'redux';
import {reducerPrefixer} from '../appCommon/prefix';
import chat from '../modules/chatRoom/reducers';

export default combineReducers({
    ...chat
})